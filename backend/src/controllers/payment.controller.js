const { instance } = require('../../src/payment');

const crypto = require('crypto');
const paymentModel = require('../models/payment.model');
const captainModel = require('../models/captain.model');
const adminModel = require('../models/admin.model');
const { sendMessageToSocketId } = require('../socket');



const checkouts = async (req, res) => {
    try {


        const options = {
            // amount: 50000,  //static demo amount Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            amount: Number(req.body.amount * 100),  //dynamic amount
            currency: "INR",
        };
        const order = await instance.orders.create(options);
        console.log('Order:', order);
        res.status(200).json({ success: true, order });

    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, message: 'Order creation failed', error });
    }

};


const paymentVerification = async (req, res, io) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const { captainId, fare } = req.query;

        if (!fare || !captainId) {
            return res.status(400).json({
                success: false,
                message: "Fare and Captain ID are required"
            });
        }

        const body = `${razorpay_order_id}|${razorpay_payment_id}`;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest('hex');

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ success: false, message: "Payment verification failed" });
        }

        const commission = Math.round(fare * 0.7);
        const companyEarnings = Math.round(fare * 0.3);

        const captain = await captainModel.findByIdAndUpdate(
            captainId,
            { $inc: { earnings: commission } },
            { new: true }
        );

        if (!captain) {
            return res.status(404).json({ success: false, message: "Captain not found" });
        }

        await adminModel.findOneAndUpdate(
            {},
            { $inc: { earnings: companyEarnings } },
            { new: true, upsert: true }
        );

        sendMessageToSocketId(captain.socketId, {
            event: "payment-received",
            data: {
                message: "Payment received",
                fare,
                earnings: commission
            }
        });

        return res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`);
        
    } catch (error) {
        console.error('Error verifying payment:', error);
        return res.status(500).json({ success: false, message: 'Payment verification failed', error });
    }
};

module.exports = { checkouts, paymentVerification };
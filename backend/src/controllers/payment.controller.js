const { instance } = require('../../src/payment');

const crypto = require('crypto');
const paymentModel = require('../models/payment.model');




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


const paymentVerification = async (req, res) => {
    try {

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body


        //Create a string using the order ID and payment ID
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        //  Generate HMAC (Hash-based Message Authentication Code) using 'crypto' module
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest('hex');

        console.log("sig received ", razorpay_signature);
        console.log("sig generated ", expectedSignature);

        //Compare the generated signature with the one received from Razorpay
        const verifysign = expectedSignature === razorpay_signature;


        console.log("verifysign", verifysign);

        if (verifysign) {
            await paymentModel.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature
            })
                
            res.redirect(
                `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
            );
        } else {

            res.status(400).json({
                success: false,
                message: 'Payment verification failed verifiysign is false',
            });
        }


    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, message: 'Order creation failed', error });
    }

};



module.exports = { checkouts, paymentVerification };
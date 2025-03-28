const { Router } = require('express');
const { checkouts, paymentVerification } = require('../controllers/payment.controller');
const { userValidateToken } = require('../middleware/tokengen');


const router = Router();


router.post('/checkout', userValidateToken, checkouts);
router.post('/paymentverification', paymentVerification)
router.get("/getkey", userValidateToken, (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_KEY_ID })
})

module.exports = router; 
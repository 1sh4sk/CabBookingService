const {Router}= require('express');
const {checkouts,paymentVerification} = require('../controllers/payment.controller');


const router = Router();
 

router.post('/checkout',checkouts);
router.post('/paymentverification',paymentVerification)
router.get("/getkey",(req,res)=>{
    res.status(200).json({key:process.env.RAZORPAY_KEY_ID})
})

module.exports = router; 
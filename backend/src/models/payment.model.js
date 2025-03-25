const {Schema,model}=require('mongoose')



const paymentSchema = new Schema({

     razorpay_order_id:{
        type:String,
        required: true
     },
     razorpay_payment_id:{
        type:String,
        required: true
     },
     razorpay_signature :{
        type:String,
        required: true
     },
})


const paymentModel = model("paymentdata", paymentSchema);


module.exports=paymentModel;
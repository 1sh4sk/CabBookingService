const { Schema, model, Types } = require("mongoose")
const userModel =require("../models/user.model")

const rideSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "user",
        required: true
    },
    captain: {
        type: Types.ObjectId,
        ref: "captain",

    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "ongoing", "completed", "cancelled"],
        default: "pending"
    },
    duration: {
        type: Number, //in seconds
    },
    distance: {
        type: Number, //in meters
    },
    paymentID: {
        type: String
    },
    orderID: {
        type: String
    },
    signature: {
        type: String
    },
    otp: {
        type: String,
        select: false,
        required: true
    }
}, { timestamps: true })


const RideModel = model("Ride", rideSchema);

module.exports = RideModel;
const { Schema, model } = require("mongoose");



const captianSchema = new Schema({

    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "Required minimum 3 Characters"]
        },
        lastname: {
            type: String,
            minlength: [3, "Required minimum 3 Characters"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter a valid email']   // email format checker
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketid: {
        type: String
    },
    status: {
        type: String,
        enum: ['active','inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            min: [3, "color must be at least 3 characters"]
        },
        plate: {
            type: String,
            required: true,
            min: [3, "plate must be at least 3 characters"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"]
        },
        vehicletype: {
            type: String,
            required: true,
            enum: ['car', 'auto', 'motorcycle']
        }
    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    },
}, { timestamps: true })

const captainModel = model("captainModel", captianSchema)

module.exports=captainModel;
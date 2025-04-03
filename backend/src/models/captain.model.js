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

    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    approval: {
        type: String,
        enum: ['approved', 'pending', 'rejected'],
        default: 'pending'
    },
    vehicle: {
        vehiclename: {
            type: String,
            required: true,
            min: [3, "Vehicle name must be at least 3 characters"]
        },
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
            enum: ['premier', 'tripmateauto', 'tripmatebike', 'tripmatego']
        }
    },
    location: {
        type: {
            type: String,
            enum: ['Point']  // Fix: Define type explicitly
        },
        coordinates: {
            type: [Number],  // Fix: Store as an array [longitude, latitude]
        }
    },
    license_image: {
        type: String,
        required: true
    },
    vehicle_image: {
        type: String,
        required: true
    },
    rc_book_image: {
        type: String,
        required: true
    },
    driver_image: {
        type: String,
        required: true
    },
    earnings: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

captianSchema.index({ location: "2dsphere" });


const captainModel = model("captainModel", captianSchema)

module.exports = captainModel;
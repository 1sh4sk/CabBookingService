const { Schema, model } = require('mongoose')



const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter a valid email']
    }, password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        default: 'admin'
    },
})

const adminModel = model('admin', adminSchema)

module.exports=adminModel;
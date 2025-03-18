const { Schema, model } = require("mongoose")




const userschema = new Schema({
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
        lowercase:true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    livetracking: {
        socketid: { type: String }
    }
},
    { timestamps:true })

const userModel = model("userModel",userschema);

module.exports = userModel
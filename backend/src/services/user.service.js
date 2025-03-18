const userModel = require("../models/user.model")


const createUser = async ({ firstname, lastname, email, password ,phonenumber}) => {
    if (!firstname || !password || !email || !phonenumber) {
        throw new Error('All fields are required')
    }

    const user = userModel.create({
        
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        phonenumber
    })
  return user
} 

module.exports = {createUser};
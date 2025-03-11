const userModel = require("../models/user.model")
const userService = require("../services/user.services ")
const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }


    const {firstname ,lastname ,email,password}= req.body;
    const hass = await  bcrypt.hash(password,10)
    const user = await  userService.createUser({
        firstname,
        lastname,
        email,
        password: hass

    })





}



module.exports = registerUser;
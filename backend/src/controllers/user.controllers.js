const userModel = require("../models/user.model")
const userService = require("../services/user.service")
const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt");
const {generatortoken} = require("../middleware/tokengen")


const registerUser = async (req, res, next) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    const { fullname, email, password } = req.body;
    const checkEmail = await userModel.exists({ email });

    if (checkEmail) return res.status(409).json({ message: "email already Exists" });

    const hass = await bcrypt.hash(password, 10);

    const user = await userService.createUser(
        {

            firstname: fullname.firstname,
            lastname: fullname.lastname || "",
            email,
            password: hass

        }
    )


    const token = generatortoken(user);

    return res.status(201).json({ token, user });



}

const loginUser = async (req, res, next) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }

        const { email, password } = req.body;
        const checkEmail = await userModel.findOne({ email }).select('+password');    // .select('+password') because in schema select is false & to get password to compare
        if (!checkEmail) return res.status(409).json({ message: "Email invalid" });
        const checkpassword = await bcrypt.compare(password, checkEmail.password)
        if (!checkpassword) return res.status(409).json({ message: "Password invalid" });


        let token = generatortoken(checkEmail)
        console.log(token);
        
        res.json({ token, checkEmail })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}


const getUserProfile = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        res.json({ user: req.user });
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};













module.exports = { registerUser, loginUser, getUserProfile };
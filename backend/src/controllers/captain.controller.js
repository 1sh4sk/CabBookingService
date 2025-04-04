const captainModel = require("../models/captain.model");

const { createCaptain } = require("../services/captain.service")

const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt");
const { generatortoken } = require("../middleware/tokengen");
const blacklistTokenModel = require("../models/blacklistToken.model");

// Captain Register
// const registerCaptain = async (req, res, next) => {
//     const error = validationResult(req);

//     if (!error.isEmpty()) {
//         return res.status(400).json({ error: error.array() })
//     }

//     const { fullname, email, password, vehicle } = req.body;
//     const checkEmail = await captainModel.exists({ email });

//     if (checkEmail) return res.status(409).json({ message: "email already Exists" });

//     const hass = await bcrypt.hash(password, 10);

//     const captain = await createCaptain(           //  captainservice 
//         {

//             firstname: fullname.firstname,
//             lastname: fullname.lastname || "",
//             email,
//             password: hass,
//             vehiclename: vehicle.vehiclename,
//             color: vehicle.color,
//             plate: vehicle.plate,
//             capacity: vehicle.capacity,
//             vehicletype: vehicle.vehicletype,

//         }
//     )

//     const token = generatortoken(captain);

//     return res.status(201).json({ token, captain });

// }

const registerCaptain = async (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    const { email, password } = req.body;
    const files = req.files;

    // Parse JSON fields
    const fullname = JSON.parse(req.body.fullname);
    const vehicle = JSON.parse(req.body.vehicle);


    const requiredFiles = ["license_image", "vehicle_image", "rc_book_image", "driver_image"];

    // Check if all required images are uploaded
    for (let file of requiredFiles) {


        if (!req.files || !req.files[file]) {
            return res.status(400).json({ message: `Missing required file: ${file}` });
        }
    }

    const checkEmail = await captainModel.exists({ email });

    if (checkEmail) return res.status(409).json({ message: "email already Exists" });

    const hass = await bcrypt.hash(password, 10);

    const captain = await createCaptain(           //  captainservice 
        {

            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hass,
            vehiclename: vehicle.vehiclename,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicletype: vehicle.vehicletype,
            license_image: files["license_image"][0]?.path,
            vehicle_image: files["vehicle_image"][0]?.path,
            rc_book_image: files["rc_book_image"][0]?.path,
            driver_image: files["driver_image"][0]?.path,
        }
    )

    const token = generatortoken(captain);

    return res.status(201).json({ token, captain });

}


// login captain
const loginCaptain = async (req, res, next) => {
    try {


        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }

        const { email, password } = req.body;
        const checkEmail = await captainModel.findOne({ email }).select('+password');    // .select('+password') because in schema select is false & to get password to compare
        if (!checkEmail) return res.status(409).json({ message: "Email invalid" });
        const checkpassword = await bcrypt.compare(password, checkEmail.password)
        if (!checkpassword) return res.status(409).json({ message: "Password invalid" });


        let token = generatortoken(checkEmail)


        res.json({ token, checkEmail })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

// captain profile

const getCaptainProfile = async (req, res) => {

    try {

        if (!req.captain) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        res.json({ captain: req.captain });
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// captain logout

const logoutCaptain = async (req, res) => {                  // captain logout
    try {
        res.clearCookie('token'); // Clear cookie

        // Extract token from cookies or Authorization header
        const authHeader = req.headers.authorization || "";
        const token = req.cookies?.token || authHeader.split(" ")[1] || null;

        if (!token) {
            return res.status(400).json({ message: "No token provided" });
        }

        // Check if token is already blacklisted
        const existingToken = await blacklistTokenModel.findOne({ token });
        if (existingToken) {
            return res.status(200).json({ message: "Already logged out" });
        }

        // Add token to blacklist
        await blacklistTokenModel.create({ token });

        res.status(200).json({ message: "Logged Out" });
    } catch (error) {
        res.status(500).json({ message: "Logout failed", error: error.message });
    }
};


module.exports = { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain };







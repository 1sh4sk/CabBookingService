
const { validationResult } = require('express-validator');
const adminModel = require('../models/admin.model');
const { createAdminn } = require('../services/admi.service');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');

const createAdmin = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }

        const { email, password } = req.body;

        const checkEmail = await adminModel.exists({ email });

        if (checkEmail) return res.status(409).json({ message: "email already Exists" });

        const hass = await bcrypt.hash(password, 10);

        const admin = await createAdminn(
            {
                email,
                password: hass,
            }
        )
        return res.status(201).json({ admin });
    }
    catch (error) {  // Make sure to use 'error' from the catch block
        return res.status(500).json({ error: error.message });
    }
}

const loginAdmin = async (req, res) => {
    try {

        const error = validationResult(req);
        console.log(error);

        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }
        console.log('triggered')
        const { email, password } = req.body;
        const checkEmail = await adminModel.findOne({ email }).select('+password');    // .select('+password') because in schema select is false & to get password to compare
        if (!checkEmail) return res.status(409).json({ message: "Email invalid" });
        const checkpassword = await bcrypt.compare(password, checkEmail.password)
        if (!checkpassword) return res.status(409).json({ message: "Password invalid" });

        res.json({ admindetails: checkEmail })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getCounts = async (req, res) => {
    try {
        const totalUsers = await userModel.countDocuments();
        const totalCaptains = await captainModel.countDocuments();

        return res.status(200).json({
            totalUsers,
            totalCaptains
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find(); // Fetch all users
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllCaptains = async (req, res) => {
    try {
        const captains = await captainModel.find(); // Fetch all captains
        return res.status(200).json(captains);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
const deleteCaptain = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCaptain = await captainModel.findByIdAndDelete(id);

        if (!deletedCaptain) {
            return res.status(404).json({ message: "Captain not found" });
        }

        return res.status(200).json({ message: "Captain deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = { createAdmin, loginAdmin, getCounts, getAllUsers ,deleteUser,getAllCaptains,deleteCaptain};
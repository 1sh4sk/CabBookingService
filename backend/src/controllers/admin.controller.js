
const { validationResult } = require('express-validator');
const adminModel = require('../models/admin.model');
const { createAdminn } = require('../services/admi.service');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const sendApprovalEmail = require('../utils/mailsender');


// create admin

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
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

//admin login
const loginAdmin = async (req, res) => {
    try {

        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }

        const { email, password } = req.body;
        const checkEmail = await adminModel.findOne({ email }).select('+password');    // .select('+password') because in schema select is false & to get password to compare

        if (!checkEmail) return res.status(409).json({ message: "Email invalid" });

        const checkpassword = await bcrypt.compare(password, checkEmail.password)

        if (!checkpassword) return res.status(409).json({ message: "Password invalid" });

        res.json({ admindetails: checkEmail })
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

//getcounts of users and captain
const getCounts = async (req, res) => {

    try {
        const totalUsers = await userModel.countDocuments();
        const totalCaptains = await captainModel.countDocuments();

        return res.status(200).json({
            totalUsers,
            totalCaptains
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//get users data
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find(); // Fetch all users
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//delete users
const deleteUser = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedUser = await userModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
//get allcaptain
const getAllCaptains = async (req, res) => {

    try {

        const captains = await captainModel.find(); // Fetch all captains
        return res.status(200).json(captains);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//delete captain
const deleteCaptain = async (req, res) => {
    try {

        const { id } = req.query;
        const deletedCaptain = await captainModel.findByIdAndDelete(id);

        if (!deletedCaptain) {
            return res.status(404).json({ message: "Captain not found" });
        }

        // Send reject email to the captain
        const subject = 'Your Captain Application Has Been Rejected'
        const text = `Dear Captain,

        We regret to inform you that your application has not been approved at this time. If you have any questions or would like further clarification, please feel free to reach out to us.

        Thank you for your interest in joining us.
 
           Best Regards,
            TripMate`
        await sendApprovalEmail(deletedCaptain.email, subject, text);

        return res.status(200).json({ message: "Captain deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//approve Captain
const approveCaptain = async (req, res) => {

    try {
        console.log(req.query.id);

        const captain = await captainModel.findByIdAndUpdate(
            req.query.id,
            { approval: 'approved' },
            { new: true }
        );

        if (!captain) {
            return res.status(404).json({ message: 'Captain not found' });
        }

        // Send approval email to the captain
        const subject = 'Your Captain Application Has Been Approved'
        const text = `Dear  ${captain.fullname.firstname} ${captain.fullname.lastname} Captain, 
        \n\nYour application has been approved! You can now start accepting rides and be part of our service.
        \n\nThank you for joining us!
        \n\nBest Regards,
        \nTripMate`

        await sendApprovalEmail(captain.email, subject, text);

        res.status(200).json({ message: 'Captain approved and email sent successfully' });

    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};





module.exports = { createAdmin, loginAdmin, getCounts, getAllUsers, deleteUser, getAllCaptains, deleteCaptain, approveCaptain };
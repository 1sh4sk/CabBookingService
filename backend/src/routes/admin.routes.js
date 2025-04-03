const { Router } = require('express');
const { createAdmin, loginAdmin, getCounts, getAllUsers, deleteUser, getAllCaptains, deleteCaptain, logoutAdmin,approveCaptain, getPendingCaptains } = require('../controllers/admin.controller');
const { body } = require('express-validator');
const captainModel = require('../models/captain.model');
const { adminValidateToken } = require('../middleware/tokengen');
const router = Router();

router.post('/createadmin', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')]
    , createAdmin);


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]
    , loginAdmin)

// to get counts of users and captain
router.get("/counts",adminValidateToken, getCounts);


// to get all user data 
router.get("/users",adminValidateToken, getAllUsers);
router.delete("/usersdelete", deleteUser);

// to get all captain data
router.get("/captains",adminValidateToken, getAllCaptains);

router.get("/captaipending",adminValidateToken, async (req, res) => {
    const pendingcaptains = await captainModel.find({ approval: "pending" })
    res.status(200).json({ pendingcaptains })
})

router.put("/captains/approve",adminValidateToken, approveCaptain);

router.delete("/captainsdelete",adminValidateToken, deleteCaptain);
router.get('/logout', adminValidateToken,logoutAdmin)
 


module.exports = router;
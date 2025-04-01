const { Router } = require('express');
const { createAdmin, loginAdmin, getCounts, getAllUsers, deleteUser, getAllCaptains, deleteCaptain } = require('../controllers/admin.controller');
const { body } = require('express-validator');
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
router.get("/counts", getCounts);


// to get all user data 
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);

// to get all captain data
router.get("/captains", getAllCaptains);
router.delete("/captains/:id", deleteCaptain);
module.exports = router;
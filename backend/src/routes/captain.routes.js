const { Router } = require("express")

const router = Router()

const { body } = require("express-validator");

const { validateToken, captainValidateToken } = require("../middleware/tokengen");
const { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } = require("../controllers/captain.controller");


router.post('/register',
    [

        body('email').isEmail().withMessage('Invalid Email'),
        body('fullname.firstname').isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
        body('vehicle.vehiclename').isLength({ min: 3 }).withMessage('Vehicle Name must be at least 3 characters long'),
        body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
        body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
        body('vehicle.vehicletype').isIn(['premier', 'tripmateauto', 'tripmatebike','tripmatego']).withMessage('Invalid Vehicle'),

    ],
    registerCaptain)


router.post('/login', [

    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], loginCaptain)

router.get('/profile', captainValidateToken, getCaptainProfile)
router.get('/logout', captainValidateToken, logoutCaptain)

module.exports = router; 
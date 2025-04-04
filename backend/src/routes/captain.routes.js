const { Router } = require("express")
const multiUpload = require("../middleware/cloudinary")

const router = Router()

const { body } = require("express-validator");

const { validateToken, captainValidateToken } = require("../middleware/tokengen");
const { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain,getCaptainProfiles } = require("../controllers/captain.controller");


router.post('/register',
    multiUpload,
    [

        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('vehicle').custom((value) => {
            if (!value) throw new Error('Vehicle details are required');
            const vehicle = JSON.parse(value);
            if (!vehicle.color || vehicle.color.length < 3) {
                throw new Error('Color must be at least 3 characters long');
            }
            if (!vehicle.vehiclename || vehicle.vehiclename.length < 3) {
                throw new Error('Vehicle Name must be at least 3 characters long');
            }
            if (!vehicle.plate || vehicle.plate.length < 3) {
                throw new Error('Plate must be at least 3 characters long');
            }
            if (!vehicle.capacity || vehicle.capacity < 1) {
                throw new Error('Capacity must be at least 1');
            }
            if (!['premier', 'tripmateauto', 'tripmatebike', 'tripmatego'].includes(vehicle.vehicletype)) {
                throw new Error('Invalid Vehicle');
            }
            return true;
        }),
        body('fullname').custom((value) => {
            if (!value) throw new Error('Full name is required');
            const fullname = JSON.parse(value);
            if (!fullname.firstname || fullname.firstname.length < 3) {
                throw new Error('First Name must be at least 3 characters long');
            }
            return true;
        }),

    ],
    registerCaptain)


router.post('/login', [

    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], loginCaptain)

router.get('/profile', captainValidateToken, getCaptainProfile)
router.get('/captainprofile' , captainValidateToken, getCaptainProfiles)

router.get('/logout', captainValidateToken, logoutCaptain)

module.exports = router; 
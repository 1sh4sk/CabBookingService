const { Router } = require("express")
const router = Router();
const { body, query } = require("express-validator")
const { createRidee, getFaree, confirmRide, startRide, endRide } = require('../controllers/ride.controller');
const { userValidateToken, captainValidateToken } = require("../middleware/tokengen");

router.post('/create', userValidateToken,
    body('pickup').isString().isLength({ min: 3 }).withMessage('invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('invalid destination address'),
    body('vehicleType').isString().isIn(['premier', 'tripmateauto', 'tripmatebike', 'tripmatego']).withMessage('invalid vehicle type'),
    createRidee
)

router.get('/getfare', userValidateToken,
    query('pickup').isString().isLength({ min: 3 }).withMessage('invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('invalid destination address'),
    getFaree)

router.post('/confirmride', captainValidateToken,
    body('rideId').isMongoId().withMessage("Invalid ride id"),
    confirmRide)

router.get('/startride', captainValidateToken,
    query('rideId').isMongoId().withMessage("Invalid ride id"),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage("Invalid otp"),
    startRide)

router.post('/endride', captainValidateToken,
    body('rideId').isMongoId().withMessage("Invalid ride id"),
    endRide)



module.exports = router;
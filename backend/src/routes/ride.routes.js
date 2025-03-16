const { Router } = require("express")
const router = Router();
const {body}=require("express-validator")
const { createRidee } = require('../controllers/ride.controller');
const { userValidateToken } = require("../middleware/tokengen");

router.post('/create',userValidateToken ,
body('pickup').isString().isLength({min:3}).withMessage('invalid pickup address'),
body('destination').isString().isLength({min:3}).withMessage('invalid destination address'),
body('vehicleType').isString().isIn(['car','auto','motorcycle']).withMessage('invalid vehicle type'),
    createRidee 
 )

module.exports = router;
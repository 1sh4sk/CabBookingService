const {Router} =require("express")

const router =Router()
const {body}= require("express-validator");
const registerUser = require("../controllers/user.conntrollers");



router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullmane.firstname').isLength({min:3}).withMessage('First Name must be at least 3 characters long'),
    body('password').isLength({min :6}).withMessage('Password must be at lest 6 characters long')
],registerUser)


module.exports =router;
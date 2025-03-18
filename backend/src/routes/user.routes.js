const { Router } = require("express")

const router = Router()
const { body } = require("express-validator");
const { registerUser, loginUser, getUserProfile, logoutUser } = require("../controllers/user.controllers");
const { userValidateToken } = require("../middleware/tokengen");



router.post('/register', [

    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('phonenumber').isLength({min:10}).withMessage('Phonemuber must be at least 10 numbers')

], registerUser)


router.post('/userlogin', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], loginUser)


router.get('/profile', userValidateToken, getUserProfile)
router.get('/logout', userValidateToken, logoutUser)

module.exports = router;
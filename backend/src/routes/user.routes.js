const { Router } = require("express")

const router = Router()
const { body } = require("express-validator");
const {registerUser,loginUser, getUserProfile} = require("../controllers/user.controllers");
const { validateToken } = require("../middleware/tokengen");



router.post('/register', [

    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')

], registerUser)


router.post('/userlogin',[

    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],loginUser)


router.get('/profile',validateToken,getUserProfile)

module.exports = router;
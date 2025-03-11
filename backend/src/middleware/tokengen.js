const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");



const generatortoken = (data) => {
    return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: '24h' })
}



const validateToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.headers.authorization;  //req.cookies.token retrieves the authentication token stored in cookies, enabling session-based authentication for web apps.


        if (!token) {
            return res.status(401).json({ message: "Token needed" });
        }
        const isBlacklist = await userModel.findOne({token:token})

        if(isBlacklist){
            return res.status(401).json({message : 'Unauthorized'})
        }

        let withoutbearer = token.startsWith("Bearer ") ? token.split(" ")[1] : token;


        const payload = jwt.verify(withoutbearer, process.env.JWT_KEY)
        const checkUser = await userModel.exists({ _id: payload.data._id })
        if (!checkUser) return res.status(401).json({ message: "usernot found" })
        req.user = payload.data
        next();
    } catch (error) {
        res.status(401).json({ error: error.message })
    }
}

// module.exports =generatortoken;
module.exports = { generatortoken, validateToken };
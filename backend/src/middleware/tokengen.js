const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");



const generatortoken = (data) => {
    return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: process.env.JWT_EXPIRE })
}



const validateToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.headers.authorization;
      
        
        if (!token) {
            return res.status(401).json({ message: "Token needed" });
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
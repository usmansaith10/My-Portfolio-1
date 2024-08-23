const jwt = require("jsonwebtoken");
const user = require("../models/user_model")

const authMiddleware =  async (req, res, next) => {
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({msg:"Unauthorized HTTP, Token not provided"});
    }


    const jwtToken = token.replace("Bearer", "").trim();
    console.log("Token from auth middleware",jwtToken);


    try {

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRETKEY)
        
        const userData = await user.findOne({email:isVerified.email}).select({password:0,});

        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({msg:"Unauthorized HTTP, Token not provided"});

    }
};


module.exports = authMiddleware;
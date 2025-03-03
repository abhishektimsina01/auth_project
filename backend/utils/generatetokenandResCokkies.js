import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const generateTokenandResCokkies = async(res, user) =>{
        const token = jwt.sign({_id : user._id, isVerified : user.isVerified}, process.env.secret_key, {
            expiresIn : "1d",
        })
        res.cookie("jwt", token, {
            httpsOnly : true,
            secure : false,
            sameSite : "strict",
            maxAge : 24 * 60 * 60 * 1000,
        })
        return token;
}
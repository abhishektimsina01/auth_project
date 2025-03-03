import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const verificationOfToken = async(req,res,next)=>{
    try{
        const token = req.cookie("jwt")
        const user = await jwt.verify(token,process.env.secret_key)
        console.log(user)
    }
    catch(err){
        next(err)
    }
}


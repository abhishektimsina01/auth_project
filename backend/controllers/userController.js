import {User} from "../models/userModel.js"
import bcrypt from "bcryptjs"
import {generateVerificationCode} from "../utils/generateVerificationCode.js"
import {generatetokenandResCokkies} from "../utils/generatetokenandResCokkies.js"


function loginReq(req,res){
    //token should be signed and sent to the user
    res.end("logged in")
}

function logoutReq(req,res){
    //token should be removed from the user
    res.end("logged out")
}

async function signupReq(req,res, next){
    try{
        const {name, password, email} = req.body;
        if(!email || !name || !password){
            const error = new Error("Fill up all the credentials")
            error.status = 400
            throw error;
        }
        const userAlreadyExist = await User.findOne({name})   
        if(userAlreadyExist){
            const error = new Error("The user already exist")
            error.status = 400
            throw error;
        }

        const hashesPassword = await bcrypt.hash(password, 10)
        const verificationToken = generateVerificationCode()
        const user = await User.create({
            name : name,
            passwrod : hashesPassword,
            email : email,
            verificationToken : verificationToken,
            verificationTimeExpiresAt : new Date.now() + 24*60*60*1000
        })

        req.user = user

        console.log(generatetokenandResCokkies(res, user))

        res.status(201).json({
            message : "Signed up",
        })
    }
    catch(err){
        next(err)
    }
}

export {signupReq, loginReq, logoutReq}
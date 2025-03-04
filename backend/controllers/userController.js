import {User} from "../models/userModel.js"
import bcrypt from "bcryptjs"
import {generateVerificationCode} from "../utils/generateVerificationCode.js"
import {generateTokenandResCokkies} from "../utils/generatetokenandResCokkies.js"
import { sendVerificationEmail } from "../mailtrap/emails.js"

async function loginReq(req,res,next){
    //token should be signed and sent to the user
    try{
        const {name, password} = req.body
        const user = await User.findOne({name})
        if(user == null){
            const error = new Error("User doesn't exit")
            error.status = 400
            throw error
        }
        console.log(user)
        const isSame = await bcrypt.compare(password, user.password)
        if(!isSame){
            const error = new Error("Username or password is wrong")
            error.status = 401
            throw error
        }
        console.log(generateTokenandResCokkies(res,user))
        res.end("logged in")
    }
    catch(err){
        next(err)
    }
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
            throw error;
        }
        const userAlreadyExist = await User.findOne({name})   
        if(userAlreadyExist){
            const error = new Error("The user already exist")
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const verificationToken = generateVerificationCode()

        const user = await User.create({
            name : name,
            password : hashedPassword,
            email : email,
            verificationToken : verificationToken,
            verificationTimeExpiresAt : new Date().now + 24*60*60*1000
        })
        req.user = user

        generateTokenandResCokkies(res, user)
        sendVerificationEmail(user.email, verificationToken)

        res.status(201).json({
            message : "Signed up",
        })
    }
    catch(err){
        next(err)
    }
}

export {signupReq, loginReq, logoutReq}
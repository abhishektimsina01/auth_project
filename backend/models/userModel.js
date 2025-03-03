import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    lastloginDate :{
        type : Date,
        default : Date.now
    },
    isVerified :{
        type : Boolean,
        default : false
    },
    resetPasswordToken : String,
    resetPasswordTokenExpiredAt : Date,
    verificationToken : String,
    verificationTokenExpiredAt : Date
},{
    versionKey : false,
    timestamps : true
})

const User = mongoose.model("User", userSchema)
export {User}
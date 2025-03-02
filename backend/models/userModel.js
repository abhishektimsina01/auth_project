import express from "express";
import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique : true
    },
    passwrod : {
        type : String,
        required : true,
    },
    gmail : {
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
    resetPasswordTime : Date,
    verificationToken : String,
    verificationTime : Date
},{
    versionKey : false,
    timestamps : true
})


const User = mongoose.model("User", userSchema)
export {User}
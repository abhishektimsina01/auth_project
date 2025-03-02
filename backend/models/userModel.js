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
        unique : true
    },
    gmail : {
        type : String,
        required : true,
        unique : true
    }
},{
    versionKey : false,
    timestamps : true
})


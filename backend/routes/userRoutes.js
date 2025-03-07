import express from "express"
import {signupReq, loginReq, logoutReq, verifyEmail} from "../controllers/userController.js"
import { verify } from "crypto";
const user = express.Router()

user.post("/login", loginReq);
user.post("/signup", signupReq);
user.post("/logout", logoutReq);
user.post("/verify_email", verifyEmail)

export {user}
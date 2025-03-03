import express from "express"
import {signupReq, loginReq, logoutReq} from "../controllers/userController.js"
const user = express.Router()

user.post("/login", loginReq);
user.post("/signup", signupReq);
user.post("/logout", logoutReq);

export {user}
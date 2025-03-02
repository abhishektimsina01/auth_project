import express from "express"
import {getReq, signupReq, loginReq, logoutReq} from "../controllers/userController.js"
const user = express.Router()

user.get("/", getReq);

user.post("/login", loginReq);
user.post("/signup", signupReq);
user.post("/logout", logoutReq);

export {user}
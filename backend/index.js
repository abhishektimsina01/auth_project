import express from "express"
import {} from "./routes/userRoutes.js"
import {connectDB} from "./config.js"
import { user } from "./routes/userRoutes.js"
import { notFound , errorHandler } from "./middleware/userMiddleware.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

connectDB(process.env.MONGO_URI)

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use("/api/auth", user)

app.use(notFound)
app.use(errorHandler)


app.listen(process.env.PORT, (er)=>{
    if(er){
        console.log("an error has occurred")
    }
    else{
        console.log("Server has been connected succesfully")
    }
})
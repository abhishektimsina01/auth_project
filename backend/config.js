import mongoose from "mongoose";
async function connectDB(url){
    try{
        await mongoose.connect(`${url}`)
        console.log("mongoDB connected")    
    }
    catch(err){
        console.log("some problem has created in database")
        console.log(err)
    }
}

export {connectDB}
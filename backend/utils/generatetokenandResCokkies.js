import dotenv from "dotenv"
dotenv.config()

export const generatetokenandResCokkies = async(res, user) =>{
    const token = await jwt.sign({_id : user._id, isVerified : user.isVerified}, process.env.secret_key, {
        expiresIn : "1d",
    })
    res.cookies("jwt", token, {
        httpsOnly : true,
        secure : false,
        sameSite : "strict",
        maxAge : 24 * 60 * 60 * 1000,
    })
    return token;
}
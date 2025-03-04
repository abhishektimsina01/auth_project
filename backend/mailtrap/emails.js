import { mailtrapClient, sender } from "../mailtrap/mail.config.js"
import {VERIFICATION_EMAIL_TEMPLATE} from "./email.template.js"

export const sendVerificationEmail = async(email, verificationToken, next) =>{
    const reviever = [
        {
            email : "timsinaabhishek1@gmail.com",
        },
    ]
    try{
        const response = await mailtrapClient.send({
            from : sender,
            to : reviever,
            subject : "Verify your email",
            html : VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category : "Email Verification"
        })
        console.log(response)
    }
    catch(err){
        next(err)
    }
}
import { mailtrapClient, sender } from "../mailtrap/mail.config.js"
export const sendVerificationEmail = (user) =>{
    const reviever = [
        {
            email : "timsinaabhishek1@gmail.com",
        },
    ]
    mailtrapClient.send({
        from : sender,
        to : reviever,
        subject : "New user signed up",
        text : "new user has signed up",
        category : "Welcome"
    })
}
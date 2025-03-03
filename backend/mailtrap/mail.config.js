import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv"
dotenv.config()

const TOKEN = process.env.mail_token;
const ENDPOINT = process.env.endpoint;

const client = new MailtrapClient({endpoint : ENDPOINT, token: TOKEN,});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "timsinaabhishek1@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
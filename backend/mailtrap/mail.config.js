import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv"
dotenv.config()

const TOKEN = process.env.mail_token;
const ENDPOINT = process.env.endpoint;

export const mailtrapClient = new MailtrapClient({endpoint : ENDPOINT, token: TOKEN,});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "The CEO, Abhishek",
};

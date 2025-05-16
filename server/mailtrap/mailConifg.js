import { configDotenv } from "dotenv";
import { MailtrapClient } from "mailtrap";

configDotenv();

const TOKEN = process.env.MAILTRAP_API_TOKEN;

export const mailClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};

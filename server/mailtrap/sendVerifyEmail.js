import { mailClient, sender } from "./mailConifg.js";
import {
  RESET_PASSWORD_MAIL,
  VERIFY_TEMPLATE,
  WELCOME_MAIL,
} from "./verifyTemplate.js";

export const sendVerifyEmail = async (email, verificationCode) => {
  const recipient = [{ email }];

  try {
    const res = await mailClient.send({
      from: sender,
      to: recipient,
      subject: "verify your email",
      html: VERIFY_TEMPLATE.replace("{{CODE}}", verificationCode),
      category: "Email verification",
    });

    console.log("verification mail send", res);
  } catch (error) {
    console.error("Failed to send verification email", error);
  }
};

export const sentWelcomeMail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const res = await mailClient.send({
      from: sender,
      to: recipient,
      subject: "welcome my frend!",
      html: WELCOME_MAIL.replace(/{{NAME}}/g, name),
      category: "welcome mail",
    });
  } catch (error) {
    console.error("Failed to send verification email", error);
  }
};

export const sentResetPassword = async (email, actualResetLink) => {
  const recipient = [{ email }];
  try {
    const res = await mailClient.send({
      from: sender,
      to: recipient,
      subject: "your reset password link",
      html: RESET_PASSWORD_MAIL.replace("{{RESET_LINK}}", actualResetLink),
      category: "resent password",
    });
  } catch (error) {
    console.error("Failed to send resent password link", error);
  }
};

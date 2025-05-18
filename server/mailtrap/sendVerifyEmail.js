import { mailClient, sender } from "./mailConifg.js";
import { VERIFY_TEMPLATE, WELCOME_MAIL } from "./verifyTemplate.js";

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

    console.log("welcome mail send", res);
  } catch (error) {
    console.error("Failed to send verification email", error);
  }
};

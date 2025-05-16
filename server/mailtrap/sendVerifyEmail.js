import { mailClient, sender } from "./mailConifg.js";
import { VERIFY_TEMPLATE } from "./verifyTemplate.js";

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

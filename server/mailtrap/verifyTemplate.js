export const VERIFY_TEMPLATE = `<!DOCTYPE html>
<html lang="en" style="margin:0; padding:0;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f7;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        color: #333;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .header h1 {
        color: #4f46e5;
        margin: 0;
        font-size: 24px;
      }
      .content {
        font-size: 16px;
        line-height: 1.6;
      }
      .code-box {
        margin: 30px 0;
        background-color: #f0f4ff;
        border-left: 5px solid #4f46e5;
        padding: 20px;
        text-align: center;
        font-size: 24px;
        letter-spacing: 4px;
        font-weight: bold;
        color: #4f46e5;
        border-radius: 8px;
      }
      .footer {
        margin-top: 40px;
        font-size: 12px;
        color: #888;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Verify Your Email</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>
          Thank you for signing up! Please use the verification code below to verify your email address:
        </p>
        <div class="code-box">
          {{CODE}}
        </div>
        <p>
          If you did not request this, please ignore this email.
        </p>
        <p>Best regards,<br />The Team</p>
      </div>
      <div class="footer">
        &copy; 2025 Your Company. All rights reserved.
      </div>
    </div>
  </body>
</html>`;

export const WELCOME_MAIL = `<!DOCTYPE html>
<html lang="en" style="margin:0; padding:0;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome</title>
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f7;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        color: #333;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .header h1 {
        color: #10b981;
        margin: 0;
        font-size: 26px;
      }
      .content {
        font-size: 16px;
        line-height: 1.6;
        text-align: left;
      }
      .footer {
        margin-top: 40px;
        font-size: 12px;
        color: #999;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome, {{NAME}}! 👋</h1>
      </div>
      <div class="content">
        <p>We're thrilled to have you on board.</p>
        <p>
          Whether you're here to explore, create, or connect — we’re excited to be part of your journey.
        </p>
        <p>
          If you have any questions or need help getting started, feel free to reach out.
        </p>
        <p>Cheers,<br /><strong>The Team</strong></p>
      </div>
      <div class="footer">
        &copy; 2025 Your Company. All rights reserved.
      </div>
    </div>
  </body>
</html>`;

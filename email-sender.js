const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ".",
    pass: ".",
  },
});

const mailOptions = {
  from: ".",
  to: ".",
  subject: "Hello from Node.js",
  text: "This is a test email sent from Node.js using Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});

import express from "express";
import nodemailer from "nodemailer";
import db from "../db/db.js";

const router = express.Router();

const emailSending = (subject, body) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_MAILING_SENDER_EMAIL,
      pass: process.env.APP_MAILING_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_MAILING_SENDER_EMAIL,
    to: process.env.APP_MAILING_RECEIVER_EMAIL,
    subject: subject,
    text: body,
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const inputValidate = (firstname, lastname, email, phone, message) => {
  if (!firstname || firstname == "")
    return { valid: false, msg: "Invalid firstname" };
  if (!lastname || lastname == "")
    return { valid: false, msg: "Invalid lastname" };
  if (!email || email == "")
    return { valid: false, msg: "Invalid email" };
  if (!phone || phone == "")
    return { valid: false, msg: "Invalid phone number" };
  if (!message || message == "")
    return { valid: false, msg: "Invalid message" };

  return { valid: true };
};

router.route("/contact").post(async (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;

  const { valid, msg } = inputValidate(firstname, lastname, email, phone, message);

  if (!valid)
    return res.status(400).json({ message: msg });

  var emailBody =
    "Sender name: " +
    firstname +
    lastname +
    "\nSender email: " +
    email +
    "\nSender phone: " +
    phone +
    "\nMessage: " +
    message;

  var sql =
    "INSERT INTO contact (firstname, lastname, email, phone, message) VALUES (?, ?, ?, ?, ?)";

  try {
    await db.query(sql, [
      firstname,
      lastname,
      email,
      phone,
      message,
    ]);
    emailSending("Contact Form Submission", emailBody);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

export default router;

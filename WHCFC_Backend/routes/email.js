import express from "express";
import nodemailer from "nodemailer";
import { validate } from "deep-email-validator";
import xss from "xss";
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

const inputValidate = inputs => {
  for (const key in inputs) {
    inputs[key] = xss(inputs[key]);

    if (!inputs[key] || inputs[key] == "")
      return { valid: false, msg: `Invalid ${key}` };
  }

  return { valid: true };
};

router.route("/contact").post(async (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;

  const { valid, msg } = inputValidate({ firstname, lastname, email, phone, message });

  if (!valid)
    return res.status(400).json({ message: msg });

  const validationResult = await validate({
    email: email,
    validateRegex: true,
    validateMx: true,
    validateTypo: true,
    validateDisposable: true,
    validateSMTP: false
  });

  if (!validationResult.valid)
    return res.status(400).json({
      message: "Email is not valid",
      reason: validationResult.reason
    });

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
  } catch (error) {
    console.log(error);
    return res.status(500).json({ "message": "Internal Server Error" });
  }

  res.status(200).json({ "message": "Success" });
});

export default router;

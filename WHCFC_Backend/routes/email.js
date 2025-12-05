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

const inputSanitizer = inputs => {
  for (const key in inputs) {
    const input = inputs[key];

    if (xss(input) !== input)
      return { valid: false, msg: `Malicious code in ${key}` };
  }

  return { valid: true };
};

const inputValidator = (inputs, optionals = new Set()) => {
  for (const key in inputs) {
    if (!inputs[key] && !optionals.has(key))
      return { valid: false, msg: `Invalid ${key}` };
  }

  return { valid: true };
};

const phoneFormatValidator = phone => {
  const format = /^(\+?1[-.\s]?)?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$/;

  return format.test(phone);
};

router.route("/contact").post(async (req, res) => {
  const { firstname = "", lastname = "", email = "", phone = "", message = "" } = req.body;
  const inputs = { firstname, lastname, email, phone, message }
  const optionals = new Set(["phone"])

  const sanitizerResult = inputSanitizer(inputs);

  if (!sanitizerResult.valid)
    return res.status(400).json({ message: sanitizerResult.msg });

  const validatorResult = inputValidator(inputs, optionals);

  if (!validatorResult.valid)
    return res.status(400).json({ message: validatorResult.msg });

  const emailValidationResult = await validate({
    email: email,
    validateRegex: true,
    validateMx: true,
    validateTypo: true,
    validateDisposable: true,
    validateSMTP: false
  });

  if (!emailValidationResult.valid)
    return res.status(400).json({
      message: "Email is not valid"
    });

  if (!phoneFormatValidator(phone) && !(phone === ""))
    return res.status(400).json({
      message: "Invalid phone number format"
    });

  const emailBody =
    "Sender name: " +
    firstname +
    lastname +
    "\nSender email: " +
    email +
    "\nSender phone: " +
    phone +
    "\nMessage: " +
    message;

  const sql =
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
    return res.status(500).json({ message: "Internal Server Error" });
  }

  res.status(200).json({ message: "Success" });
});

export default router;

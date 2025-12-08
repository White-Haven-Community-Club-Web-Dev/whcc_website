import express from "express";
import { Resend } from "resend";
import { validate } from "deep-email-validator";
import xss from "xss";
import { validateCaptcha } from "../captcha/captcha.js";
import DBManager from "../db/db-manager.js";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

const emailSending = async (subject, body) => {
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECIPIENTS,
    subject: subject,
    text: body,
  });

  if (error)
    throw new Error(error);
};

const inputSanitizer = inputs => {
  for (const key in inputs) {
    const input = inputs[key];

    // Skip non-string values
    if (typeof input !== 'string') continue;

    // Sanitize the input and check if it was modified
    const cleaned = xss(input);
    if (cleaned !== input) {
      return { valid: false, msg: `Malicious code in ${key}` };
    }
    // Use the cleaned version
    inputs[key] = cleaned;
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
  const { firstname = "", lastname = "", email = "", phone = "", message = "", response = null } = req.body;
  const inputs = { firstname, lastname, email, phone, message };
  const optionals = new Set(["phone"]);

  const sanitizerResult = inputSanitizer(inputs);

  if (!sanitizerResult.valid)
    return res.status(400).json({ message: sanitizerResult.msg });

  const captchaResult = await validateCaptcha(response);

  if (!captchaResult.valid)
    return res.status(400).json({ message: captchaResult.msg })

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

  if (phone && !phoneFormatValidator(phone))
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
    const pool = await DBManager.getPool();

    await pool.execute(sql, [
      firstname,
      lastname,
      email,
      phone,
      message,
    ]);

    await emailSending("Contact Form Submission", emailBody);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;

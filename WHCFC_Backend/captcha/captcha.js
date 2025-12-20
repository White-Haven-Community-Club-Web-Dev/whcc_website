import logger from "../logger/logger.js";

async function validateCaptcha(response) {
  if (!response)
    return { valid: false, msg: "reCaptcha was not completed" };

  try {
    if (process.env.CAPTCHA_SECRET === undefined)
      throw new Error("Captcha secret key not set");

    const params = new URLSearchParams();
    params.append("secret", process.env.CAPTCHA_SECRET);
    params.append("response", response);

    const apiRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      body: params
    });

    if (!apiRes.ok)
      throw new Error(`Response status: ${apiRes.status}`);

    const data = await apiRes.json();

    const success = data.success;

    return {
      valid: success,
      msg: success ? "Valid reCaptcha" : "Invalid reCaptcha"
    };
  }
  catch (error) {
    logger.error(error);
    return { valid: false, msg: "Internal Server Error" };
  }
};

export { validateCaptcha };

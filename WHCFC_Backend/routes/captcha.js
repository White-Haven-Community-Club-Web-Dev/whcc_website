import express from "express";

const router = express.Router();

router.post("/validate", async (req, res) => {
  const { response } = req.body;

  try {
    if (response) {
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

      return res.status(200).json({ success: data.success })
    }
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

  res.status(200).json({ success: false });
});

export default router;

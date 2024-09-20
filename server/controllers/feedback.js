const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

// Create a rate limiter instance
const feedbackRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message:
    "Too many feedback submissions from this IP, please try again later.",
});

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.feedback = async (req, res) => {
  try {
    const { feedback } = req.body;

    if (!feedback) {
      return res.status(400).json({ message: "Feedback is required" });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Feedback Received",
      text: `Feedback received:\n\n${feedback}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send feedback" });
      }
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Feedback sent successfully" });
    });
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Export the rate limiter
exports.applyRateLimit = feedbackRateLimit;

const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

// Setup rate limiting
const feedbackRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many form submissions from this IP, please try again later.",
});

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.getInTouch = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, message } = req.body;

    if (!fullName || !email || !phoneNumber || !message) {
      return res.status(400).json({ msg: "Missing input in the form" });
    }

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Service Appointment",
      text:
        `You have received a new service appointment request.\n\n` +
        `Full Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone Number: ${phoneNumber}\n\n` +
        `Message Content:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ msg: "Failed to send", error });
      }
      console.log("Email Sent: ", info.response);
      res
        .status(200)
        .json({ msg: "Service appointment request sent successfully" });
    });
  } catch (error) {
    console.error("Internal Server Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.applyRateLimit = feedbackRateLimit;

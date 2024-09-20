const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");
const path = require("path");

// Setup rate limiting
const feedbackRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
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

exports.quotation = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, services, details } = req.body;

    if (!fullName || !email || !phoneNumber || !details || !services) {
      return res.status(400).json({ msg: "Missing input in the form" });
    }

    // Email to service provider
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Service Appointment",
      text:
        `You have received a new service appointment request.\n\n` +
        `Full Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone Number: ${phoneNumber}\n\n` +
        `Service: ${services}\n\n` +
        `Message Content:\n${details}`,
    };

    // Email with logo and HTML content for auto-reply to the client
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Free Estimate Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <img src="cid:logo" alt="Company Logo" style="width: 150px; height: auto;" /><br/><br/>
          <p>Dear ${fullName},</p>
          <p>Thank you for reaching out to us! We have received your Free Estimate request.</p>
          <p>Our team will review your request and get back to you shortly.</p>
          <p><strong>Summary of your request:</strong></p>
          <p>Service: ${services} <br/>Message: ${details}</p>
          <br/>
          <p>Best regards,<br/>Raymund Blone Appliances Repair</p>
        </div>
      `,
      attachments: [
        {
          filename: "Raymond 1.png",
          path: path.join(__dirname, "./Raymond 1.png"), // Update with the correct path to your logo
          cid: "logo", // This is important to match the "cid" in the HTML <img> tag
        },
      ],
    };

    // Send email to service provider
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ msg: "Failed to send", error });
      }
      console.log("Email Sent to service provider: ", info.response);

      // Send auto-reply to client
      transporter.sendMail(autoReplyOptions, (error, info) => {
        if (error) {
          console.error("Failed to send auto-reply: ", error);
        } else {
          console.log("Auto-reply sent to client: ", info.response);
        }
      });

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

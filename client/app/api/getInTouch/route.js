import nodemailer from "nodemailer";
import path from "path";

export async function POST(req) {
  try {
    const { fullName, email, phoneNumber, message } = await req.json();

    if (!fullName || !email || !phoneNumber || !message) {
      return new Response(
        JSON.stringify({ msg: "Missing input in the form" }),
        { status: 400 }
      );
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger's SMTP server
      port: 587, // Secure port (use 587 for STARTTLS)
      secure: true, // True for SSL/TLS, false for STARTTLS
      auth: {
        user: process.env.EMAIL_USER, // Your Hostinger email address (e.g., user@yourdomain.com)
        pass: process.env.EMAIL_PASS, // Your Hostinger email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Service Appointment",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007BFF;">New Service Appointment Request</h2>
          <p style="font-size: 16px;">You have received a new service appointment request.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <th style="text-align: left; border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Field</th>
              <th style="text-align: left; border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Details</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ccc; padding: 8px;">Full Name</td>
              <td style="border: 1px solid #ccc; padding: 8px;">${fullName}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ccc; padding: 8px;">Email</td>
              <td style="border: 1px solid #ccc; padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ccc; padding: 8px;">Phone Number</td>
              <td style="border: 1px solid #ccc; padding: 8px;">${phoneNumber}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ccc; padding: 8px;">Message Content</td>
              <td style="border: 1px solid #ccc; padding: 8px;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 14px; color: #555;">
            Please review the request and get back to the client as soon as possible.
          </p>
        </div>
      `,
    };

    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Service Appointment Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif;">
         <img src="cid:logo" alt="Company Logo" style="width: 150px; height: auto;" /><br/><br/>
          <p>Dear ${fullName},</p>
          <p>Thank you for reaching out to us! We have received your service appointment request.</p>
          <p><strong>Summary of your request:</strong></p>
          <p>Full Name: ${fullName}<br/>
          Email: ${email}<br/>
          Phone Number: ${phoneNumber}<br/>
          Message: <br/> ${message}</p>
          <p>We will review your request and get back to you shortly.</p>
          <p>Best regards,<br/>Raymund Blone Appliances Repair</p>
        </div>
      `,
      attachments: [
        {
          filename: "Raymond 1.png",
          path: path.join(process.cwd(), "public", "Raymond 1.png"), // Update the path to your logo stored in /public
          cid: "logo",
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email Sent");
    await transporter.sendMail(autoReplyOptions);
    console.log("auto reply email Sent");

    return new Response(
      JSON.stringify({ msg: "Service appointment request sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal Server Error: ", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, text } = await req.json();

    if (!to || !subject || !text) {
      return new Response(JSON.stringify({ msg: "Missing input" }), {
        status: 400,
      });
    }

    // Setup Nodemailer transporter
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger's SMTP server
      port: 587, // Secure port (use 587 for STARTTLS)
      secure: false, // True for SSL/TLS, false for STARTTLS
      auth: {
        user: process.env.EMAIL_USER, // Your Hostinger email address (e.g., user@yourdomain.com)
        pass: process.env.EMAIL_PASS, // Your Hostinger email password
      },
    });

    // Create HTML content for the email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #004AAD;">New Plan Request</h2>
        <p><strong>From:</strong> ${to}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p style="margin-top: 20px;">${text}</p>
        <hr style="margin: 20px 0; border: 1px solid #004AAD;" />
        <p style="color: #555;">This email was sent from ${to} application.</p>
      </div>
    `;

    const mailOptions = {
      from: `${to} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject, // Subject line
      html: htmlContent, // HTML body
    };

    // Send email to the service provider
    await transporter.sendMail(mailOptions);
    console.log("Email Sent to service provider");

    return new Response(
      JSON.stringify({ msg: "Plan Request sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal Server Error: ", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

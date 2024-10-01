import nodemailer from "nodemailer";
import path from "path";
export async function POST(req) {
  try {
    const { to, subject, text } = await req.json();

    if (!to || !subject || !text) {
      return new Response(JSON.stringify({ msg: "Missing input" }), {
        status: 400,
      });
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create HTML content for the email to the service provider
    const providerHtmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
       <img src="cid:logo" alt="Company Logo" style="width: 150px; height: auto;" /><br/><br/>
        <h2 style="color: #004AAD;">New Plan Request</h2>
        <p><strong>From:</strong> ${to}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p style="margin-top: 20px;">${text} <br/> "Thank you for your interest! We appreciate your inquiry and will respond shortly."</p>
        <hr style="margin: 20px 0; border: 1px solid #004AAD;" />
        <p style="color: #555;">This email was sent from your application.</p>
      </div>
    `;

    const mailOptions = {
      from: to, // sender address
      to: process.env.EMAIL_USER, // list of receivers
      subject: "New Plan Request",
      html: providerHtmlContent,
      attachments: [
        {
          filename: "Raymond 1.png",
          path: path.join(process.cwd(), "public", "Raymond 1.png"), // Update the path to your logo stored in /public
          cid: "logo",
        },
      ], // HTML body for the service provider
    };

    // Send email to the service provider
    await transporter.sendMail(mailOptions);
    console.log("Email Sent to service provider");

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

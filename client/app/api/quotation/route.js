import nodemailer from "nodemailer";
import path from "path";

export async function POST(req) {
  try {
    const { fullName, email, phoneNumber, services, details } =
      await req.json();

    if (!fullName || !email || !phoneNumber || !details || !services) {
      return new Response(
        JSON.stringify({ msg: "Missing input in the form" }),
        { status: 400 }
      );
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to service provider
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Free Quotation Request",
      html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #007BFF;">New Free Quotation Request</h2>
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
                <td style="border: 1px solid #ccc; padding: 8px;">Service</td>
                <td style="border: 1px solid #ccc; padding: 8px;">${services}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ccc; padding: 8px;">Message Content</td>
                <td style="border: 1px solid #ccc; padding: 8px;">${details}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; font-size: 14px; color: #555;">
              Please review the request and get back to the client as soon as possible.
            </p>
          </div>
        `,
    };

    // Auto-reply email to client
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
          <p>Service: ${services} <br/>Message: <br/> ${details}</p>
          <br/>
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

    // Send email to the service provider
    await transporter.sendMail(mailOptions);

    // Send auto-reply to the client
    await transporter.sendMail(autoReplyOptions);

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

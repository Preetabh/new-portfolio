import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// =========================
// Transporter Setup
// =========================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP Verification Failed:", error);
  } else {
    console.log("✅ Gmail SMTP Connected Successfully");
  }
});

// =========================
// Send Contact Email
// =========================

const SendEmail = async ({
  fullName,
  email,
  contact,
  message,
}) => {
  console.log("📩 Raw Email Payload:", {
    fullName,
    email,
    contact,
    message,
  });
  try {
    console.log("Preparing to send email with data:", {
      fullName,
      email,
      contact,
      message,
    }); // Debugging line
    console.log("📧 Using sender:", process.env.NODEMAILER_EMAIL);
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(to right, #2563eb, #7c3aed, #db2777); padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0;">📩 portfolio Alert Message</h1>
          </div>

          <div style="padding: 30px; color: #111827;">
            <h2 style="margin-bottom: 20px;">User Details</h2>

            <p><strong>👤 Name:</strong> ${fullName}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📱 Phone:</strong> ${contact}</p>

            <div style="margin-top: 25px; padding: 20px; background: #f9fafb; border-radius: 10px; border-left: 5px solid #2563eb;">
              <h3 style="margin-top: 0;">💬 Message</h3>
              <p style="line-height: 1.8; color: #374151;">
                ${message}
              </p>
            </div>
          </div>

          <div style="padding: 18px; text-align: center; background: #111827; color: white; font-size: 14px;">
            Portfolio Contact System 🚀
          </div>
        </div>
      </div>
    `;

    // =========================
    // Admin Alert Email
    // =========================

    const adminMail = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.NODEMAILER_EMAIL}>`,
      to: "vishubbkup@gmail.com",
      subject: `📩 New Message From ${fullName}`,
      replyTo: email,
      html: htmlTemplate,
    });

    // =========================
    // Thank You Email To User
    // =========================

    const thankYouTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(to right, #2563eb, #7c3aed, #db2777); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0;">🙏 Thank You ${fullName}</h1>
            <p style="margin-top: 10px; opacity: 0.9;">
              Your message has been received successfully.
            </p>
          </div>

          <div style="padding: 30px; color: #111827;">
            <h2>Hello ${fullName} 👋</h2>

            <p style="line-height: 1.8; color: #374151;">
              Thank you for contacting me through my portfolio website.
              I have received your message and will get back to you as soon as possible.
            </p>

            <div style="margin-top: 25px; padding: 20px; background: #f9fafb; border-radius: 12px; border-left: 5px solid #7c3aed;">
              <h3 style="margin-top: 0;">📨 Your Message</h3>

              <p style="line-height: 1.8; color: #4b5563;">
                ${message}
              </p>
            </div>

            <div style="margin-top: 30px;">
              <p style="margin-bottom: 8px;"><strong>📧 Email:</strong> ${email}</p>
              <p><strong>📱 Phone:</strong> ${contact}</p>
            </div>
          </div>

          <div style="padding: 18px; text-align: center; background: #111827; color: white; font-size: 14px;">
            🚀 Thanks for reaching out • Preetabh Awasthi Portfolio
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Preetabh Portfolio" <${process.env.NODEMAILER_EMAIL}>`,
      to: email,
      subject: "✅ Thank You For Contacting Me",
      html: thankYouTemplate,
    });

    return adminMail;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new Error("Email sending failed");
  }
};

export { SendEmail };

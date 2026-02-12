import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import { buildThankYouEmail, buildTeamNotificationEmail } from "./email-template.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, organization, companySize, industry, message } = req.body;

  if (!name || !email || !organization || !companySize || !industry) {
    return res.status(400).json({ error: "All required fields must be filled." });
  }

  try {
    // Send thank-you email to the user
    await resend.emails.send({
      from: "Conqrai Knowledge <onboarding@resend.dev>",
      to: [email],
      subject: `Thank you for reaching out, ${name} — Conqrai Knowledge`,
      html: buildThankYouEmail({ name, organization, industry, companySize }),
    });

    // Send notification email to the Conqrai team
    await resend.emails.send({
      from: "Conqrai Contact Form <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: `New Inquiry: ${organization} — ${name}`,
      html: buildTeamNotificationEmail({ name, email, organization, companySize, industry, message }),
    });

    return res.json({ success: true, message: "Emails sent successfully." });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

// Serve static files in production
const distPath = path.resolve(__dirname, "../dist");
app.use(express.static(distPath));
app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

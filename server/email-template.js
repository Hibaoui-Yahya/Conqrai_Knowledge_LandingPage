/**
 * Generates the thank-you email HTML for Conqrai Knowledge contact form submissions.
 */
export function buildThankYouEmail({ name, organization, industry, companySize }) {
  const industryLabels = {
    manufacturing: "Manufacturing & Heavy Industry",
    energy: "Energy & Utilities",
    aerospace: "Aerospace & Defense",
    pharmaceutical: "Pharmaceuticals",
    logistics: "Logistics & Supply Chain",
  };

  const industryLabel = industryLabels[industry] || industry || "Your Industry";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You - Conqrai Knowledge</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Inter',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#3AB6FF 0%,#2A9EDF 100%);border-radius:24px 24px 0 0;padding:40px 48px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                Conqrai Knowledge
              </h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.8);letter-spacing:1px;text-transform:uppercase;">
                Actionable Knowledge Platform
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:48px 48px 32px;">
              <h2 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0f172a;letter-spacing:-0.3px;">
                Thank you, ${name}!
              </h2>
              <p style="margin:0 0 28px;font-size:16px;line-height:1.7;color:#475569;">
                We've received your inquiry and our enterprise solutions team is already reviewing it. A dedicated specialist will reach out to you shortly to discuss how Conqrai can transform your operational knowledge.
              </p>

              <!-- Inquiry Summary -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px 8px;">
                    <p style="margin:0;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">
                      Your Inquiry Summary
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 28px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                          <span style="font-size:13px;color:#94a3b8;font-weight:600;">Organization</span>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;text-align:right;">
                          <span style="font-size:14px;color:#0f172a;font-weight:600;">${organization}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                          <span style="font-size:13px;color:#94a3b8;font-weight:600;">Industry</span>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;text-align:right;">
                          <span style="font-size:14px;color:#0f172a;font-weight:600;">${industryLabel}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="font-size:13px;color:#94a3b8;font-weight:600;">Company Size</span>
                        </td>
                        <td style="padding:8px 0;text-align:right;">
                          <span style="font-size:14px;color:#0f172a;font-weight:600;">${companySize} employees</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What Happens Next -->
              <h3 style="margin:0 0 16px;font-size:17px;font-weight:700;color:#0f172a;">
                What happens next?
              </h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:10px 0;vertical-align:top;width:36px;">
                    <div style="width:28px;height:28px;background-color:#E6F7FF;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#3AB6FF;">1</div>
                  </td>
                  <td style="padding:10px 0 10px 12px;vertical-align:top;">
                    <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;">
                      <strong style="color:#0f172a;">Review</strong> &mdash; Our team analyzes your specific operational requirements
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;vertical-align:top;width:36px;">
                    <div style="width:28px;height:28px;background-color:#E6F7FF;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#3AB6FF;">2</div>
                  </td>
                  <td style="padding:10px 0 10px 12px;vertical-align:top;">
                    <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;">
                      <strong style="color:#0f172a;">Connect</strong> &mdash; A solutions architect reaches out to schedule a consultation
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;vertical-align:top;width:36px;">
                    <div style="width:28px;height:28px;background-color:#E6F7FF;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#3AB6FF;">3</div>
                  </td>
                  <td style="padding:10px 0 10px 12px;vertical-align:top;">
                    <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;">
                      <strong style="color:#0f172a;">Deploy</strong> &mdash; We tailor a deployment plan for your organization
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0 16px;">
                    <p style="margin:0 0 8px;font-size:14px;color:#64748b;">
                      Have an urgent question in the meantime?
                    </p>
                    <a href="mailto:contact@conqrai.com" style="display:inline-block;background-color:#0f172a;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:12px;">
                      Contact Our Team
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;border-radius:0 0 24px 24px;padding:28px 48px;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#64748b;">
                Conqrai Knowledge Systems
              </p>
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                Turning institutional knowledge into operational power.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generates a notification email for the Conqrai team about a new inquiry.
 */
export function buildTeamNotificationEmail({ name, email, organization, companySize, industry, message }) {
  const industryLabels = {
    manufacturing: "Manufacturing & Heavy Industry",
    energy: "Energy & Utilities",
    aerospace: "Aerospace & Defense",
    pharmaceutical: "Pharmaceuticals",
    logistics: "Logistics & Supply Chain",
  };

  const industryLabel = industryLabels[industry] || industry || "Not specified";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Inter',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background-color:#0f172a;border-radius:24px 24px 0 0;padding:32px 48px;text-align:center;">
              <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">New Contact Form Inquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;border-radius:0 0 24px 24px;padding:36px 48px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:12px;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Name</span><br/>
                    <span style="font-size:15px;color:#0f172a;font-weight:600;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:12px;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Email</span><br/>
                    <a href="mailto:${email}" style="font-size:15px;color:#3AB6FF;font-weight:600;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:12px;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Organization</span><br/>
                    <span style="font-size:15px;color:#0f172a;font-weight:600;">${organization}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:12px;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Company Size</span><br/>
                    <span style="font-size:15px;color:#0f172a;font-weight:600;">${companySize}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:12px;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Industry</span><br/>
                    <span style="font-size:15px;color:#0f172a;font-weight:600;">${industryLabel}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0 0;">
                    <span style="font-size:12px;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Message</span><br/>
                    <p style="font-size:14px;color:#334155;line-height:1.6;margin:8px 0 0;">${message || "No message provided."}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

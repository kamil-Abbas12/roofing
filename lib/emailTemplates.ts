export function ownerEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  service?: string;
  budget?: string;
  message?: string;
}) {
  return {
    subject: `New Inquiry from ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#213150">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px;font-weight:bold">Name</td><td>${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td>${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Phone</td><td>${data.phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Business Type</td><td>${data.businessType}</td></tr>
          ${data.service ? `<tr><td style="padding:8px;font-weight:bold">Service</td><td>${data.service}</td></tr>` : ""}
          ${data.budget ? `<tr><td style="padding:8px;font-weight:bold">Budget</td><td>${data.budget}</td></tr>` : ""}
          ${data.message ? `<tr><td style="padding:8px;font-weight:bold">Message</td><td>${data.message}</td></tr>` : ""}
        </table>
      </div>
    `,
  };
}

export function senderConfirmationTemplate(name: string) {
  return {
    subject: "We received your inquiry!",
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#213150">Thanks, ${name}!</h2>
        <p>We've received your inquiry and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to call us at <strong>+1 (336) 515-7898</strong>.</p>
        <hr/>
        <p style="color:#888;font-size:12px">You're receiving this because you submitted a form on our website.</p>
      </div>
    `,
  };
}
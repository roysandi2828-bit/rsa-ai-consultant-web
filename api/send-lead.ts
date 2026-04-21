import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { full_name, email, phone, service, message } = req.body;

  if (!full_name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.ruangmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const serviceLabel = service.charAt(0).toUpperCase() + service.slice(1);

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
            .field:last-child { border-bottom: none; }
            .label { font-weight: bold; color: #1e3a8a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { color: #555; font-size: 16px; margin-top: 5px; }
            .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 8px; margin-top: 20px; }
            .badge { display: inline-block; background: #3b82f6; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Lead Baru Masuk!</h1>
              <p>Ada pengunjung baru yang tertarik dengan layanan Anda</p>
            </div>
            <div class="content">
              <div style="text-align: center; margin-bottom: 30px;">
                <span class="badge">${serviceLabel}</span>
              </div>

              <div class="field">
                <div class="label">Nama Lengkap</div>
                <div class="value">${full_name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <div class="label">Nomor WhatsApp</div>
                <div class="value"><a href="https://wa.me/${phone.replace(/\D/g, '')}" style="color: #3b82f6; text-decoration: none;">${phone}</a></div>
              </div>

              <div class="field">
                <div class="label">Layanan</div>
                <div class="value">${serviceLabel}</div>
              </div>

              <div class="field">
                <div class="label">Pesan</div>
                <div class="value" style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">${message}</div>
              </div>

              <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; color: #1e40af;"><strong>💡 Segera hubungi client melalui WhatsApp atau Email!</strong></p>
              </div>
            </div>

            <div class="footer">
              <p>Email ini dikirim otomatis dari sistem RSA Studio. Jangan lupa follow-up dengan calon klien Anda! 🚀</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'hello@rsastudio.web.id',
      subject: `Lead Baru Masuk - ${serviceLabel}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}

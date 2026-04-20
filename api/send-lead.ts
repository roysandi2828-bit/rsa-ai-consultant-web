import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface LeadData {
  full_name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'mail.ruangmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true' ? true : false,
  auth: {
    user: process.env.EMAIL_USER || 'hello@rsastudio.web.id',
    pass: process.env.EMAIL_PASS || '',
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const leadData: LeadData = req.body;

    // Validate required fields
    if (!leadData.full_name || !leadData.email || !leadData.phone || !leadData.service || !leadData.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('[v0] Sending lead email:', { name: leadData.full_name, email: leadData.email });

    // Generate WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Halo, saya ${leadData.full_name}.\n\n` +
      `Email: ${leadData.email}\n` +
      `WhatsApp: ${leadData.phone}\n` +
      `Layanan: ${leadData.service}\n\n` +
      `Pesan:\n${leadData.message}`
    );

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'hello@rsastudio.web.id',
      to: process.env.EMAIL_USER || 'hello@rsastudio.web.id',
      subject: 'Lead Baru dari Website RSA Studio',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { border: 1px solid #ddd; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1e40af; }
              .value { margin-top: 5px; color: #555; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Lead Baru dari Website RSA Studio</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nama:</div>
                  <div class="value">${leadData.full_name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${leadData.email}">${leadData.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">WhatsApp:</div>
                  <div class="value"><a href="https://wa.me/${leadData.phone.replace(/\D/g, '')}">${leadData.phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Layanan yang Diminati:</div>
                  <div class="value">${leadData.service}</div>
                </div>
                <div class="field">
                  <div class="label">Pesan:</div>
                  <div class="value">${leadData.message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
                  <p>Dikirim pada: ${new Date(leadData.created_at).toLocaleString('id-ID')}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('[v0] Email sent successfully');

    // Return success with WhatsApp link
    return res.status(200).json({
      success: true,
      message: 'Lead sent successfully',
      whatsappUrl: `https://wa.me/6281399855043?text=${whatsappMessage}`,
    });
  } catch (error) {
    console.error('[v0] Error sending lead:', error);
    return res.status(500).json({
      error: 'Failed to send lead',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

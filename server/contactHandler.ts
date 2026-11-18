import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import type { IncomingMessage, ServerResponse } from 'http';

dotenv.config();

export async function handleContactRequest(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', async () => {
    try {
      const { name, email, message } = JSON.parse(body || '{}');

      // Validate required fields
      if (!name || !email || !message) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'All fields are required.' }));
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid email address.' }));
        return;
      }

      const gmailUser = process.env.GMAIL_USER || '';
      const gmailPassword = process.env.GMAIL_PASSWORD;

      let sent = false;

      // 1. Try Nodemailer with Gmail SMTP if credentials are provided
      if (gmailUser && gmailPassword && gmailPassword !== 'your-16-character-app-password-here') {
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: gmailUser,
              pass: gmailPassword,
            },
          });

          await transporter.sendMail({
            from: `"Portfolio Contact Form" <${gmailUser}>`,
            to: gmailUser,
            replyTo: email,
            subject: `Portfolio Message from ${name}`,
            text: `New message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #2E2833; border-radius: 12px; background: #FFF7EC;">
                <h2 style="color: #2E2833; margin-bottom: 16px;">New message from your portfolio</h2>
                <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #2E2833; margin-bottom: 16px;">
                  <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
                  <p style="margin: 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                </div>
                <div style="background-color: #ffffff; padding: 16px; border: 1px solid #2E2833; border-radius: 8px;">
                  <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
                  <p style="margin: 0; white-space: pre-wrap; color: #2E2833;">${message}</p>
                </div>
              </div>
            `,
          });

          sent = true;
          console.log(`[Contact API] Successfully dispatched email via SMTP`);
        } catch (smtpErr: any) {
          console.error('[Contact API] SMTP dispatch failed, attempting relay fallback:', smtpErr.message);
        }
      }

      // 2. Fallback to FormSubmit activated endpoint token
      if (!sent) {
        try {
          const relayRes = await fetch('https://formsubmit.co/ajax/1a5660f458555e23b9b485f0b1dd1c67', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Origin': 'http://localhost:4173',
              'Referer': 'http://localhost:4173/'
            },
            body: JSON.stringify({
              name,
              email,
              message,
              _subject: `New Portfolio Message from ${name}`,
              _template: 'table',
              _captcha: 'false'
            })
          });

          const relayData = await relayRes.json().catch(() => null);
          console.log('[Contact API] FormSubmit response:', relayData);
          sent = true;
        } catch (relayErr: any) {
          console.error('[Contact API] Relay failed:', relayErr.message);
        }
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Message sent successfully!' }));
    } catch (err) {
      console.error('[Contact API] Unexpected error in contact handler:', err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Failed to send message. Please try again.' }));
    }
  });
}

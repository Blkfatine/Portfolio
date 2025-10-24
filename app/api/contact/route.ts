import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.error('Gmail credentials not configured in environment variables');
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    // Configure Nodemailer transporter with Gmail SMTP
    // NOTE: GMAIL_PASSWORD should be an "App Password" generated from Gmail settings
    // To generate an App Password:
    // 1. Go to your Google Account settings
    // 2. Navigate to Security > 2-Step Verification
    // 3. Scroll down to "App passwords" and generate a new one
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,       // Set in .env.local: your Gmail address
        pass: process.env.GMAIL_PASSWORD,   // Set in .env.local: your Gmail App Password
      },
    });

    // Send email with both text and HTML versions
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to your own email
      replyTo: email, // Allow easy reply to the sender
      subject: 'Message from Portfolio',
      text: `
New message from your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New message from your portfolio</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error: any) {
    console.error('Email sending error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Gmail authentication failed. Please check that you are using a Gmail App Password (not your regular password). See .env.example for instructions.';
      console.error('⚠️  Gmail Auth Error: You must use a Gmail App Password, not a regular password!');
      console.error('📝 Instructions: https://myaccount.google.com/security > App passwords');
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Cannot connect to Gmail servers. Please check your internet connection.';
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'siadismedia@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Siadis Media" <siadismedia@gmail.com>`,
      to: 'siadismedia@gmail.com',
      subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 16px;">
          <h2 style="color: #00C9B1; margin-bottom: 24px;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="color: #666; padding: 8px 0; width: 120px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="color: #666; padding: 8px 0;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00C9B1;">${email}</a></td></tr>
            ${company ? `<tr><td style="color: #666; padding: 8px 0;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
            ${service ? `<tr><td style="color: #666; padding: 8px 0;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #111; border-radius: 8px; border-left: 3px solid #00C9B1;">
            <p style="color: #aaa; font-size: 12px; margin: 0 0 8px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

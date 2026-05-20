import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, company, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await Promise.all([
      // Internal notification to Daniel
      resend.emails.send({
        from: 'Siadis Media <noreply@siadismedia.com>',
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
      }),
      // Confirmation to the sender
      resend.emails.send({
        from: 'Daniel Siadis <noreply@siadismedia.com>',
        to: email,
        subject: "Got your message — I'll be in touch shortly",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 16px;">
            <h2 style="color: #00C9B1; margin-bottom: 8px;">Hey ${name},</h2>
            <p style="color: #aaa; margin-bottom: 24px;">Thanks for reaching out to Siadis Media. I've received your message and will get back to you within 24 hours.</p>
            <div style="padding: 16px; background: #111; border-radius: 8px; border-left: 3px solid #00C9B1; margin-bottom: 24px;">
              <p style="color: #666; font-size: 12px; margin: 0 0 8px;">Your message</p>
              <p style="margin: 0; color: #ccc; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 13px;">In the meantime, feel free to check out <a href="https://siadismedia.com/services" style="color: #00C9B1;">our services</a> or <a href="https://siadismedia.com/clients" style="color: #00C9B1;">who we work with</a>.</p>
            <hr style="border: none; border-top: 1px solid #222; margin: 24px 0;" />
            <p style="color: #444; font-size: 12px; margin: 0;">Daniel Siadis · Siadis Media · The Hague, Netherlands</p>
          </div>
        `,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(req: NextRequest) {
  const { email, title, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: `www.klalo.pl <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `${title} (${email}) / www.klalo.pl`,
    text: message,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    )
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    )
  }
}

import { type NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// https://nodemailer.com/

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: `www.klalo.pl <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `${name} (${email}) / www.klalo.pl`,
    text: message,
  };

  const sendMailPromise = () => {
    return new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, (err) => {
        if (!err) resolve("Wiadomość została wysłana!");
        else reject(err.message);
      });
    });
  };

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Wiadomość została wysłana!" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

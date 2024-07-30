import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) {
  const { email, title, message } = await req.json();

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
    subject: `${title} (${email}) / www.klalo.pl`,
    text: message,
  };

  try {
    await new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, (err) => {
        if (!err) resolve("Wiadomość została wysłana!");
        else reject(err.message);
      });
    });

    return NextResponse.json(
      { message: "Wiadomość została wysłana" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

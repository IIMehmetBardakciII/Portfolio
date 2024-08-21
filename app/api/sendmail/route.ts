import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NEXT_EMAIL_USER,
      subject: "New message from contact form",
      text: `Message from: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

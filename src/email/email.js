import nodemailer from 'nodemailer'
import { emailHtml, emailHtml2 } from './emailHtml.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

export const sendEmails = async (email) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '24h' });
      // Send email
      const info = await transporter.sendMail({
        from: '"El Shorouk Academy" <' + process.env.EMAIL_USER + '>',
        to: email,
        subject: 'Verify Your Email',
        html: emailHtml(token),
      });
      console.log("Message sent: %s", info.messageId);
}

export const sendEmails2 = async (email,otp) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: '"El Shorouk Academy" <' + process.env.EMAIL_USER + '>', // sender address
      to: email, // list of receivers
      subject: "OTP", // Subject line
      html: emailHtml2(otp), // html body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  main().catch(console.error);
}
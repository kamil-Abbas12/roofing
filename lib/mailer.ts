import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail", // or use host/port for other providers
  auth: {
    user: process.env.EMAIL_USER,    // your sending Gmail
    pass: process.env.EMAIL_PASS,    // Gmail App Password (not your real password)
  },
});
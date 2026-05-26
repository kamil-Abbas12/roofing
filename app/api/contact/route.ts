import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import { transporter } from "@/lib/mailer";
import { ownerEmailTemplate, senderConfirmationTemplate } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    // Save to DB
    const newContact = await Contact.create(body);

    // Email to owner
    const ownerTpl = ownerEmailTemplate(body);
    await transporter.sendMail({
      from: `"Roofing Website" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: ownerTpl.subject,
      html: ownerTpl.html,
    });

    // Confirmation email to the person who submitted
    const senderTpl = senderConfirmationTemplate(body.name);
    await transporter.sendMail({
      from: `"Your Roofing Company" <${process.env.EMAIL_USER}>`,
      to: body.email,
      subject: senderTpl.subject,
      html: senderTpl.html,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
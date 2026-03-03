import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const newContact = await Contact.create(body);

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
      data: newContact,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";


function sanitiseInput(input: string) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    const web3FormsKey = process.env.WEB3FORMS_KEY;
   if (!web3FormsKey) {
     return NextResponse.json({ success: false, message: "Server configuration error: Missing API Key" }, { status: 500 });
   }
    // Create FormData to send to Web3Forms 
    const sanitisedData = {
    name: sanitiseInput(body.name),
    email: sanitiseInput(body.email),
    message: sanitiseInput(body.message),
    access_key: process.env.WEB3FORMS_KEY!,
  }; 

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sanitisedData),
    });

    const json = await res.json();

    if (json.success) {
      return NextResponse.json({ success: true, message: json.message });
    } else {
      return NextResponse.json({ success: false, message: json.message || "Failed to submit form" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
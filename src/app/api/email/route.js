import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "@/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const {email,subject,textArea} = await req.json();
    
    await resend.emails.send({
        from: 'onboarding@resend.dev',//de cumparat domeniu si de trecut aici
        to: email,
        subject: subject,
        react: WelcomeEmail({
            textArea:textArea
        })
      });
    return NextResponse.json({
        status:'ok'
    })
}
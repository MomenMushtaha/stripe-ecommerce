import { NextResponse } from "next/server"
import { stripe } from "../../lib/stripe"

export async function GET() {
  try {
    const paymentIntents = await stripe.paymentIntents.list({ limit: 1 })
    return NextResponse.json({ success: true, message: "Stripe connection successful" })
  } catch (error: any) {
    console.error("Stripe connection error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}


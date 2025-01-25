import { NextResponse } from "next/server"
import { stripe } from "../../lib/stripe"
import { headers } from "next/headers"

export async function POST(request: Request) {
  const { productId } = await request.json()

  if (!productId) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
  }

  const headersList = headers()
  const host = headersList.get("host")
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https"
  const baseUrl = `${protocol}://${host}`

  try {
    console.log("Creating checkout session with base URL:", baseUrl)

    const product = await stripe.products.retrieve(productId)
    const price = await stripe.prices.retrieve(product.default_price as string)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/beginner-tabla?canceled=true`,
      metadata: {
        productId: productId,
      },
    })

    console.log("Checkout session created:", session.id)
    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error("Stripe error:", err)
    return NextResponse.json(
      {
        error: err.message,
        details: process.env.NODE_ENV === "development" ? err : undefined,
      },
      { status: 500 },
    )
  }
}


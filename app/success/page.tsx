import { stripe } from "../lib/stripe"

async function getOrderDetails(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items"],
  })
  return session
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  const sessionId = searchParams.session_id
  const orderDetails = sessionId ? await getOrderDetails(sessionId) : null

  if (!orderDetails) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Order not found</h1>
        <a href="/" className="text-blue-500 hover:underline">
          Return to Home
        </a>
      </div>
    )
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
      <p className="mb-4">Your order has been successfully processed.</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Order Details:</h2>
        {orderDetails.line_items?.data.map((item) => (
          <p key={item.id}>
            {item.quantity} x {item.description} - ${(item.amount_total / 100).toFixed(2)}
          </p>
        ))}
        <p className="font-semibold mt-2">Total: ${(orderDetails.amount_total / 100).toFixed(2)}</p>
      </div>
      <a href="/" className="text-blue-500 hover:underline">
        Return to Home
      </a>
    </div>
  )
}


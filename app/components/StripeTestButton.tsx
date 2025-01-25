"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export default function StripeTestButton() {
  const [testing, setTesting] = useState(false)

  const testStripeConnection = async () => {
    setTesting(true)
    try {
      const response = await fetch("/api/test-stripe-connection")
      const data = await response.json()
      if (data.success) {
        toast.success("Stripe connection successful")
      } else {
        toast.error(`Stripe connection failed: ${data.message}`)
      }
    } catch (error) {
      toast.error("Failed to test Stripe connection")
    } finally {
      setTesting(false)
    }
  }

  return (
    <button
      onClick={testStripeConnection}
      disabled={testing}
      className="bg-white text-black py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300 disabled:bg-gray-500 disabled:text-gray-300"
    >
      {testing ? (
        <>
          <Loader2 className="inline mr-2 h-4 w-4 animate-spin" />
          Testing...
        </>
      ) : (
        "Test Stripe Connection"
      )}
    </button>
  )
}


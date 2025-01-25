"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Image from "next/image"

const sizeOptions = [
  {
    name: "24 cm",
    details: "10 inner screws",
    stripeId: "prod_XXXXXXXXXXXXXXX",
    productName: `Riq (Tef in Turkish) - Size 24 cm - Walnut wood
      Cymbals: hammered brass - 10 inner screws`,
  },
  {
    name: "23 cm",
    details: "5 inner screws",
    stripeId: "prod_YYYYYYYYYYYYYYY",
    productName: `Riq (Tef in Turkish) - Size 23 cm - Walnut wood
      Cymbals: hammered brass - 5 inner screws`,
  },
  {
    name: "22 cm",
    details: "5 inner screws",
    stripeId: "prod_ReLIdzRynclOkc",
    productName: `Riq (Tef in Turkish) - Size 22 cm - Walnut wood
      Cymbals: hammered brass - 5 inner screws`,
  },
  {
    name: "22 cm (Outer Screws)",
    details: "5 outer screws",
    stripeId: "prod_AAAAAAAAAAAAAAA",
    productName: `Riq (Tef in Turkish) - Size 22 cm - Walnut wood
      Cymbals: hammered brass - 5 outer screws`,
  },
  {
    name: "Size 23 cm - Walnut wood Cymbals: bronze brass",
    details: "10 inner screws",
    stripeId: "prod_BBBBBBBBBBBBBBB",
    productName: `Riq (Tef in Turkish) - Size 23 cm - Walnut wood
      Cymbals: bronze brass - 10 inner screws`,
  },
  {
    name: "Beechwood",
    details: "10 inner screws",
    stripeId: "prod_CCCCCCCCCCCCCCC",
    productName: `Riq (Tef in Turkish) - Beechwood
      Cymbals: hammered brass - 10 inner screws`,
  },
]

export default function RiqSection() {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleBuyNow = () => {
    setLoading(true)
    // TODO: Replace with actual Stripe checkout URLs
    const checkoutUrls = {
      "24 cm":
        "https://checkout.stripe.com/c/pay/cs_test_a1J28X5z9woKkwVs6UE7L0fSJivJO0rsAEY6jQDLIitRCv5psQHpnOgVyU#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "23 cm":
        "https://checkout.stripe.com/c/pay/cs_test_a1AKB1FWb6jazvs41fU9pTBn87bFA1JWJGb6wdxT46OzOaE4l6BRzsVUBb#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "22 cm":
        "https://checkout.stripe.com/c/pay/cs_test_a1mCPwNXwTxEqzn5obcWCKRR0OhnimxrBUboaJwyOhbA8pelV7cgDul0YP#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "22 cm (Outer Screws)":
        "https://checkout.stripe.com/c/pay/cs_test_a1eAOuPjIAUkEwf7NoFniC4SuaECOcsAHsA9cioRnOV5lr1gQRDmgkCDQY#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "Size 23 cm - Walnut wood Cymbals: bronze brass":
        "https://checkout.stripe.com/c/pay/cs_test_a1UDJTcFYfed0OkpHhuzmUTVqo9EUZ0Tdq3ZkeVnETtT4F0HvVTuBqlple#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      Beechwood:
        "https://checkout.stripe.com/c/pay/cs_test_a1qLa6F1jzeigeMaW45LV0ZtDRckyvoJ16tmbWzJZuJUV6DW77QpMqJdt2#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
    }

    const checkoutUrl = checkoutUrls[selectedSize.name]
    if (checkoutUrl) {
      router.push(checkoutUrl)
    } else {
      toast.error("Checkout URL not found for the selected size.")
    }
    setLoading(false)
  }

  return (
    <div className="bg-premium-gradient p-8 rounded-lg shadow-lg border border-premium-gold">
      <h3 className="font-playfair text-2xl text-premium-gold mb-4">Riq (Tef in Turkish)</h3>
      <div className="mb-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-01-24-15-53-25%202.jpg-l9rn7A3m2v1ZcHNq6jItmwojnEEbe2.jpeg"
          alt={`${selectedSize.productName}`}
          width={300}
          height={300}
          className="rounded-lg object-contain bg-white mx-auto shadow-lg"
        />
      </div>
      <p className="text-premium-white mb-4 text-center">Handcrafted Riq with hammered brass cymbals.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        {sizeOptions.map((size) => (
          <button
            key={size.stripeId}
            onClick={() => setSelectedSize(size)}
            className={`flex flex-col items-center p-2 rounded-md transition-all ${
              selectedSize.stripeId === size.stripeId
                ? "bg-premium-gold border-2 border-premium-white"
                : "hover:bg-premium-gold/20"
            }`}
          >
            <span
              className={`text-sm font-bold ${
                selectedSize.stripeId === size.stripeId ? "text-premium-black" : "text-premium-white"
              }`}
            >
              {size.name}
            </span>
            <span
              className={`text-xs ${
                selectedSize.stripeId === size.stripeId ? "text-premium-black/70" : "text-premium-white/70"
              }`}
            >
              {size.details}
            </span>
            {selectedSize.stripeId === size.stripeId && <Check className="w-4 h-4 mt-1 text-premium-black" />}
          </button>
        ))}
      </div>
      <div className="flex items-center mt-6">
        <button
          onClick={handleBuyNow}
          disabled={loading}
          className="w-full px-6 py-3 bg-premium-gold text-premium-black font-bold rounded-md hover:bg-premium-light-gold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {loading ? <span className="animate-spin mr-2">&#9696;</span> : <ShoppingCart className="w-5 h-5 mr-2" />}
          Buy Now
        </button>
      </div>
    </div>
  )
}


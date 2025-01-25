"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Loader2, ShoppingCart } from "lucide-react"
import { toast } from "sonner"

interface Product {
  id: string
  name: string
  price: number | null
  image: string
}

export default function ProductCard({ product, isFrontFacing }: { product: Product; isFrontFacing?: boolean }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleBuyNow = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product.id }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to create checkout session")
      }

      const data = await response.json()
      if (!data.url) {
        throw new Error("No checkout URL received")
      }

      router.push(data.url)
    } catch (error: any) {
      console.error("Checkout error:", error)
      toast.error(error.message || "Failed to initiate checkout. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className={`group bg-premium-gradient rounded-lg overflow-hidden shadow-lg transition-all duration-300 border border-premium-gradient ${
        isFrontFacing ? "shadow-[0_0_20px_rgba(212,175,55,0.5)] scale-105" : ""
      }`}
    >
      <div className="aspect-[4/5] w-full overflow-hidden relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={500}
          height={625}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-premium-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-lg uppercase tracking-wide text-premium-gradient">{product.name}</h3>
        <p className="mt-2 font-roboto text-sm text-premium-white">
          {product.price ? `$${(product.price / 100).toFixed(2)} USD` : "Price not available"}
        </p>
        <button
          onClick={handleBuyNow}
          disabled={loading || !product.price}
          className="mt-4 w-full px-6 py-3 bg-premium-gold text-premium-black font-bold rounded-md hover:bg-premium-light-gold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Buy Now</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}


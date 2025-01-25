"use client"

import { Drum } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Loader2, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  price: number | null
  image: string
}

export default function Services({ products = [] }: { products?: Product[] }) {
  const trainingBundles = products.filter((product) => product.name.toLowerCase().includes("training"))
  const router = useRouter()

  const [loading, setLoading] = useState<{ [key: string]: boolean }>({})

  const handleBuyNow = async (productId: string) => {
    setLoading((prev) => ({ ...prev, [productId]: true }))
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
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
      setLoading((prev) => ({ ...prev, [productId]: false }))
    }
  }

  if (trainingBundles.length === 0) {
    return null
  }

  return (
    <section className="bg-premium-gradient py-24" id="services">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-light uppercase mb-16 text-center text-premium-gradient">
          Training Bundles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingBundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-premium-black bg-opacity-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-premium-gold/20 border border-premium-gradient"
            >
              <div className="relative aspect-[4/5] w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src={bundle.image || "/placeholder.svg"}
                  alt={bundle.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-premium-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-premium-gold">
                    <Drum size={48} />
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl text-premium-white mb-2">{bundle.name}</h3>
              <p className="text-premium-white/80 mb-4">{bundle.description}</p>
              <p className="text-xl sm:text-2xl text-premium-gold font-bold mb-4">
                {bundle.price ? `$${(bundle.price / 100).toFixed(2)}` : "Price not available"}
              </p>
              <button
                onClick={() => handleBuyNow(bundle.id)}
                disabled={loading[bundle.id] || !bundle.price}
                className="w-full px-6 py-3 bg-premium-gold text-premium-black font-bold rounded-md hover:bg-premium-light-gold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {loading[bundle.id] ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    <span className="text-xs sm:text-sm">Subscribe Now</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


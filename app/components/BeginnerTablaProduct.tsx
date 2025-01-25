"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Check, ShoppingCart } from "lucide-react"
import { toast } from "sonner"

const colorOptions = [
  { name: "Black", stripeId: "prod_NZVfxFc4Y3vkXo" },
  { name: "Black/White", stripeId: "prod_NZVinMFVk8aLBB" },
  { name: "White/Black", stripeId: "prod_NZVj8V1jfud4NG" },
  { name: "White/Silver", stripeId: "prod_NZVjva8j6lAQPz" },
  { name: "Orange/Black", stripeId: "prod_NZVkKrSiqyzOfE" },
  { name: "Black/Blue", stripeId: "prod_NZVkpLIyKO1rIE" },
]

export default function BeginnerTablaProduct() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleBuyNow = () => {
    setLoading(true)
    const checkoutUrls = {
      Black:
        "https://checkout.stripe.com/c/pay/cs_test_a1MNethOlHTGCCEvMqbAlmTA8pB0un9nWeNc5UaScaH4hyrK3iDoIONd47#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "Black/White":
        "https://checkout.stripe.com/c/pay/cs_test_a1rCex9Qbpt1w2qc5pCUsVnyyp7nJMGUeYs6HqThF9Hkp29lafmZrcDdoA#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "White/Black":
        "https://checkout.stripe.com/c/pay/cs_test_a1VvPZCTwDORLdyCqvFsOUvDqEtbie8NPm8gvaJjargrQQ3tMDuqUKvEZu#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "White/Silver":
        "https://checkout.stripe.com/c/pay/cs_test_a19EQZ7YoxGQufjQjZqGXSz20ikfl72kVQItXG6qiDEwCxaT67nyXoW0Hi#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "Orange/Black":
        "https://checkout.stripe.com/c/pay/cs_test_a1EENuvQKekinNSEJCL4yIc9V4jKTmnWRoWBCyoCjqgfsVGNQnJzHLvorx#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
      "Black/Blue":
        "https://checkout.stripe.com/c/pay/cs_test_a1CVIKuNzvGQa16ln9RDckRp4DPECRiiVqFR9XIeU4ZmW6sOsp6FEpxqEH#fidkdWxOYHwnPyd1blpxYHZxWjA0VG59YE5VM3NpYkduX19rPENOdn1OTT19U0BXZkI1VG1LT0JDcnJ2XENzXH1ccmFrQGZ8R3JoVlR0cTJscTZjTWldS25DUH1Pf2g0ZElUXHUxXUhJblFONTVWRHNyMmF0bicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
    }

    const checkoutUrl = checkoutUrls[selectedColor.name]
    if (checkoutUrl) {
      router.push(checkoutUrl)
    } else {
      toast.error("Checkout URL not found for the selected color.")
    }
    setLoading(false)
  }

  return (
    <div className="bg-premium-gradient py-24">
      <div className="container mx-auto px-4">
        <div className="bg-premium-black bg-opacity-50 p-8 rounded-lg border border-premium-gold shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20_beginner-vWcIMiHlwOBYjbZNCutxICcfQMwHTN.jpeg"
                alt="Black Beginner Tabla/Darbuka - Professional Grade Percussion Instrument"
                width={500}
                height={500}
                className="rounded-lg object-contain bg-white"
              />
            </div>
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl text-premium-gold">Beginner Tabla/Darbuka</h1>
              <p className="text-premium-white text-lg">
                Perfect for beginners, this Tabla/Darbuka offers excellent sound quality and durability. Choose from our
                range of stunning color combinations to match your style.
              </p>
              <div className="space-y-4">
                <h2 className="font-playfair text-2xl text-premium-gold">Select Color</h2>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center p-2 rounded-md transition-all ${
                        selectedColor.name === color.name
                          ? "bg-premium-gold border-2 border-premium-white"
                          : "hover:bg-premium-gold/20"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full border relative flex items-center justify-center ${
                          selectedColor.name === color.name ? "border-premium-black" : "border-premium-gold"
                        } mr-2`}
                        style={{
                          background: color.name.includes("/")
                            ? `linear-gradient(to right, ${color.name.split("/")[0]}, ${color.name.split("/")[1]})`
                            : color.name,
                        }}
                      >
                        {selectedColor.name === color.name && <Check className="w-4 h-4 text-premium-black absolute" />}
                      </div>
                      <span
                        className={`text-sm ${
                          selectedColor.name === color.name ? "text-premium-black" : "text-premium-white"
                        }`}
                      >
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-premium-gold text-2xl font-bold">$199.99</div>
              <button
                onClick={handleBuyNow}
                disabled={loading}
                className="w-full px-6 py-3 bg-premium-gold text-premium-black font-bold rounded-md hover:bg-premium-light-gold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {loading ? (
                  <span className="animate-spin mr-2">&#9696;</span>
                ) : (
                  <ShoppingCart className="w-5 h-5 mr-2" />
                )}
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


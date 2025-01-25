import { Suspense } from "react"
import { stripe } from "./lib/stripe"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Footer from "./components/Footer"
import GivingBack from "./components/GivingBack"
import ProductsAndServices from "./components/ProductsAndServices"

async function getProducts() {
  try {
    const { data: products } = await stripe.products.list({
      expand: ["data.default_price"],
      active: true,
      limit: 100,
    })

    console.log("Fetched products:", products)

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description || "",
      price: (product.default_price as Stripe.Price)?.unit_amount ?? null,
      image: product.images[0] || "/placeholder.svg?height=500&width=500",
    }))
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export default async function Home() {
  const products = await getProducts()
  console.log("All fetched products:", products)
  const trainingProducts = products.filter((product) => product.name.toLowerCase().includes("training"))
  const frontFacingProducts = products.filter((product) =>
    [
      "Tablas covers suitable for size 22 and 23",
      "Hammered Brass Cymbal Set For Riq",
      "Beginner Classes (all ages)",
      "Master Classes",
    ].includes(product.name),
  )

  return (
    <div className="relative bg-premium-black">
      <Hero />
      <Services products={trainingProducts} />
      <main className="min-h-screen" id="products">
        <ProductsAndServices frontFacingProducts={frontFacingProducts} />
        <GivingBack />
      </main>
      <About />
      <Footer />
    </div>
  )
}


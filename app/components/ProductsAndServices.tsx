"use client"

import { useEffect, useRef } from "react"
import ProductCard from "./ProductCard"
import BeginnerTablaSection from "./BeginnerTablaSection"
import ProfessionalOrientDarbukaSection from "./ProfessionalOrientDarbukaSection"
import RiqSection from "./RiqSection"

interface Product {
  id: string
  name: string
  description: string
  price: number | null
  image: string
}

interface ProductsAndServicesProps {
  frontFacingProducts: Product[]
}

export default function ProductsAndServices({ frontFacingProducts }: ProductsAndServicesProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      className="bg-premium-gradient py-32 w-full relative overflow-hidden transition-opacity duration-1000 ease-in-out opacity-0"
      id="products-and-services"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <h2
          className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-light uppercase mb-20 text-center text-premium-gradient relative"
          aria-label="Products and Services"
        >
          <span className="relative z-10">PRODUCTS & SERVICES</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-32 h-1 bg-gradient-to-r from-transparent via-premium-gold to-transparent"></span>
        </h2>
        <div className="space-y-32">
          <div className="bg-premium-black bg-opacity-70 p-12 rounded-lg shadow-xl border border-premium-gold/30 transition-all duration-300 hover:bg-opacity-80 hover:shadow-2xl hover:border-premium-gold/50">
            <h3 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-light uppercase mb-16 text-center text-premium-gradient relative">
              <span className="relative z-10">PRODUCTS</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-16 h-0.5 bg-premium-gold"></span>
            </h3>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 animate-stagger">
              <BeginnerTablaSection />
              <ProfessionalOrientDarbukaSection />
              <RiqSection />
              {frontFacingProducts
                .filter((product) => !product.name.toLowerCase().includes("classes"))
                .map((product) => (
                  <ProductCard key={product.id} product={product} isFrontFacing={true} />
                ))}
            </div>
          </div>
          <div className="bg-premium-black bg-opacity-70 p-12 rounded-lg shadow-xl border border-premium-gold/30 transition-all duration-300 hover:bg-opacity-80 hover:shadow-2xl hover:border-premium-gold/50">
            <h3 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-light uppercase mb-16 text-center text-premium-gradient relative">
              <span className="relative z-10">SERVICES</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-16 h-0.5 bg-premium-gold"></span>
            </h3>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 animate-stagger">
              {frontFacingProducts
                .filter((product) => product.name.toLowerCase().includes("classes"))
                .map((product) => (
                  <ProductCard key={product.id} product={product} isFrontFacing={true} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


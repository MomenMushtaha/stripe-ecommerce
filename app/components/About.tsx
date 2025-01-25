import Image from "next/image"

export default function About() {
  return (
    <section className="bg-premium-gradient py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%204.28.00%E2%80%AFAM-BEynPZTsSbZy0agXAfnKXXBcajeoUn.png"
              alt="Fares Anbar at Ajyal Film Festival"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-premium-gradient mb-12">About Fares</h2>
            <p className="text-premium-white text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              Fares Anbar is a respected musician and drum instructor from Gaza, known for his exceptional skills and
              passion for teaching. With years of experience in both performance and education, Fares has inspired
              countless students to explore their musical talents.
            </p>
            <p className="text-premium-white text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              As a survivor of recent events in Gaza, Fares brings a unique perspective to his music, infusing his
              performances and teachings with resilience and hope. His upcoming booth appearance at a major event in
              Turkey is a testament to his growing influence in the music world.
            </p>
            <p className="text-premium-white text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              Through his online tutoring services and carefully curated selection of musical instruments, Fares
              continues to share his love for music and drumming with aspiring musicians around the globe.
            </p>
            <div className="pt-8">
              <a
                href="#products"
                className="inline-block px-8 py-3 text-xs sm:text-sm uppercase tracking-widest border border-premium-gold text-premium-gold hover:bg-premium-gold hover:text-premium-black transition-all duration-300 ease-in-out hover:scale-105"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


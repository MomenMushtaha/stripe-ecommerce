import Image from "next/image"
import Link from "next/link"

export default function GivingBack() {
  return (
    <section className="bg-premium-gradient py-24" id="giving-back">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-light uppercase mb-16 text-center text-premium-gradient">
          Giving Back
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-premium-gold mb-4">
              YASMEEN: A Journey of Hope and Resilience
            </h3>
            <p className="text-premium-white text-lg leading-relaxed mb-6 text-sm sm:text-base lg:text-lg">
              Fares Anbar Co. is launching a clothing line to give back to its humble beginnings. The proceeds from the
              clothing line will be sponsoring an initiative called YASMEEN in Gaza.
            </p>
            <ul className="space-y-4 text-premium-white">
              <li>
                <span className="text-premium-gold font-bold">Y</span> - Yearning for peace through art
              </li>
              <li>
                <span className="text-premium-gold font-bold">A</span> - Amidst destruction, creating beauty
              </li>
              <li>
                <span className="text-premium-gold font-bold">S</span> - Standing tall with remarkable resilience
              </li>
              <li>
                <span className="text-premium-gold font-bold">M</span> - Music becomes their voice
              </li>
              <li>
                <span className="text-premium-gold font-bold">E</span> - Every stroke carries a message
              </li>
              <li>
                <span className="text-premium-gold font-bold">E</span> - Empowered by creativity
              </li>
              <li>
                <span className="text-premium-gold font-bold">N</span> - Never giving up, embodying hope
              </li>
            </ul>
            <div className="pt-8">
              <Link
                href="#products-and-services"
                className="inline-block px-8 py-3 text-xs sm:text-sm uppercase tracking-widest border border-premium-gold text-premium-gold hover:bg-premium-gold hover:text-premium-black transition-all duration-300 ease-in-out hover:scale-105"
              >
                Shop to Support
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20at%203.54.13%E2%80%AFAM-3CthJ895Ouf21Hu6f76zYGs7cde8ag.png"
              alt="Musicians and children gathered in a circle, sharing the healing power of music in Gaza"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
        <div className="mt-16 text-premium-white text-lg leading-relaxed">
          <h4 className="font-playfair text-xl sm:text-2xl lg:text-3xl text-premium-gold mb-4">
            Yasmeen Arts Outreach Initiative: Healing Through Creative Expression in Gaza
          </h4>
          <p className="mb-4">
            The children of Gaza have endured unimaginable trauma, living through 471 days of genocide and violence. The
            Yasmeen Arts Outreach Initiative is stepping in to provide a path toward healing.
          </p>
          <p className="mb-4">
            Our program will be on the ground in Gaza, using the power of art as a healing stone for these young souls.
            Through music, singing, acting, and painting workshops, we aim to offer them a safe space to express their
            emotions, process their trauma, and rediscover hope.
          </p>
          <p className="mb-4">
            Your purchase can help us provide the resources needed to launch these workshops and sustain the initiative.
            Every contribution, no matter the size, will make a direct impact on the lives of Gazan children and local
            artists.
          </p>
          <p className="font-bold">
            Join us in empowering a generation through the power of art. Buy today and be a part of the healing process.
            Together, we can bring hope and creativity to those who need it most.
          </p>
        </div>
      </div>
    </section>
  )
}


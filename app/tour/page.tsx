import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User, Menu, ArrowRight } from "lucide-react"

export default function TourPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-[#f9f3e9]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <AuraLogo />
            <span className="text-2xl font-serif text-[#333333]">AURA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-[#333333] font-medium">
              Home
            </Link>
            <Link href="/gallery" className="text-[#333333] font-medium">
              Gallery
            </Link>
            <Link href="/websites" className="text-[#333333] font-medium">
              Websites
            </Link>
            <Link href="/inspo" className="text-[#333333] font-medium">
              Inspo
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="rounded-full bg-transparent text-[#333333]">
                <User className="h-6 w-6" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="rounded-full bg-transparent text-[#333333] md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/tour" className="hidden md:block">
              <Button className="rounded-full px-8 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333] font-bold">
                Take a Tour
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <section className="bg-[#f9f3e9] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Welcome to AURA</h1>
              <p className="text-lg text-[#666666] mb-8">
                Let us guide you through our digital art platform and show you all the features
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-4">Discover Amazing Artwork</h2>
                <p className="text-lg text-[#666666] mb-6">
                  Browse through our extensive gallery of digital art created by talented artists from around the world.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c2aa94] flex items-center justify-center text-white mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Explore the Gallery</h3>
                      <p className="text-[#666666]">
                        Filter by categories, styles, and artists to find artwork that resonates with you.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c2aa94] flex items-center justify-center text-white mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Save Your Favorites</h3>
                      <p className="text-[#666666]">Create collections of artwork you love and revisit them anytime.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c2aa94] flex items-center justify-center text-white mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Connect with Artists</h3>
                      <p className="text-[#666666]">
                        Follow your favorite creators and get notified when they share new work.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/gallery">
                    <Button className="rounded-full px-6 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
                      Explore Gallery
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Gallery+Preview"
                  alt="Gallery Preview"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f9f3e9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-80 md:h-96">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Upload+Preview"
                  alt="Upload Preview"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-serif mb-4">Share Your Creations</h2>
                <p className="text-lg text-[#666666] mb-6">
                  AURA provides a platform for artists to showcase their work and connect with a community of art
                  enthusiasts.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c2aa94] flex items-center justify-center text-white mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Easy Upload Process</h3>
                      <p className="text-[#666666]">
                        Upload your artwork in just a few clicks with our intuitive interface.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c2aa94] flex items-center justify-center text-white mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Detailed Descriptions</h3>
                      <p className="text-[#666666]">
                        Add titles, descriptions, and tags to help others discover your work.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c2aa94] flex items-center justify-center text-white mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Analytics and Insights</h3>
                      <p className="text-[#666666]">
                        Track engagement and see who's viewing and appreciating your art.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/upload">
                    <Button className="rounded-full px-6 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
                      Upload Your Art
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-[#666666] mb-8">Join our community of artists and art enthusiasts today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full px-8 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
                  Create Account
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-2 border-[#c2aa94] text-[#c2aa94] hover:bg-[#c2aa94] hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AuraLogoWhite />
                <span className="text-2xl font-serif">AURA</span>
              </div>
              <p className="text-white/70">Unveiling the mystique of digital art</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-white/70 hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/websites" className="text-white/70 hover:text-white">
                    Websites
                  </Link>
                </li>
                <li>
                  <Link href="/inspo" className="text-white/70 hover:text-white">
                    Inspo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="text-white/70 hover:text-white">
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50">
            <p>© {new Date().getFullYear()} AURA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AuraLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L60 30L50 50L40 30L50 10Z" stroke="#333333" strokeWidth="2" />
      <path d="M30 40L50 50L70 40" stroke="#333333" strokeWidth="2" />
      <path d="M30 40L20 60L50 80L80 60L70 40" stroke="#333333" strokeWidth="2" />
      <circle cx="15" cy="35" r="2" fill="#333333" />
      <circle cx="85" cy="35" r="2" fill="#333333" />
      <circle cx="50" cy="5" r="2" fill="#333333" />
      <circle cx="90" cy="50" r="1" fill="#333333" />
      <circle cx="10" cy="50" r="1" fill="#333333" />
      <circle cx="20" cy="20" r="1" fill="#333333" />
      <circle cx="80" cy="20" r="1" fill="#333333" />
    </svg>
  )
}

function AuraLogoWhite() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L60 30L50 50L40 30L50 10Z" stroke="white" strokeWidth="2" />
      <path d="M30 40L50 50L70 40" stroke="white" strokeWidth="2" />
      <path d="M30 40L20 60L50 80L80 60L70 40" stroke="white" strokeWidth="2" />
      <circle cx="15" cy="35" r="2" fill="white" />
      <circle cx="85" cy="35" r="2" fill="white" />
      <circle cx="50" cy="5" r="2" fill="white" />
      <circle cx="90" cy="50" r="1" fill="white" />
      <circle cx="10" cy="50" r="1" fill="white" />
      <circle cx="20" cy="20" r="1" fill="white" />
      <circle cx="80" cy="20" r="1" fill="white" />
    </svg>
  )
}


"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Upload, User, Menu } from "lucide-react"
import { useState } from "react"
import { GoogleLogin } from "./components/auth/google-login"

export default function Home() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-[#f9f3e9]/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif text-[#f5d485]">AURA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-[#d4a6a6] font-medium">
              Home
            </Link>
            <Link href="/gallery" className="text-[#d4a6a6] font-medium">
              Gallery
            </Link>
            <Link href="/websites" className="text-[#d4a6a6] font-medium">
              Websites
            </Link>
            <Link href="/inspo" className="text-[#d4a6a6] font-medium">
              Inspo
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-transparent text-[#d4a6a6]"
              onClick={() => setShowLogin(true)}
            >
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-transparent text-[#d4a6a6] md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/tour" className="hidden md:block">
              <Button className="rounded-full px-8 py-2 bg-[#d4a6a6] hover:bg-[#c29292] text-white">Take a Tour</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/aura-background.png" alt="AURA Background" fill className="object-cover" priority />
          </div>

          <div className="relative z-10 text-center px-4">
            <div className="flex flex-col items-center justify-center mb-4">
              {/* AURA text and tagline removed as requested */}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/upload">
                <Button className="rounded-full px-8 py-6 bg-[#d4a6a6] hover:bg-[#c29292] text-white">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Your Art
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f9f3e9]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#d4a6a6]">Featured Artworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=800&text=Artwork+${item}`}
                    alt={`Artwork ${item}`}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d4a6a6]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-medium">Artwork Title</h3>
                    <p className="text-white/80">by Artist Name</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="rounded-full px-8 py-2 bg-[#d4a6a6] hover:bg-[#c29292] text-white">
                View All Artworks
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#a6c1d4]/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#d4a6a6]">Join Our Community</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8 text-[#666666]">
                Connect with fellow artists, share your work, and get inspired. AURA is more than a gallery—it's a
                community of creators.
              </p>
              <Button
                className="rounded-full px-8 py-2 bg-[#d4a6a6] hover:bg-[#c29292] text-white"
                onClick={() => setShowLogin(true)}
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#d4a6a6] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
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

      {showLogin && <GoogleLogin onClose={() => setShowLogin(false)} />}
    </div>
  )
}


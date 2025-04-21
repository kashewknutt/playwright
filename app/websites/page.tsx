import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User, Menu, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WebsitesPage() {
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
            <Link href="/websites" className="text-[#333333] font-medium font-bold">
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
              <Button className="rounded-full px-8 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
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
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Website Templates</h1>
              <p className="text-lg text-[#666666] mb-8">
                Discover beautiful website templates designed for artists and creators
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full px-8 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
                  Browse Templates
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-2 border-[#c2aa94] text-[#c2aa94] hover:bg-[#c2aa94] hover:text-white"
                >
                  Custom Design
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Featured Templates</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websiteTemplates.map((template, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={`/placeholder.svg?height=600&width=800&text=Template+${index + 1}`}
                      alt={template.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-[#333333]">{template.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">{template.title}</h3>
                    <p className="text-[#666666] mb-4">{template.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">${template.price}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-[#c2aa94] text-[#c2aa94] hover:bg-[#c2aa94] hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="rounded-full px-8 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
                View All Templates
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f9f3e9]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif mb-4">Need a Custom Website?</h2>
              <p className="text-lg text-[#666666] mb-8">
                Our team of designers can create a unique website tailored to your artistic vision
              </p>
              <Button className="rounded-full px-8 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
                Get in Touch
              </Button>
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

const websiteTemplates = [
  {
    title: "Artistry Portfolio",
    description: "A minimal and elegant template for artists to showcase their work",
    price: 49,
    category: "Portfolio",
  },
  {
    title: "Gallery Pro",
    description: "Perfect for photographers and visual artists with large collections",
    price: 69,
    category: "Gallery",
  },
  {
    title: "Creative Studio",
    description: "A versatile template for creative agencies and studios",
    price: 79,
    category: "Business",
  },
  {
    title: "Digital Showcase",
    description: "Modern design with focus on digital art and NFT collections",
    price: 59,
    category: "Digital Art",
  },
  {
    title: "Artist Shop",
    description: "E-commerce ready template for selling artwork and merchandise",
    price: 89,
    category: "E-commerce",
  },
  {
    title: "Minimalist Portfolio",
    description: "Clean and simple design that lets your work speak for itself",
    price: 49,
    category: "Portfolio",
  },
]

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


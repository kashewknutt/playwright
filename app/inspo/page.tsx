import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User, Menu, Bookmark, Heart, Share2 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InspoPage() {
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
            <Link href="/inspo" className="text-[#333333] font-medium font-bold">
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
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif mb-2">Inspiration</h1>
              <p className="text-[#666666]">Discover creative ideas and artistic inspiration</p>
            </div>

            <Tabs defaultValue="trending" className="w-full md:w-auto">
              <TabsList className="bg-[#f5f5f5] p-1 rounded-full">
                <TabsTrigger value="trending" className="rounded-full data-[state=active]:bg-white">
                  Trending
                </TabsTrigger>
                <TabsTrigger value="latest" className="rounded-full data-[state=active]:bg-white">
                  Latest
                </TabsTrigger>
                <TabsTrigger value="following" className="rounded-full data-[state=active]:bg-white">
                  Following
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <InspoCard key={index} index={index} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="rounded-full px-8 py-2 border-[#c2aa94] text-[#c2aa94] hover:bg-[#c2aa94] hover:text-white"
            >
              Load More
            </Button>
          </div>
        </div>
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

function InspoCard({ index }: { index: number }) {
  const categories = ["Digital Art", "Photography", "Illustration", "3D Design", "Mixed Media"]
  const category = categories[index % categories.length]

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-[#f0f0f0]">
      <div className="relative">
        <Image
          src={`/placeholder.svg?height=600&width=800&text=Inspiration+${index + 1}`}
          alt={`Inspiration ${index + 1}`}
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4 text-[#c2aa94]" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/80 hover:bg-white">
            <Bookmark className="h-4 w-4 text-[#c2aa94]" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#f0f0f0] overflow-hidden">
            <Image
              src={`/placeholder.svg?height=100&width=100&text=User`}
              alt="User"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">Artist Name</p>
            <p className="text-xs text-[#666666]">{category}</p>
          </div>
        </div>
        <h3 className="text-lg font-medium mb-2">Creative Inspiration Title {index + 1}</h3>
        <p className="text-sm text-[#666666] mb-4">
          A brief description of this creative inspiration and what makes it special.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm text-[#666666]">
            <Heart className="h-4 w-4" />
            <span>{120 + index * 11}</span>
          </div>
          <Button variant="ghost" size="sm" className="h-8 rounded-full text-[#c2aa94] hover:bg-[#c2aa94]/10">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
        </div>
      </div>
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


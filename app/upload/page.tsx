"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X, ImageIcon, User, Menu } from "lucide-react"

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removePreview = () => {
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

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
              <Button className="rounded-full px-8 py-2 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
                Take a Tour
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif mb-2">Upload Your Artwork</h1>
            <p className="text-[#666666]">Share your digital creations with the AURA community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div
                className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center h-80 transition-colors ${
                  isDragging ? "border-[#c2aa94] bg-[#c2aa94]/10" : "border-[#e0e0e0]"
                } ${preview ? "relative" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {preview ? (
                  <>
                    <Image
                      src={preview || "/placeholder.svg"}
                      alt="Preview"
                      fill
                      className="object-contain rounded-lg"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white z-10"
                      onClick={removePreview}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <>
                    <ImageIcon className="h-16 w-16 text-[#c2aa94] mb-4" />
                    <p className="text-center mb-4">Drag and drop your image here, or click to browse</p>
                    <Button
                      className="rounded-full px-6 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Select File
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </>
                )}
              </div>
              <p className="text-sm text-[#666666] mt-2">Supported formats: JPG, PNG, GIF, WEBP. Max file size: 10MB</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Artwork Title</Label>
                <Input
                  id="title"
                  placeholder="Enter a title for your artwork"
                  className="rounded-md border-[#e0e0e0] focus:border-[#c2aa94] focus:ring-[#c2aa94]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Tell us about your artwork..."
                  className="min-h-[120px] rounded-md border-[#e0e0e0] focus:border-[#c2aa94] focus:ring-[#c2aa94]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger className="rounded-md border-[#e0e0e0] focus:border-[#c2aa94] focus:ring-[#c2aa94]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital-painting">Digital Painting</SelectItem>
                    <SelectItem value="3d-art">3D Art</SelectItem>
                    <SelectItem value="illustration">Illustration</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="mixed-media">Mixed Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="Add tags separated by commas"
                  className="rounded-md border-[#e0e0e0] focus:border-[#c2aa94] focus:ring-[#c2aa94]"
                />
                <p className="text-xs text-[#666666]">Tags help others discover your artwork</p>
              </div>

              <div className="pt-4">
                <Button className="w-full rounded-full px-6 py-6 bg-[#c2aa94] hover:bg-[#b09a85] text-[#333333]">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Artwork
                </Button>
              </div>
            </div>
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


"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GoogleIcon } from "./google-icon"

interface GoogleLoginProps {
  onClose: () => void
}

export function GoogleLogin({ onClose }: GoogleLoginProps) {
  const handleGoogleLogin = () => {
    // In a real implementation, this would connect to Google OAuth
    console.log("Connecting to Google login...")
    // After successful login
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#f9f3e9]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-serif text-[#d4a6a6]">Sign in to AURA</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4 text-[#d4a6a6]" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="flex flex-col items-center py-6">
          <Button
            className="w-full max-w-sm flex items-center justify-center gap-2 py-6 bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
            onClick={handleGoogleLogin}
          >
            <GoogleIcon className="h-5 w-5" />
            <span>Sign in with Google</span>
          </Button>
          <p className="text-xs text-[#666666] mt-6 text-center max-w-xs">
            By continuing, you agree to AURA's Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}


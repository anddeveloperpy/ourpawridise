"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    if (email && email.includes("@")) {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    } else {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <section className="py-20 px-4 bg-accent/50">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">{"Be the First to Know"}</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            {"Sign up to get notified when we launch and start making a difference in pets' lives"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12"
              required
            />
          </div>
          <Button type="submit" size="lg" className="h-12 px-8">
            Notify Me
          </Button>
        </form>

        {status === "success" && (
          <p className="text-sm text-primary font-medium animate-in fade-in slide-in-from-bottom-2">
            {"✓ Thanks! We'll notify you when we launch"}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive font-medium animate-in fade-in slide-in-from-bottom-2">
            Please enter a valid email address
          </p>
        )}
      </div>
    </section>
  )
}

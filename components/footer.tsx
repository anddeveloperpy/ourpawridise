// import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            {/* <Heart className="w-6 h-6 text-primary fill-primary" /> */}
            <span className="text-xl font-bold">Our Pawradise</span>
          </div>

          <p className="text-sm text-muted-foreground text-center max-w-md text-balance">
            {"Connecting loving homes with pets in need across Guatemala"}
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with love in Guatemala</span>
            {/* <Heart className="w-4 h-4 text-primary fill-primary" /> */}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Our Pawradise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

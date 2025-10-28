// import { Heart } from "lucide-react"

export function ComingSoonHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent to-background px-4 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
        </div> */}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          Our <span className="text-primary">Paw</span>radise
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
          {"Our mission is to connect loving homes with pets in need across Guatemala"}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Coming very soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}

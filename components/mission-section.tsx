import { Heart, Home, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Heart,
    title: "Adopt with Love",
    description: "Find your perfect companion from pets waiting for their forever home in Guatemala",
  },
  {
    icon: Home,
    title: "Support Shelters",
    description: "Connect with local shelters and rescue organizations making a difference",
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Join a network of animal lovers dedicated to pet welfare and adoption",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">{"Every Pet Deserves a Loving Home"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {
              "We're building a platform to make pet adoption easier, more transparent, and more accessible throughout Guatemala"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

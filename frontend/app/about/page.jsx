import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Linkedin, Twitter } from "lucide-react"

const founders = [
  {
    name: "Ryan Rumao",
    role: "Co-Founder",
    bio: "Bachelor's in Computer Science & Data Science from University of Wisconsin-Madison. Incoming Master's in Business Analytics from Duke University Fuqua School of Business.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "www.linkedin.com/in/ryanrumao",
      github: "https://github.com/rrumao",
    },
  },
  {
    name: "Mrugank Pednekar",
    role: "Co-Founder",
    bio: "Bachelor's in Computer Science, Computer Engineering & Data Science from University of Wisconsin-Madison. Incoming Master's in Business Analytics from MIT Sloan School of Management.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/mrugankpednekar/",
      github: "https://github.com/mrugankp",
    },
  },
  {
    name: "Raihan Tanvir",
    role: "Co-Founder",
    bio: "Bachelor's in Computer Science from University of Wisconsin-Madison.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/raihan-tanvir/",
      github: "https://github.com/nabitanvir",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <Link href="/">
          <Button variant="ghost" className="group mb-8">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Sonora</h1>

          <p className="text-xl text-muted-foreground mb-8">
            We're on a mission to transform how service businesses collect and leverage customer feedback.
          </p>

          <div className="space-y-6">
            <p>
              Founded in 2025, Sonora emerged from a simple observation: service businesses struggle to collect
              meaningful customer feedback and reviews, despite their critical importance to growth and improvement.
            </p>

            <p>
              Our founding team brings together expertise in AI, voice technology, and business operations to create a
              solution that makes feedback collection effortless, natural, and actionable.
            </p>

            <p>
              We believe that every business deserves access to the insights that drive improvement, and every customer
              deserves to have their voice heard. Sonora bridges this gap with technology that feels human and delivers
              results.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <div key={index} className="glass-card rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 gradient-border">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-heading font-semibold mb-1">{founder.name}</h3>
              <p className="text-muted-foreground mb-4">{founder.role}</p>

              <p className="text-sm text-muted-foreground mb-6">{founder.bio}</p>

              <div className="flex space-x-4 mt-auto">
                <a href={founder.social.linkedin} className="text-muted-foreground hover:text-white transition-colors">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href={founder.social.github} className="text-muted-foreground hover:text-white transition-colors">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

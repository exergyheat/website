import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, Users, Zap, Bitcoin, Cpu, HelpCircle } from 'lucide-react'

const resources = [
  {
    title: "Educational Resources",
    description: "Hashrate heating blog posts, comprehensive guides, tutorials and more",
    icon: BookOpen,
    link: "/education"
  },
  {
    title: "Calculators",
    description: "Calculate potential savings and earnings with our interactive tools",
    icon: Calculator,
    link: "/calculators"
  },
  {
    title: "Technical Forum",
    description: "Deep dive with industry experts on the Hashrate Heatpunk forum",
    icon: Users,
    link: "https://heatpunks.org",
    external: true
  },
  {
    title: "FAQ",
    description: "Find answers to common questions about hashrate heating technology",
    icon: HelpCircle,
    link: "/faq"
  }
]

export default resources
"use client"

import About from "@/components/About";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import Preloader from "@/components/PreLoader";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import { AnimatedText } from "@/components/Text";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { MailIcon, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import pfpImage from "@/assets/pfp.jpeg";

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("about");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const tabs = [
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
    { id: "work", label: "work" },
  ]

  const renderContent = () => {
    switch(activeTab) {
      case "projects": return <Projects />
      case "work": return <Work />
      case "about": return <About />
      default: return null
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
      document.body.style.overflowY = 'auto'
    }, 2000)
  }, [])

  return(
    <div className="min-h-screen bg-black text-neutral-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Profile */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar src={pfpImage.src} alt="Vansh Parate" size="lg" />
              <div>
                <h1 className="text-xl font-light">Vansh Parate</h1>
                <p className="text-neutral-400 text-sm">@radeon74055</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-3 leading-tight">
                I build{" "}
                <AnimatedText 
                  words={["websites", "backends", "apps"]}
                  className="text-neutral-100 font-normal"
                />
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Full-stack developer crafting thoughtful products at the intersection of design and technology.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-neutral-400">Available for new opportunities</span>
            </div>

            <div className="pt-4">
              <a href="mailto:vanshparate@gmail.com">
                <Button className="bg-neutral-100 text-black hover:bg-neutral-200 text-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <MailIcon className="w-4 h-4 mr-2" />
                  Get in touch
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="flex gap-6 border-b border-neutral-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 text-sm transition-colors duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? "text-neutral-100 border-neutral-100"
                      : "text-neutral-500 hover:text-neutral-300 border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">{renderContent()}</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-neutral-900">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <p>© 2025 Vansh Parate</p>
            <p>Built with Next.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}


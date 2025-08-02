import React from 'react'
import { techStack } from '@/data/techstack'
import { Badge } from './Badge'
import { Button } from './Button'
import { GithubIcon, LinkedinIcon, MailIcon, Twitter, ExternalLink, Star } from 'lucide-react'

const About = () => {
  return (
    <div className="space-y-4">
            <div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                I'm a full-stack developer who believes in building products that make a difference.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                I love working with modern web technologies and creating experiences that are both beautiful and
                functional.
              </p>
            </div>

                         <div>
               <h4 className="text-sm font-medium text-neutral-100 mb-3 flex items-center justify-between">
                 Stack
                 <Star className="w-3 h-3 text-yellow-400 animate-pulse" />
               </h4>
               <div className="flex flex-wrap gap-2">
                 {techStack.map((tech) => {
                   const IconComponent = tech.icon
                   return (
                     <Badge key={tech.name} variant="secondary" className="text-xs gap-1.5 hover:scale-105 transition-transform duration-200">
                       <IconComponent className={`w-3 h-3 ${tech.color || 'text-neutral-300'}`} />
                       {tech.name}
                     </Badge>
                   )
                 })}
               </div>
             </div>

            <div>
              <h4 className="text-sm font-medium text-neutral-100 mb-3">Contact</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="mailto:vanshparate@gmail.com" 
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                
                <a 
                  href="https://github.com/Vansh-Parate" 
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                
                <a 
                  href="https://linkedin.com/in/vansh-parate0010" 
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                
                <a 
                  href="https://twitter.com/radeon74055" 
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </a>

              </div>
            </div>
          </div>
  )
}

export default About

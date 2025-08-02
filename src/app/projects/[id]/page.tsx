"use client"

import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/Badge'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-neutral-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
                 <Link 
           href="/"
           className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors duration-200 mb-8"
         >
           <ArrowLeft className="w-4 h-4" />
           Back to home
         </Link>

        {/* Project Header with Links */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-light mb-4">{project.name}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
                         <div className="flex items-center gap-3">
               <a 
                 href={`https://github.com/Vansh-Parate/${project.id}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100 transition-all duration-300 hover:scale-110"
               >
                 <Github className="w-5 h-5" />
               </a>
                               <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-300 transition-colors duration-200"
                >
                  {project.demoLink}
                  <ExternalLink className="w-4 h-4" />
                </a>
             </div>
          </div>
        </div>

        {/* Project Video/Image */}
        <div className="mb-8">
          <div className="w-full aspect-video bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800">
            <div className="text-center">
              <span className="text-neutral-500 text-lg">Project Demo Video</span>
              <p className="text-neutral-600 text-sm mt-2">Video will be embedded here</p>
            </div>
          </div>
        </div>

                 {/* Project Description */}
         <div>
           <h3 className="text-lg font-medium text-neutral-100 mb-4">About</h3>
           <div className="space-y-4">
                           <ul className="space-y-3">
                {project.features?.map((feature, index) => (
                  <li key={index} className="text-neutral-400 leading-relaxed flex items-start gap-3">
                    <span className="text-neutral-500 mt-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
           </div>
         </div>
      </div>
    </div>
  )
} 
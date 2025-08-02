import React, { useState } from 'react'
import { projects } from '@/data/projects'
import { ChevronRight } from 'lucide-react';

const Projects = () => {

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className='space-y-1'>
      {projects.map((project) =>(
        <a 
          href={`/projects/${project.id}`}
          className='group cursor-pointer block'
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-neutral-900/30 transition-all duration-200">
            <div className='flex-1'>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-neutral-100 font-medium text-sm">{project.name}</span>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-0.5 transition-all duration-200" />
          </div>     
        </a>
      ))}  
    </div>
  )
}

export default Projects

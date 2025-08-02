import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiMongodb,
  SiPrisma,
  SiFramer,
  SiVercel
} from 'react-icons/si'

export interface TechItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color?: string
}

export const techStack: TechItem[] = [
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-neutral-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
  { name: "Prisma", icon: SiPrisma, color: "text-neutral-300" },
]
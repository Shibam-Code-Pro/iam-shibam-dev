'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectDetailClient from './ProjectDetailClient'

// Get project by slug
function getProjectBySlug(slug) {
  return projects.find(project => 
    (project.slug && project.slug === slug) || 
    project.id.toString() === slug
  )
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug
  
  console.log('ProjectDetailPage - Received slug:', slug)
  console.log('ProjectDetailPage - params object:', params)
  
  const project = getProjectBySlug(slug)
  console.log('ProjectDetailPage - Found project:', project ? project.title : 'Not found')

  if (!project) {
    return <div className="min-h-screen bg-cyber-bg pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-text-light mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
        <a href="/portfolio" className="px-6 py-3 bg-gradient-neon text-white font-semibold rounded-xl neon-glow-blue">
          Back to Portfolio
        </a>
      </div>
    </div>
  }

  return (
    <ProjectDetailClient project={project} />
  )
}

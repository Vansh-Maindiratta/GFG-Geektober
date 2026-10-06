import type { Project } from '@/types'
import { GithubIcon } from '@/components/ui/BrandIcons'

/**
 * Project Card — strict 4 items:
 * 1. Project Title
 * 2. Project Description
 * 3. Tech Stack
 * 4. GitHub Link
 */
export function ProjectCard({ project }: { project: Project; index?: number }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-line bg-coal/80 p-5 transition-colors hover:border-brand/40">
      <div>
        <h3 className="text-xl font-bold tracking-tight text-ink">{project.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted line-clamp-3">
          {project.tagline || project.description}
        </p>
        <p className="mt-4 font-mono text-xs font-medium text-mint">
          {project.technologies.join(' · ')}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-line">
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.03] text-sm font-semibold text-ink transition hover:border-brand/50 hover:text-mint"
        >
          <GithubIcon className="size-4" />
          <span>GitHub Repository</span>
        </a>
      </div>
    </article>
  )
}

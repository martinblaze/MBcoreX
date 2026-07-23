"use client"

import { useMemo, useState } from "react"
import { FolderOpen } from "lucide-react"

import { Grid } from "@/components/layout/grid"
import { Chip } from "@/components/feedback/chip"
import { EmptyState } from "@/components/feedback/states"
import { PortfolioCard } from "@/components/cards/portfolio-card"
import { StaggerItem, Reveal } from "@/components/motion/reveal"
import type { PortfolioProject } from "@/content/portfolio"

export function PortfolioFilterGrid({ projects }: { projects: PortfolioProject[] }) {
  const tags = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.tags))), [projects])
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag ? projects.filter((project) => project.tags.includes(activeTag)) : projects

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter portfolio by category">
        <button type="button" onClick={() => setActiveTag(null)} className="contents">
          <Chip selected={activeTag === null} className="cursor-pointer">
            All
          </Chip>
        </button>
        {tags.map((tag) => (
          <button key={tag} type="button" onClick={() => setActiveTag(tag)} className="contents">
            <Chip selected={activeTag === tag} className="cursor-pointer">
              {tag}
            </Chip>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No projects in this category yet" icon={FolderOpen} />
      ) : (
        <Reveal stagger>
          <Grid cols={3}>
            {filtered.map((project) => (
              <StaggerItem key={project.slug}>
                <PortfolioCard
                  title={project.title}
                  category={project.category}
                  description={project.summary}
                  image={project.image}
                  logo={project.logo}
                  href={`/portfolio/${project.slug}`}
                />
              </StaggerItem>
            ))}
          </Grid>
        </Reveal>
      )}
    </div>
  )
}

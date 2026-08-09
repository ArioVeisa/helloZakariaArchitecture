"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard from "@/components/project-card";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="wrap pb-24 md:pb-32">
      <div className="flex flex-wrap gap-2 border-y border-ink/10 py-4" role="tablist" aria-label="Filter projects by category">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "label-xs px-4 py-2 transition-colors",
              filter === cat ? "bg-ink text-paper" : "text-stone hover:text-ink"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, ratio = "aspect-[4/3]" }: { project: Project; ratio?: string }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className={`relative ${ratio} overflow-hidden bg-stone/20`}>
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="label-xs absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 bg-night/70 px-3 py-2 text-paper opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Project <ArrowRight className="size-3.5" aria-hidden />
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl">{project.title}</h3>
          <p className="label-xs mt-1 text-stone">{project.category}</p>
        </div>
        <p className="text-right text-xs text-stone">
          {project.location}
          <br />
          {project.year}
        </p>
      </div>
    </Link>
  );
}

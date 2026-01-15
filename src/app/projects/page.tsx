"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = projects.filter((project) =>
    selectedTags.length === 0
      ? true
      : project.tags.some((tag) => selectedTags.includes(tag))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          Where ideas turn into functional, user-focused digital solutions.
        </p>
      </motion.div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleTag(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.slug} variants={item}>
            <Card className="h-full flex flex-col group overflow-hidden relative">
              <div className="transition filter group-hover:blur-lg">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span className="text-lg">{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-teal-400/40 via-blue-500/40 to-violet-500/40">
                <div className="flex gap-3">
                  <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title}`}>
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                      <Plus className="h-5 w-5 text-black" />
                    </Button>
                  </Link>
                  <Link
                    href={project.link || `/projects/${project.slug}`}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    aria-label={`Preview ${project.title}`}
                  >
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                      <LinkIcon className="h-5 w-5 text-black" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

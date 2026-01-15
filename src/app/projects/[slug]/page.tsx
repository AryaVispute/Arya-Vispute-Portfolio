import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, ArrowLeft } from "lucide-react";

type Params = Promise<{ slug: string }>;

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="container py-12">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <div className="flex gap-2">
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="rounded-full bg-gradient-to-br from-teal-400/40 via-[rgb(59_130_246/0.4)] to-violet-500/40 hover:bg-gradient-to-br hover:from-teal-400/60 hover:via-[rgb(59_130_246/0.6)] hover:to-violet-500/60">
                <LinkIcon className="mr-2 h-4 w-4" />
                Live
              </Button>
            </Link>
          )}
          <Link href="/projects">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              {project.overview || project.description}
            </p>
          </CardContent>
        </Card>

        {project.features && project.features.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.techStack && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(project.techStack).map(([section, items]) => {
                  if (!items || items.length === 0) return null;
                  const title =
                    section === "frontend" ? "Frontend" :
                    section === "backend" ? "Backend" :
                    section === "design" ? "Design & Prototyping" :
                    section === "database" ? "Database" :
                    section === "auth" ? "Authentication" :
                    section === "deployment" ? "Deployment" :
                    section === "apis" ? "APIs" :
                    section === "ai" ? "AI Service" :
                    section === "ml" ? "ML/NLP" :
                    section === "blockchain" ? "Blockchain" :
                    section;
                  return (
                    <div key={section}>
                      <h3 className="text-sm font-semibold mb-2">{title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((it) => (
                          <span key={it} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800">
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {(project.focus) && (
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">{project.focus}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

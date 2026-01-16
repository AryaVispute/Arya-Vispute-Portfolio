"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  BadgeCheck,
  BarChart3,
  PenTool,
  GitBranch,
  Cloud,
  Database,
  Code,
  Palette,
  Layers,
} from "lucide-react";

const certificates = [
  {
    title: "Data Analytics: Get Started with Copilot in Power BI",
    issuer: "Microsoft",
    issued: "July 2025",
    focus: "Data Analytics, Power BI, AI-assisted insights",
    url: "https://learn.microsoft.com/en-us/users/aryavispute-1817/achievements/9ybd2mgu?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "Figma for User Interface and User Experience (UI/UX) Design",
    issuer: "Udemy",
    issued: "June 2025",
    focus: "UI/UX Design, Prototyping, Wireframing, Figma",
    url: "https://www.udemy.com/certificate/UC-a945ccd9-2fe3-4f5c-8ec8-de6c9fb6f7c8/",
  },
  {
    title: "From Relational Model (SQL) to MongoDB’s Document Model",
    issuer: "MongoDB",
    issued: "June 2025",
    focus: "SQL, NoSQL, Data Modeling, MongoDB",
    url: "https://www.credly.com/badges/315c6d34-08f4-47f1-8cf2-ea5f89cd75d0/linked_in_profile",
  },
  {
    title: "Git, GitLab & GitHub Fundamentals for Software Developers",
    issuer: "Udemy",
    issued: "June 2025",
    focus: "Version Control, Git, GitHub, GitLab",
    url: "https://www.udemy.com/certificate/UC-fc6b92f4-03f7-42e7-b923-f4ddc9b95efe/",
  },
  {
    title: "Mastering AI on AWS: AWS Certified AI Practitioner (Training)",
    issuer: "Amazon Web Services (AWS)",
    issued: "April 2025",
    focus: "AI on Cloud, AWS, Machine Learning Concepts",
    url: "https://www.udemy.com/certificate/UC-ac18324c-59c4-43dc-93ad-0a893cb64bf3/",
  },
  {
    title: "Goldman Sachs Software Engineering Job Simulation",
    issuer: "Goldman Sachs",
    issued: "December 2024",
    focus: "Software Development, Engineering Practices",
    url: "/goldman.pdf",
  },
  {
    title: "Accenture Coding: Development & Advanced Engineering Job Simulation",
    issuer: "Accenture",
    issued: "November 2024",
    focus: "Software Development, Problem Solving",
    url: "/accenture.pdf",
  },
  {
    title: "Cisco Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    issued: "July 2024",
    focus: "SQL, Data Analysis, Oracle Database, Data Mining",
    url: "https://www.credly.com/badges/49160983-007b-4166-bcd2-6d0f8386df2e/linked_in_profile",
  },
  {
    title: "Foundations of Web Development: CSS, Bootstrap, JS, React",
    issuer: "Udemy",
    issued: "June 2025",
    focus: "Web Development, CSS, JavaScript, Bootstrap, React",
    url: "https://www.udemy.com/certificate/UC-9509b7cb-3384-41e4-9ae5-7551d2088ff9/",
  },
];

const achievements = [
  {
    title: "First Place – Cryptex UI/UX & Prototyping Competition",
    organizer: "CSI FCRIT",
    description:
      "Secured First Place recognized for creativity, usability, and design execution, reflecting growing expertise in UI/UX, prototyping, and frontend-focused thinking.",
    icon: Award,
    slug: "pasta-and-pour",
  },
  {
    title: "Selected – Smart India Hackathon (Internal Round)",
    organizer: "Smart India Hackathon",
    description:
      "Selected in the internal round, showcasing problem-solving ability, teamwork, and innovative thinking in a competitive national-level hackathon environment.",
    icon: BadgeCheck,
    slug: "travora",
  },
];

function SkillIcon({ label }: { label: string }) {
  const key = label.trim().toLowerCase();
  const size = 14;
  if (key.includes("data") || key.includes("analytics") || key.includes("power bi")) return <BarChart3 className="h-3.5 w-3.5" />;
  if (key.includes("ui/ux") || key.includes("design") || key.includes("figma")) return <PenTool className="h-3.5 w-3.5" />;
  if (key.includes("version") || key.includes("git")) return <GitBranch className="h-3.5 w-3.5" />;
  if (key.includes("aws") || key.includes("cloud")) return <Cloud className="h-3.5 w-3.5" />;
  if (key.includes("sql") || key.includes("mongodb") || key.includes("database")) return <Database className="h-3.5 w-3.5" />;
  if (key.includes("javascript") || key.includes("react") || key.includes("web")) return <Code className="h-3.5 w-3.5" />;
  if (key.includes("palette")) return <Palette className="h-3.5 w-3.5" />;
  return <Layers className="h-3.5 w-3.5" />;
}

function organizerLogoPath(issuer: string) {
  const key = issuer.toLowerCase();
  if (key.includes("microsoft")) return "/org-logos/microsoft.png";
  if (key.includes("udemy")) return "/org-logos/udemy.png";
  if (key.includes("mongodb")) return "/org-logos/mongodb.png";
  if (key.includes("amazon web services") || key.includes("aws")) return "/org-logos/aws.png";
  if (key.includes("goldman")) return "/org-logos/goldman-sachs.png";
  if (key.includes("accenture")) return "/org-logos/accenture.png";
  if (key.includes("cisco")) return "/org-logos/cisco.png";
  return "";
}

function OrganizerIcon({ issuer }: { issuer: string }) {
  const src = organizerLogoPath(issuer);
  if (!src) return null;
  return (
    <span className="inline-flex items-center justify-center">
      <Image
        src={src}
        alt={issuer}
        width={22}
        height={22}
        className="object-contain"
      />
    </span>
  );
}

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

export default function CertificatesPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Certificates & Achievements</h1>
        <p className="mt-4 text-muted-foreground max-w-[800px]">
          Professional certifications and milestones aligned with design, development, and data.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-8 md:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Certificates
          </h2>
          <div className="space-y-4">
            {certificates.map((c) => (
              <motion.div key={c.title} variants={item} className="group rounded-2xl border p-[2px] hover:bg-gradient-to-br hover:from-teal-400/40 hover:via-[rgb(59_130_246/0.4)] hover:to-violet-500/40 transition">
                <div className="rounded-2xl bg-white dark:bg-black">
                  <Card className="h-full border-none shadow-none">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-3">
                        <span className="flex items-center gap-2">
                          <OrganizerIcon issuer={c.issuer} />
                          <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {c.title}
                          </a>
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Issuer: {c.issuer}</p>
                        <p className="text-sm text-muted-foreground">Issued: {c.issued}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {c.focus.split(",").map((t) => (
                          <span key={t} className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-muted">
                            <SkillIcon label={t} />
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((a) => (
              <motion.div key={a.title} variants={item} className="group rounded-2xl border p-[2px] transition">
                <div className="rounded-2xl bg-white dark:bg-black relative overflow-hidden">
                  <Card className="h-full border-none shadow-none">
                    <div className="transition filter group-hover:blur-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-3">
                          {a.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">Organizer: {a.organizer}</p>
                        <p className="text-sm">{a.description}</p>
                      </CardContent>
                    </div>
                    <a
                      href={`/achievements/${a.slug}`}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-teal-400/40 via-blue-500/40 to-violet-500/40"
                      aria-label={`Open ${a.title}`}
                    >
                      <span className="px-4 py-2 rounded-full bg-white/90 text-black font-medium">
                        Learn More
                      </span>
                    </a>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}

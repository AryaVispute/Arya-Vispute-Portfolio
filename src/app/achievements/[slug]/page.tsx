""

import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Trophy } from "lucide-react";

type Params = Promise<{ slug: string }>;

const achievements = [
  {
    slug: "pasta-and-pour",
    title: "Achievement – Pasta & Pour | Café Website UI/UX",
    organizer: "CSI FCRIT",
    overview:
      "A café website product design inspired by Italian comfort food and slow coffee culture, focusing on warm visuals, visual storytelling, and intuitive navigation to reflect a cozy brand identity.",
    achievement:
      "First Place – Cryptex UI/UX & Prototyping Competition. Awarded First Place in the Cryptex UI/UX & Prototyping Competition organized by CSI FCRIT, recognizing the project for strong visual identity, thoughtful UX decisions, and effective prototyping.",
    techStack: ["UI/UX Design", "Figma", "Wireframing", "Prototyping", "Typography", "Color Theory"],
    focus:
      "Warm visuals, storytelling, and intuitive navigation for café branding and user engagement.",
    prototype: "https://www.figma.com/proto/yhUpD67GxLJLVCOgfEdgYP/Pasta---Pour---Urban-Cafe-Website-UI",
    certificateUrl: "/certificate/pasta-and-pour",
  },
  {
    slug: "travora",
    title: "Achievement – TRAVORA | Smart Tourist Safety & Monitoring System",
    organizer: "Smart India Hackathon (SIH)",
    overview:
      "TRAVORA is an AI-powered travel safety and assistance platform designed to make tourism smarter, safer, and more personalized by combining AI, Blockchain, and Geo-fencing.",
    achievement:
      "Selected – Smart India Hackathon (SIH) 2025 Internal Round. The project successfully cleared the Internal Round of Smart India Hackathon (SIH) 2025, highlighting its real-world impact, innovation, and strong problem-solving approach in the tourism safety domain.",
    highlights: [
      "AI-based safety insights and anomaly detection",
      "Blockchain-backed digital tourist identity",
      "Geo-fencing for restricted and high-risk areas",
      "Emergency response and real-time dashboards",
    ],
    focus:
      "Building a scalable, intelligent, and safety-first travel ecosystem through emerging technologies.",
    prototype: "https://www.figma.com/proto/3iDTfeUVGJDiHPteLTD3HL/TRAVORA-SIH-rough-prototype",
    certificateUrl: "/certificate/travora",
  },
];

export default async function AchievementDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const achievement = achievements.find((a) => a.slug === slug);
  if (!achievement) return notFound();

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          {achievement.title}
        </h1>
        <p className="mt-2 text-muted-foreground">Organizer: {achievement.organizer}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">{achievement.overview}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">{achievement.achievement}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{achievement.highlights ? "Key Highlights" : "Tech Stack"}</CardTitle>
          </CardHeader>
          <CardContent>
            {achievement.highlights ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                {achievement.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-wrap gap-2">
                {achievement.techStack?.map((t: string) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">{achievement.focus}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex gap-3">
        <Link
          href={achievement.prototype}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          style={{ ["--clr" as any]: "#3b82f6" }}
        >
          <span className="button__icon-wrapper">
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon-svg"
              width="10"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              viewBox="0 0 14 15"
              fill="none"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon-svg button__icon-svg--copy"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          View My Work
        </Link>

        {achievement.certificateUrl ? (
          <Link
            href={achievement.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            style={{ ["--clr" as any]: "#3b82f6" }}
          >
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            View Certificate
          </Link>
        ) : (
          <span
            className="button opacity-60 pointer-events-none"
            style={{ ["--clr" as any]: "#3b82f6" }}
          >
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            View Certificate
          </span>
        )}
      </div>
    </div>
  );
}

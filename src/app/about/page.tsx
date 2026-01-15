"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Coffee, Rocket, ExternalLink, Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutSections = [
  {
    title: "Hello World!",
    icon: <Heart className="h-5 w-5 text-primary" />,
    content: "I’m Arya, a 19-year-old computer engineering student who enjoys blending design, development, and AI to build meaningful digital experiences. I love taking an idea from concept to execution—starting with thoughtful UI/UX design, developing it into a functional web application, and enhancing it using AI-driven features. I’m constantly exploring new tools and technologies to improve both how products look and how they work.",
  },
  {
    title: "What I Do",
    icon: <Rocket className="h-5 w-5 text-primary" />,
    content: "I specialize in web development with a strong focus on UI/UX design and AI-assisted solutions. I build modern, responsive applications using technologies like React and Next.js, design intuitive interfaces using Figma and Canva, and leverage AI tools and APIs to improve productivity, user experience, and problem-solving. My approach combines clean design, efficient code, and intelligent features to create user-friendly and impactful applications.",
  },
];

const portfolioProjects = [
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.",
    image: "https://bayburt.lu/portfolio/portfolio.png",
    liveUrl: "https://portfolio.bayburt.lu",
    githubUrl: "https://github.com/byigitt/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    title: "Soulana",
    description: "Soulana is a web application that allows users to donate secure, fast and transparently using blockchain technology. Ostim Solana Hackathon, 1st place.",
    image: "https://bayburt.lu/portfolio/soulana.png",
    liveUrl: "https://cyberia-frontend.vercel.app",
    githubUrl: "https://github.com/wearesoulana/soulana-frontend",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    title: "imatil",
    description: "imatil is a modern, browser-based file conversion tool built with Next.js 15 that enables users to convert media files directly in their browser using WebAssembly technology.",
    image: "https://bayburt.lu/portfolio/imatil.png",
    liveUrl: "https://i.bayburt.lu",
    githubUrl: "https://github.com/byigitt/imatil",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebAssembly", "Shadcn/UI", "FFMPEG"]
  },
  {
    title: "cankaya.chat",
    description: "cankaya.chat is a modern, browser-based chat application built with Next.js 15 that enables users to chat with each other anonymously using WebSocket technology.",
    image: "https://bayburt.lu/portfolio/cankayachat.png",
    liveUrl: "https://cankaya.chat",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSocket", "PWA"]
  },
  {
    title: "smartmove",
    description: "smartmove is an AI-powered passenger analysis system for the Ankara Metro network that combines real-time passenger counting using YOLOv8 object detection and predictive analytics to forecast crowd density. Ostim AI Competition, 2nd place.",
    image: "https://bayburt.lu/portfolio/smartmove.png",
    githubUrl: "https://github.com/byigitt/smartmove",
    tags: ["Python", "Numpy", "Pandas", "Scikit-learn", "Seaborn", "YOLOv8", "Shadcn/UI"]
  },
  {
    title: "Flashy",
    description: "Flashy is a modern, intuitive flashcard application built with Next.js 15 that helps users study effectively through digital flashcards. Features include group organization, study mode with shuffle functionality, and smooth animations.",
    image: "https://bayburt.lu/portfolio/flashy.png", 
    liveUrl: "https://flashy-byigitt.vercel.app/",
    githubUrl: "https://github.com/byigitt/flashy",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"]
  },
  {
    title: "Suncore",
    description: "Suncore is an innovative open-source audio transformation platform inspired by nightcore.studio, designed to help users create nightcore versions of their favorite music. Features include real-time playback speed adjustment, reverb control, bass boost, and SoundCloud API integration.",
    image: "https://bayburt.lu/portfolio/suncore.png",
    liveUrl: "https://suncore.vercel.app",
    githubUrl: "https://github.com/byigitt/suncore",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Tone.js"]
  },
  {
    title: "Tourist AI Planner",
    description: "Tourist AI Planner is a web application that helps users plan their trips by providing personalized recommendations for destinations, activities, and accommodations. Did my internship here. ",
    image: "https://bayburt.lu/portfolio/tourist.png",
    liveUrl: "https://touristapplication.com",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "StarSalesInv",
    description: "Star Sales & Investment is committed to delivering high-quality products at competitive prices to businesses of all sizes.",
    image: "https://bayburt.lu/portfolio/starsales.png",
    liveUrl: "https://starsalesinv.com",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Wholesale Template",
    description: "Wholesale Template is a website template for wholesale businesses.",
    image: "https://bayburt.lu/portfolio/template.png",
    liveUrl: "https://bayburt.lu/template1",
    tags: ["HTML", "CSS", "JavaScript"],
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Caffeine-fueled coder turning ideas into reality
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {aboutSections.map((section) => (
          <motion.div key={section.title} variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex items-center justify-center"
      >
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-6 pl-6 pr-2 py-2 border-2 border-black dark:border-white rounded-2xl bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:bg-black dark:hover:bg-white active:scale-95"
        >
          <span className="text-base font-medium text-black dark:text-white transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:via-[rgb(59_130_246/0.4)] group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent">
            Download Resume
          </span>
          <span className="flex items-center justify-center bg-gradient-to-br from-teal-400 via-[rgb(59_130_246/0.4)] to-violet-500 p-2 rounded-lg transition-transform duration-300 group-hover:rotate-45">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-black dark:text-white transition-transform duration-300 group-hover:-rotate-45"
            >
              <path
                fill="currentColor"
                d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1"
              />
            </svg>
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-center"
      >
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Coffee className="h-5 w-5" />
          <p>Powered by Monster Energy and curiosity</p>
        </div>
      </motion.div>
    </div>
  );
} 

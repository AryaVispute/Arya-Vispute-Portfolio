"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Coffee, Rocket } from "lucide-react";
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

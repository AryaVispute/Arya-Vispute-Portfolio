"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, KeyRound } from "lucide-react";
import { SpotifyNowPlaying } from "@/components/spotify-now-playing";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScannerLoader } from "@/components/ui/scanner-loader";

export function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-8 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-3 text-center mb-4"
      >
        <Avatar className="h-32 w-32 border-4 border-primary shadow-lg">
          <AvatarImage src="/profile.jpeg" alt="Arya Vispute" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-black via-gray-700 to-gray-400 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent py-2 px-4">
          Arya Vispute
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl"
        >
          A dedicated software engineering student passionate about exploring new technologies
          and developing innovative solutions.
        </motion.p>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 justify-center my-4"
      >
        <Link href="/projects">
          <Button size="lg" className="group">
            View Projects
            <motion.span
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="outline"
            size="lg"
            className="transition-colors hover:bg-gradient-to-br hover:from-teal-400/40 hover:via-[rgb(59_130_246/0.4)] hover:to-violet-500/40 hover:border-transparent"
          >
            Get in Touch
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=""
      >
        <ScannerLoader />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SpotifyNowPlaying />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4"
      >
        <Link href="https://github.com/aryavispute" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/aryavispute" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="mailto:aryavispute06@gmail.com">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <FileText className="h-5 w-5" />
            <span className="sr-only">Resume</span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check, Phone } from "lucide-react";
import Link from "next/link";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("aryavispute06@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { }
  };
  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText("7304380022");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 1500);
    } catch { }
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          Open to collaborations, internships, and exciting projects. Let&apos;s connect and build something great.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        {/* Custom Card with Border Glow Effect */}
        <div className="blob-card-wrapper relative p-[3px] rounded-[14px] overflow-hidden">
          {/* Rotating gradient border */}
          <div className="absolute inset-0 z-[1] animate-[border-rotate_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,transparent_30%,#14b8a6,#3b82f6,#8b5cf6,transparent_70%,transparent)]" />

          {/* Card background */}
          <div className="relative z-[2] bg-white dark:bg-black rounded-[12px] overflow-hidden">
            <CardHeader>
              <CardTitle className="text-center">Connect with Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="https://github.com/AryaVispute" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex items-center justify-center gap-2 rounded-xl border p-4 transition-colors hover:bg-gradient-to-br hover:from-teal-400/30 hover:via-[rgb(59_130_246/0.3)] hover:to-violet-500/30">
                    <Github className="h-5 w-5" />
                    <span className="font-medium">GitHub</span>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/arya-vispute-b8a13b313/" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex items-center justify-center gap-2 rounded-xl border p-4 transition-colors hover:bg-gradient-to-br hover:from-teal-400/30 hover:via-[rgb(59_130_246/0.3)] hover:to-violet-500/30">
                    <Linkedin className="h-5 w-5" />
                    <span className="font-medium">LinkedIn</span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2 border">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">7304380022</span>
                  <Button variant="ghost" size="sm" onClick={copyPhone} className="rounded-full">
                    {copiedPhone ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2 border">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">aryavispute06@gmail.com</span>
                  <Button variant="ghost" size="sm" onClick={copyEmail} className="rounded-full">
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Typically responds within 24 hours</p>
              </div>
            </CardContent>
          </div>
        </div>

        {/* Border rotation animation */}
        <style jsx global>{`
          @keyframes border-rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          .blob-card-wrapper::before {
            content: '';
            position: absolute;
            inset: -50%;
            z-index: 0;
            background: conic-gradient(
              from 0deg,
              transparent,
              transparent 30%,
              #14b8a6,
              #3b82f6,
              #8b5cf6,
              transparent 70%,
              transparent
            );
            animation: border-rotate 4s linear infinite;
          }
        `}</style>
      </motion.div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-10">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2" />
          <div className="flex gap-4">
            <Link
              href="https://github.com/aryavispute"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-background p-2 hover:bg-primary/10"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/aryavispute"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-background p-2 hover:bg-primary/10"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:aryavispute06@gmail.com"
              className="rounded-2xl bg-background p-2 hover:bg-primary/10"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-sm text-foreground">
            © {currentYear} Arya Vispute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 

"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScannerLoader() {
    const words = ["Creator", "Builder", "Innovator"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="flex justify-center items-center py-2">
            <div
                className={cn(
                    "loader relative text-[40px] font-semibold italic text-black dark:text-[rgb(242,255,240)] max-w-fit font-['Mine']",
                    "hover:text-gray-700 dark:hover:text-[#fcffdf]"
                )}
            >
                <span
                    className="block animate-[cut_2s_infinite] transition-[1s_cubic-bezier(0.175,0.885,0.32,1.275)]"
                >
                    {words[currentWordIndex]}
                </span>

                {/* After element - scanner line */}
                <div
                    className={cn(
                        "absolute content-[''] w-full h-[6px] rounded-[4px] top-0 left-0 z-0",
                        "bg-gradient-to-r from-teal-400 via-[rgb(59_130_246/0.4)] to-violet-500 blur-[10px] animate-[scan_2s_infinite]",
                        "transition-[1s_cubic-bezier(0.175,0.885,0.32,1.275)]"
                    )}
                />

                {/* Before element - scanner line core */}
                <div
                    className={cn(
                        "absolute content-[''] w-full h-[5px] rounded-[4px] top-0 left-0 z-[1]",
                        "bg-gradient-to-r from-teal-400 via-[rgb(59_130_246/0.4)] to-violet-500 opacity-90 animate-[scan_2s_infinite]",
                        "transition-[1s_cubic-bezier(0.175,0.885,0.32,1.275)]"
                    )}
                />

                <style jsx global>{`
          @keyframes scan {
            0% { top: 0px; }
            25% { top: 44px; }
            50% { top: 0px; }
            75% { top: 44px; }
          }
          @keyframes cut {
            0% { clip-path: inset(0 0 0 0); }
            25% { clip-path: inset(100% 0 0 0); }
            50% { clip-path: inset(0 0 100% 0); }
            75% { clip-path: inset(0 0 0 0); }
          }
        `}</style>
            </div>
        </div>
    );
}

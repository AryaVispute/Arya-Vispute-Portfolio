"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const routes = [
    "/",
    "/about",
    "/skills",
    "/education",
    "/experience",
    "/projects",
    "/contact",
];

export function PageNavigation() {
    const pathname = usePathname();
    const router = useRouter();

    const currentIndex = routes.indexOf(pathname);
    const isFirstPage = currentIndex === 0;
    const isLastPage = currentIndex === routes.length - 1;

    const goToPrevious = () => {
        if (currentIndex > 0) {
            router.push(routes[currentIndex - 1]);
        }
    };

    const goToNext = () => {
        if (currentIndex < routes.length - 1) {
            router.push(routes[currentIndex + 1]);
        }
    };

    // Don't render if not on a known route
    if (currentIndex === -1) return null;

    return (
        <>
            {/* Previous Button - Left Side */}
            <AnimatePresence>
                {!isFirstPage && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:block"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goToPrevious}
                            className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-gradient-to-br hover:from-teal-400/40 hover:via-[rgb(59_130_246/0.4)] hover:to-violet-500/40 hover:border-transparent transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft className="h-5 w-5" />
                            <span className="sr-only">Previous Page</span>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Next Button - Right Side */}
            <AnimatePresence>
                {!isLastPage && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:block"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goToNext}
                            className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-gradient-to-br hover:from-teal-400/40 hover:via-[rgb(59_130_246/0.4)] hover:to-violet-500/40 hover:border-transparent transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight className="h-5 w-5" />
                            <span className="sr-only">Next Page</span>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

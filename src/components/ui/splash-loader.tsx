'use client';

import { useEffect, useState } from 'react';
import './splash-loader.css';

export function SplashLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Arya.building()';

    useEffect(() => {
        // Typing animation
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Type one character every 100ms

        // Hide loader after typing completes + 4 seconds
        // Typing takes ~1.5s (15 chars × 100ms), so total = 5.5s
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5500);

        return () => {
            clearInterval(typingInterval);
            clearTimeout(timer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="splash-screen">
            <div className="splash-content">
                <div className="splash-text-animated">
                    {displayText}
                    <span className="cursor-blink">|</span>
                </div>
            </div>
        </div>
    );
}

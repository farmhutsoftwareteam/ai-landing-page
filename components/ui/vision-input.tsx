'use client';

import { useState, useEffect, FormEvent, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

export function VisionInput() {
    const [inputValue, setInputValue] = useState('');
    const [placeholderText, setPlaceholderText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const examplePrompts = [
        "Build an Airbnb clone",
        "Build a Spotify but for voice notes",
        "Build a TikTok for AI videos",
        "Create a food delivery app",
        "Design a social network for book lovers"
    ];

    useEffect(() => {
        if (isFocused) return;

        let currentPromptIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 70; // Speed in milliseconds
        let pauseDuration = 1500; // Pause duration at the end of each prompt

        const typeText = () => {
            if (!isTyping) return;

            const currentPrompt = examplePrompts[currentPromptIndex];

            if (isDeleting) {
                // Deleting text
                setPlaceholderText(current => current.substring(0, current.length - 1));
                currentCharIndex--;

                // When deletion is complete, move to next prompt
                if (currentCharIndex === 0) {
                    isDeleting = false;
                    currentPromptIndex = (currentPromptIndex + 1) % examplePrompts.length;
                }

                typingSpeed = 30; // Faster when deleting
            } else {
                // Typing text
                setPlaceholderText(currentPrompt.substring(0, currentCharIndex + 1));
                currentCharIndex++;

                // When prompt is complete, pause then start deleting
                if (currentCharIndex === currentPrompt.length) {
                    isDeleting = false;
                    typingSpeed = pauseDuration;
                    setTimeout(() => {
                        isDeleting = true;
                    }, pauseDuration);
                } else {
                    typingSpeed = 70 + Math.random() * 50; // Varied typing speed
                }
            }
        };

        const typingInterval = setInterval(typeText, typingSpeed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [isTyping, isFocused]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Future functionality to process input
        console.log('User input:', inputValue);
        setInputValue('');

        // Return focus to input
        inputRef.current?.focus();
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <Input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false);
                    if (!inputValue) {
                        setIsTyping(true);
                    }
                }}
                placeholder={isFocused ? "Describe your vision..." : placeholderText}
                className="w-full h-16 px-6 py-4 bg-black border-white/20 border font-cormorant text-4xl font-normal text-white placeholder:text-white/90 placeholder:font-semibold focus:bg-black focus:border-white/40 leading-tight"
            />
            <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 h-12 w-12"
            >
                <SendIcon className="h-6 w-6" />
            </Button>
        </form>
    );
} 
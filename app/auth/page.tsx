'use client';

import { Button } from "../../components/ui/button";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signInWithProvider } from "../../backend/auth";

function AuthContent() {
    const searchParams = useSearchParams();
    const [isSignUp, setIsSignUp] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Get the mode from URL parameters
        const mode = searchParams.get('mode');
        if (mode === 'login') {
            setIsSignUp(false);
        } else if (mode === 'signup') {
            setIsSignUp(true);
        }
    }, [searchParams]);

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            await signInWithProvider("google");
        } catch (error) {
            console.error("Google sign in error:", error);
            setIsLoading(false);
        }
    };

    const handleGithubSignIn = async () => {
        setIsLoading(true);
        try {
            await signInWithProvider("github");
        } catch (error) {
            console.error("GitHub sign in error:", error);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md">
                <Link href="/" className="font-cormorant text-3xl font-normal mb-12 block text-center">jt</Link>

                <h1 className="font-cormorant text-4xl font-normal mb-2 text-center">
                    {isSignUp ? "Create your account" : "Welcome back"}
                </h1>
                <p className="font-cormorant text-xl text-white/70 mb-10 text-center">
                    {isSignUp
                        ? "Sign up to start building with Juliet"
                        : "Log in to continue your journey with Juliet"}
                </p>

                <div className="space-y-6">
                    <Button
                        className="w-full bg-white text-black hover:bg-white/90 font-cormorant text-xl font-normal h-16 flex items-center justify-center gap-3 transition duration-200"
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5">
                            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                        {isSignUp ? "Sign up with Google" : "Log in with Google"}
                    </Button>

                    <Button
                        className="w-full bg-black text-white border border-white/20 hover:bg-white/10 font-cormorant text-xl font-normal h-16 flex items-center justify-center gap-3 transition duration-200"
                        onClick={handleGithubSignIn}
                        disabled={isLoading}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5 fill-current">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                        {isSignUp ? "Sign up with GitHub" : "Log in with GitHub"}
                    </Button>
                </div>

                <div className="mt-10 text-center font-cormorant text-lg">
                    <p className="text-white/60">
                        By continuing, you agree to our <br />
                        <Link href="/terms" className="text-white underline hover:text-white/80 transition duration-200">Terms of Service</Link> and <Link href="/privacy" className="text-white underline hover:text-white/80 transition duration-200">Privacy Policy</Link>
                    </p>
                </div>

                <div className="mt-8 text-center font-cormorant text-lg">
                    {isSignUp ? (
                        <p>
                            Already have an account?{" "}
                            <button
                                onClick={() => setIsSignUp(false)}
                                className="text-white underline hover:text-white/80 transition duration-200"
                            >
                                Log in
                            </button>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{" "}
                            <button
                                onClick={() => setIsSignUp(true)}
                                className="text-white underline hover:text-white/80 transition duration-200"
                            >
                                Sign up
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function AuthPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="font-cormorant text-2xl">Loading...</div>
            </div>
        }>
            <AuthContent />
        </Suspense>
    );
}

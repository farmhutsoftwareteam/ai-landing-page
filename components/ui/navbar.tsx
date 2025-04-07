'use client';

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
    const router = useRouter();

    const navigateToAuth = (isSignUp: boolean) => {
        // Navigate to auth page with state in query params
        router.push(`/auth?mode=${isSignUp ? 'signup' : 'login'}`);
    };

    return (
        <nav className="w-full fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-black text-white z-50">
            <div className="font-cormorant text-3xl font-normal">
                <Link href="/">jt</Link>
            </div>

            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/10 font-cormorant text-lg font-normal transition duration-200"
                    onClick={() => navigateToAuth(false)}
                >
                    Login
                </Button>
                <Button
                    className="bg-white text-black hover:bg-white/90 font-cormorant text-lg font-semibold px-6 border-none transition duration-200"
                    onClick={() => navigateToAuth(true)}
                >
                    Sign up
                </Button>
            </div>
        </nav>
    );
} 
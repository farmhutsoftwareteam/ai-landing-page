import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export async function signInWithProvider(provider: "google" | "github") {
  const supabase = createClient();

  const redirectTo =
    process.env.NEXT_PUBLIC_URL || new URL(window.location.href).origin;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${redirectTo}/auth/callback`,
    },
  });

  if (data?.url) {
    redirect(data.url);
  }

  return { error };
}

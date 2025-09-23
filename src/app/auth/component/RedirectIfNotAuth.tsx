"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/Redux/store";

export default function RedirectIfNotAuth() {
  const token = useAppSelector((state) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (token === null) {
      // Redirect immediately when token is null
      router.replace("/auth");
    }
  }, [token, router]);

  return null;
}

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/Redux/store";

export default function RedirectIfAuth() {
  const token = useAppSelector((state) => state.auth.token);
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated && token) {
      router.push("/services");
    }
  }, [hydrated, token, router]);

  return null;
}

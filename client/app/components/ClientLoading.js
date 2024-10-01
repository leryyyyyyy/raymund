// app/components/ClientLoading.js
"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function ClientLoading({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Intercept route changes manually
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setTimeout(() => setLoading(false), 500); // Add a 500ms delay for visibility
    };

    const originalPush = router.push;
    const originalReplace = router.replace;

    router.push = async (...args) => {
      handleStart();
      await originalPush(...args);
      handleComplete();
    };

    router.replace = async (...args) => {
      handleStart();
      await originalReplace(...args);
      handleComplete();
    };

    return () => {
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function FooterWrapper() {
  const pathname = usePathname();
  
  // Hide footer on exam runner pages
  if (pathname?.startsWith("/exam/")) {
    return null;
  }

  return <Footer />;
}

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-700" />
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
            GYS Hazırlık
          </Link>
        </div>
        
        {/* Right aligned nav items */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 ml-auto">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Anasayfa
          </Link>
          <Link href="/contact" className="hover:text-blue-700 transition-colors">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}

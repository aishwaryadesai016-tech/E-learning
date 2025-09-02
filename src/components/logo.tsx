import { Cpu } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/courses" className="flex items-center gap-3 group">
      <div className="bg-primary/20 text-primary p-2.5 rounded-lg group-hover:bg-primary/30 transition-colors">
        <Cpu className="h-6 w-6" />
      </div>
      <span className="font-headline text-lg font-semibold group-hover:text-primary transition-colors">
        E-learning recommendation system
      </span>
    </Link>
  );
}

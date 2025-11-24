
import { Cpu } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/courses" className="flex items-center gap-2 group">
      <div className="bg-primary/20 text-primary p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
        <Cpu className="h-5 w-5" />
      </div>
      <span className="font-headline text-base font-medium group-hover:text-primary transition-colors">
        E-learning recommendation system
      </span>
    </Link>
  );
}

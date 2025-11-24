
'use client'

import Link from "next/link";
import { Home, LayoutDashboard, User as UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserInfo } from "./user-info";
import { Logo } from "./logo";

const navLinks = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/courses", icon: Home, label: "All Courses" },
    { href: "/profile", icon: UserIcon, label: "Profile" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full max-h-screen flex-col gap-2 bg-card text-card-foreground">
            {/* Header for Mobile Sheet */}
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Logo />
            </div>
            
            {/* Navigation for both Mobile and Desktop */}
            <div className="flex-1 overflow-y-auto">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            (pathname.startsWith(link.href)) && "bg-muted text-primary"
                            )}
                        >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
            
            {/* User Info Footer for Mobile Sheet */}
            <div className="mt-auto p-4 border-t md:hidden">
                <UserInfo />
            </div>
        </div>
    )
}

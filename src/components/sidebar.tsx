
'use client'

import Link from "next/link";
import { Home, LayoutDashboard, User as UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserInfo } from "./user-info";

const navLinks = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/courses", icon: Home, label: "All Courses" },
    { href: "/profile", icon: UserIcon, label: "Profile" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="fixed flex h-full flex-col bg-card text-card-foreground border-r md:w-[280px] lg:w-[320px]">
            {/* Navigation for both Mobile and Desktop */}
            <div className="flex-1 overflow-y-auto pt-4">
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
            
            {/* User Info Footer */}
            <div className="mt-auto p-4 border-t">
                <UserInfo />
            </div>
        </div>
    )
}

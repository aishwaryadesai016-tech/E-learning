
'use client'

import Link from "next/link";
import { Home, LayoutDashboard, User as UserIcon } from "lucide-react";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/courses", icon: Home, label: "All Courses" },
    { href: "/profile", icon: UserIcon, label: "Profile" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-col h-full">
                 <div className="p-4 border-b h-14 lg:h-[60px] flex items-center">
                    <Logo />
                </div>
                <div className="flex-1 overflow-y-auto pt-4">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                (pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')) && "bg-muted text-primary"
                                )}
                            >
                                <link.icon className="h-4 w-4" />
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                 <div className="mt-auto p-4 border-t">
                    <UserInfo />
                </div>
            </div>
            
            {/* Mobile Sidebar Content */}
            <nav className="grid gap-2 text-base font-medium md:hidden p-4">
                 {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                        "flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary",
                         (pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')) && "bg-muted text-primary"
                        )}
                    >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                    </Link>
                ))}
            </nav>
        </>
    )
}

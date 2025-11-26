'use client'

import Link from "next/link";
import { Home, LayoutDashboard, User as UserIcon, LogOut, Sparkles, Shield, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserInfo } from "./user-info";
import { Button } from "./ui/button";
import { useAuth, useUser, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import type { User } from "@/lib/users";
import { doc } from "firebase/firestore";

const userNavLinks = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/recommendations", icon: Sparkles, label: "For You" },
    { href: "/courses", icon: Home, label: "All Courses" },
    { href: "/profile", icon: UserIcon, label: "Profile" },
];

const adminNavLinks = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard", exact: true },
    { href: "/admin/courses", icon: Home, label: "Manage Courses" },
    { href: "/admin/users", icon: Users, label: "Manage Users" },
    { href: "/profile", icon: UserIcon, label: "Profile" },
];


export function Sidebar() {
    const pathname = usePathname();
    const auth = useAuth();
    const router = useRouter();
    const { user } = useUser();
    const firestore = useFirestore();
    
    const userDocRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user]);

    const { data: userData } = useDoc<User>(userDocRef);

    const handleLogout = async () => {
        if (!auth) return;
        await signOut(auth);
        router.push('/login');
    };

    const isAdmin = userData?.isAdmin;
    const navLinks = isAdmin ? adminNavLinks : userNavLinks;


    return (
        <div className="h-full flex flex-col bg-card text-card-foreground border-r">
            <div className="flex-1 overflow-y-auto pt-4">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
                    {navLinks.map((link) => {
                        const isActive = link.exact 
                            ? pathname === link.href 
                            : pathname.startsWith(link.href);
                        
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                isActive && "bg-muted text-primary"
                                )}
                            >
                                <link.icon className="h-4 w-4" />
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            
            {/* User Info Footer */}
            <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                    <UserInfo />
                    <Button variant="ghost" size="icon" onClick={handleLogout} className="text-muted-foreground hover:text-primary h-8 w-8">
                        <LogOut className="h-5 w-5" />
                        <span className="sr-only">Log out</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

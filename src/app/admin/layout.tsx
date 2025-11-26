
'use client'

import CoursesLayout from "../courses/layout";
import { useUser, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import type { User } from "@/lib/users";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function AdminLayoutSkeleton() {
    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="space-y-2">
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-5 w-3/4" />
            </div>
            <div className="space-y-8">
                 <Skeleton className="h-96 w-full" />
            </div>
        </div>
    )
}

function AccessDenied() {
    return (
        <div className="flex items-center justify-center h-full">
            <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-destructive/10 text-destructive p-3 rounded-full w-fit mb-2">
                        <ShieldAlert className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-headline">Access Denied</CardTitle>
                    <CardDescription>
                        You do not have the necessary permissions to view this page.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button asChild>
                        <Link href="/dashboard">Back to Dashboard</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();

    const userDocRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user]);

    const { data: userData, isLoading: isUserDocLoading } = useDoc<User>(userDocRef);

    const isLoading = isUserLoading || isUserDocLoading;

    if (isLoading) {
        return <CoursesLayout><AdminLayoutSkeleton /></CoursesLayout>;
    }

    if (!userData?.isAdmin) {
        return <CoursesLayout><AccessDenied /></CoursesLayout>;
    }

    return <CoursesLayout>{children}</CoursesLayout>;
}

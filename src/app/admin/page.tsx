"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, Users } from "lucide-react";
import type { Course } from "@/lib/courses";
import type { User } from "@/lib/users";
import Link from "next/link";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import { CourseCard } from "@/components/course-card";

function AdminDashboardSkeleton() {
    return (
        <div className="flex flex-col gap-6">
             <div className="flex items-center justify-between">
                <div>
                    <Skeleton className="h-8 w-64 mb-2" />
                    <Skeleton className="h-5 w-80" />
                </div>
            </div>
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Skeleton className="h-28 w-full" />
                <Skeleton className="h-28 w-full" />
                <Skeleton className="h-28 w-full" />
            </div>

            <div className="flex items-center justify-between mt-4">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-10 w-36" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-96 w-full" />
            </div>
        </div>
    )
}


export default function AdminDashboardPage() {
    const firestore = useFirestore();

    const coursesQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'courses'));
    }, [firestore]);
     const { data: coursesData, isLoading: isCoursesLoading } = useCollection<Course>(coursesQuery);

    const usersQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'users'));
    }, [firestore]);
    const { data: usersData, isLoading: isUsersLoading } = useCollection<User>(usersQuery);
   

    const isLoading = isCoursesLoading || isUsersLoading;

    if (isLoading) {
        return <AdminDashboardSkeleton />;
    }

    const courses = coursesData || [];
    const users = usersData || [];
    const recentCourses = courses.slice(0, 4);

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-semibold md:text-3xl font-headline">
                    Admin Dashboard
                </h1>
                <p className="text-muted-foreground">Welcome! Here's an overview of your platform.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                        <Home className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{courses.length}</div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{users.length}</div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">New Course</CardTitle>
                         <PlusCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <Button size="sm" className="w-full" asChild>
                           <Link href="/admin/courses/new">
                                Add New Course
                           </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <div>
                <div className="flex items-center justify-between mb-4 mt-4">
                    <h2 className="text-xl font-semibold font-headline">Recently Added Courses</h2>
                    <Button variant="outline" asChild>
                        <Link href="/admin/courses">View All Courses</Link>
                    </Button>
                </div>
                {recentCourses.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {recentCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground text-center py-8">No courses have been added yet.</p>
                )}
            </div>
        </div>
    )
}

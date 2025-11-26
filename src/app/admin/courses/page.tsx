
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import type { Course } from "@/lib/courses";
import { courses as staticCourses } from "@/lib/courses";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteCourseDialog } from "@/components/delete-course-dialog";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function AdminCoursesSkeleton() {
    return (
        <div className="flex flex-col gap-6">
             <div className="flex items-center justify-between">
                <div>
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-5 w-64" />
                </div>
                 <Button disabled>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add New Course
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Manage Courses</CardTitle>
                    <CardDescription>
                        Here you can view, edit, or delete existing courses.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Rating
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[...Array(5)].map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell className="hidden sm:table-cell">
                                        <Skeleton className="h-16 w-16 rounded-md" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-48" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-24" />
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Skeleton className="h-5 w-12" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-8 w-8 rounded-md" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}


export default function AdminCoursesPage() {
    const firestore = useFirestore();
    const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);

    const coursesQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'courses'), orderBy('title'));
    }, [firestore]);

    const { data: coursesData, isLoading } = useCollection<Course>(coursesQuery);

    if (isLoading) {
        return <AdminCoursesSkeleton />;
    }

    const courses = (coursesData && coursesData.length > 0) ? coursesData : staticCourses;

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold md:text-3xl font-headline">
                            Manage Courses
                        </h1>
                        <p className="text-muted-foreground">A list of all courses on the platform.</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/courses/new">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add New Course
                        </Link>
                    </Button>
                </div>
                
                <Card>
                    <CardHeader>
                        <CardTitle>All Courses</CardTitle>
                        <CardDescription>
                            Here you can view, edit, or delete existing courses.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Rating
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {courses.map(course => (
                                <TableRow key={course.id}>
                                    <TableCell className="hidden sm:table-cell">
                                        <Image
                                            alt={course.title}
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src={course.image || 'https://picsum.photos/seed/placeholder/64/64'}
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {course.title}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{course.category}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {course.rating ? course.rating.toFixed(1) : 'N/A'}
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                            <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                            >
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/courses/${course.id}/edit`}>Edit</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="text-destructive"
                                                onClick={() => setCourseToDelete(course)}
                                            >
                                                Delete
                                            </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

            </div>
            {courseToDelete && (
                <DeleteCourseDialog
                    course={courseToDelete}
                    onOpenChange={(isOpen) => !isOpen && setCourseToDelete(null)}
                />
            )}
        </>
    )
}

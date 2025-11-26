
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { courses } from "@/lib/courses";
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


export default function AdminDashboardPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold md:text-3xl font-headline">
                        Admin Dashboard
                    </h1>
                    <p className="text-muted-foreground">Manage courses and platform content.</p>
                </div>
                 <Button>
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
                           {courses.map(course => (
                             <TableRow key={course.id}>
                                <TableCell className="hidden sm:table-cell">
                                    <Image
                                        alt={course.title}
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={course.image}
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
                                    {course.rating}
                                </TableCell>
                                <TableCell>
                                    <Button size="sm">Edit</Button>
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


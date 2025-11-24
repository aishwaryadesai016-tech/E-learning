
'use client'

import { courses } from "@/lib/courses";
import { notFound, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, BookOpen, BrainCircuit, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/lib/progress";
import { Syllabus } from "@/components/syllabus";
import { useUser } from "@/firebase";

export default function CourseLearnPage() {
    const params = useParams();
    const id = params.id as string;
    const course = courses.find((c) => c.id === id);

    const { user } = useUser();
    const { progress } = useProgress();
    
    if (!course) {
        notFound();
    }
    
    const courseId = parseInt(course.id, 10);
    const courseProgress = progress[courseId] || { completedChapters: [], progressPercentage: 0 };

    return (
        <div className="max-w-4xl mx-auto w-full space-y-8">
            <div className="flex items-center justify-between">
                <Button asChild variant="outline">
                    <Link href={`/courses/${course.id}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Course Overview
                    </Link>
                </Button>
            </div>
            
            <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline">{course.title}</h1>
                <p className="text-muted-foreground">Follow the modules below to complete the course.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4">
                        <Progress value={courseProgress.progressPercentage} className="h-3" />
                        <span className="text-lg font-bold shrink-0">{courseProgress.progressPercentage}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                        {courseProgress.completedChapters.length} of {course.modules.length} modules completed.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        <span>Syllabus</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                   <Syllabus course={course} />
                </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-2">
                        <BrainCircuit className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Test Your Knowledge</CardTitle>
                    <CardDescription>
                        Ready to see what you've learned? Take a short quiz to check your understanding.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Button asChild size="lg">
                        <Link href={`/courses/${course.id}/quiz`}>
                            Start Quiz
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}


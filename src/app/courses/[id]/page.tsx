
'use client'

import { courses } from "@/lib/courses";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star, BarChart, Clock, Languages, ArrowRight, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useProgress } from "@/lib/progress";
import { useUser } from "@/firebase";
import { CourseRating } from "@/components/course-rating";
import { RelatedCourses } from "@/components/related-courses";

export default function CourseDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const course = courses.find((c) => c.id === id);
  const { user } = useUser();
  const { progress } = useProgress();

  if (!course) {
    notFound();
  }
  
  const courseId = parseInt(course.id, 10);
  const courseProgress = progress[courseId];
  const hasStartedCourse = courseProgress && courseProgress.progressPercentage > 0;


  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      {/* Course Header */}
      <div className="space-y-4">
          <Badge variant="outline" className="text-sm">{course.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            {course.title}
          </h1>
          <p className="text-lg text-muted-foreground">{course.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    data-ai-hint={`course ${course.category.toLowerCase()}`}
                />
            </div>
        </div>
        <div className="md:col-span-1">
             <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-3">
                        <BookOpen className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Ready to Begin?</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <Button asChild size="lg">
                        <Link href={`/courses/${course.id}/learn`}>
                            {hasStartedCourse ? "Continue Learning" : "Start Learning"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <div className="space-y-3 pt-4">
                        <div className="flex items-center gap-3">
                            <BarChart className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">Level: {course.level}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">Duration: {course.duration}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">{course.rating} average rating</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Languages className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">{course.language}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        <h2 className="font-headline text-2xl font-semibold">What You'll Learn</h2>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        {course.learning_objectives.map((objective, i) => (
                            <li key={i}>{objective}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <CourseRating />

            <Separator />
            
             {/* Reviews Section */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Star className="h-6 w-6 text-primary" />
                        <h2 className="font-headline text-2xl font-semibold">Student Reviews</h2>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {course.reviews.map((review, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold">{review.user}</p>
                                <div className="flex items-center gap-1 text-amber-500">
                                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 italic">"{review.comment}"</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

        <div className="md:col-span-1 space-y-8">
            {/* Instructor Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={course.instructor.profile_image} alt={course.instructor.name} />
                        <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">{course.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor.designation}</p>
                </CardContent>
            </Card>

             {/* Skills Card */}
             <Card>
                <CardHeader>
                    <CardTitle>Skills You'll Gain</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {course.skills_gained.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </CardContent>
             </Card>
             <RelatedCourses course={course} />
        </div>
      </div>
    </div>
  );
}

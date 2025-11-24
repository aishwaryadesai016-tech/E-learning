
import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { RelatedCourses } from "@/components/related-courses";
import { BookOpen, Info, Star, BrainCircuit, BarChart, Clock, Book, Layers, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Suspense } from "react";
import { CourseRating } from "@/components/course-rating";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Syllabus } from "@/components/syllabus";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const courseId = parseInt(params.id, 10);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      {/* Course Header */}
      <div className="space-y-4 text-center">
          <Badge variant="outline" className="text-sm">{course.topic}</Badge>
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
                    data-ai-hint={`course ${course.topic.toLowerCase()}`}
                />
            </div>
        </div>
        <div className="md:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BarChart className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">Level: {course.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">Duration: {course.duration}</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Book className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{course.chapters.length} Chapters</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Layers className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">Topic: {course.topic}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>

      <div className="space-y-8">
        {/* About Section */}
        <section>
            <div className="flex items-center gap-3 mb-4">
                <Info className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-semibold">About this course</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
                <p>
                    This course provides a comprehensive overview of {course.title.toLowerCase()}.
                    Throughout the chapters, you will gain hands-on experience and a deep understanding of the core concepts.
                </p>
                <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                        {tag}
                        </Badge>
                    ))}
                    </div>
                </div>
            </div>
        </section>
        
        <Separator />

        {/* Syllabus Section */}
        <section>
            <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-semibold">Syllabus</h2>
            </div>
            <Syllabus course={course} />
        </section>

        <Separator />

        {/* Rating Section */}
        <section>
            <div className="flex items-center gap-3 mb-4">
                <Star className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-semibold">Your Feedback</h2>
            </div>
            <CourseRating />
        </section>
        
        <Separator />

        {/* Quiz Section */}
        <section>
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
        </section>
      </div>
      
      <Separator />

      <Suspense fallback={<RelatedCoursesSkeleton />}>
        <RelatedCourses course={course} />
      </Suspense>
    </div>
  );
}


function RelatedCoursesSkeleton() {
    return (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-muted rounded-full">
                 <Skeleton className="h-5 w-5" />
              </span>
              <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
    )
}

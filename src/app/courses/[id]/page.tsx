import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { RelatedCourses } from "@/components/related-courses";
import { Button } from "@/components/ui/button";
import { Star, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Suspense } from "react";
import CourseDetailLoading from "./loading";

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
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <div className="space-y-2">
              <Badge variant="outline">{course.topic}</Badge>
              <CardTitle className="font-headline text-3xl md:text-4xl">
                {course.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                data-ai-hint={`course ${course.topic.toLowerCase()}`}
              />
            </div>
            <h2 className="font-headline text-xl font-semibold mb-2">
              Description
            </h2>
            <p className="text-muted-foreground mb-6">{course.description}</p>
            <h2 className="font-headline text-xl font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
             <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                <CardTitle className="font-headline text-xl">Chapters</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
             <Accordion type="single" collapsible className="w-full">
              {course.chapters.map((chapter, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{chapter.title}</AccordionTrigger>
                  <AccordionContent>
                    {chapter.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Suspense fallback={<RelatedCoursesSkeleton />}>
          <RelatedCourses course={course} />
        </Suspense>
      </div>
      <div className="space-y-6">
        <Card className="bg-primary/5 border-primary/20 sticky top-6">
          <CardHeader>
            <CardTitle className="font-headline">Rate this course</CardTitle>
            <CardDescription>
              Your feedback helps us improve recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Button
                  key={rating}
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10 transition-colors duration-300"
                >
                  <Star className="h-6 w-6" />
                </Button>
              ))}
            </div>
            <Button className="w-full" variant="default">
              Complete & Submit Rating
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function RelatedCoursesSkeleton() {
    return (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 bg-muted rounded-full"></div>
              <div className="h-6 w-1/2 bg-muted rounded-md"></div>
            </div>
            <div className="h-4 w-full bg-muted rounded-md"></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-16 w-full bg-muted rounded-lg"></div>
            <div className="h-16 w-full bg-muted rounded-lg"></div>
          </CardContent>
        </Card>
    )
}

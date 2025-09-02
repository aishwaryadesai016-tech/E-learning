import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { RelatedCourses } from "@/components/related-courses";
import { BookOpen, Info, Star, BrainCircuit } from "lucide-react";
import {
  Card,
  CardContent,
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
import { CourseRating } from "@/components/course-rating";
import { Separator } from "@/components/ui/separator";
import { CourseQuiz } from "@/components/course-quiz";
import { Skeleton } from "@/components/ui/skeleton";
import { ChapterContent } from "@/components/chapter-content";
import { Syllabus } from "@/components/syllabus";

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

  const fullCourseContent = course.chapters.map(c => `Chapter: ${c.title}\n${c.content}`).join('\n\n');


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
            <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="h-6 w-6 text-primary" />
                <h2 className="font-headline text-2xl font-semibold">Test Your Knowledge</h2>
            </div>
            <Suspense fallback={<QuizSkeleton />}>
                <CourseQuiz courseTitle={course.title} courseContent={fullCourseContent} />
            </Suspense>
        </section>
      </div>
      
      <Separator />

      <Suspense fallback={<RelatedCoursesSkeleton />}>
        <RelatedCourses course={course} />
      </Suspense>
    </div>
  );
}

function QuizSkeleton() {
    return (
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
    )
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

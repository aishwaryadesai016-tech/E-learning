import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { RelatedCourses } from "@/components/related-courses";
import { BookOpen, Info, Star } from "lucide-react";
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
import CourseDetailLoading from "./loading";
import { CourseRating } from "@/components/course-rating";
import { Separator } from "@/components/ui/separator";
import { CourseQa } from "@/components/course-qa";

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
    <div className="flex flex-col gap-8">
      {/* Course Header */}
      <div className="space-y-4">
          <Badge variant="outline" className="text-sm">{course.topic}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            {course.title}
          </h1>
          <p className="text-lg text-muted-foreground">{course.description}</p>
      </div>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            data-ai-hint={`course ${course.topic.toLowerCase()}`}
          />
        </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-8">
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
                <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {course.chapters.map((chapter, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                        <span className="text-left">Chapter {index + 1}: {chapter.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground prose prose-sm max-w-none">
                       <div dangerouslySetInnerHTML={{ __html: chapter.content.replace(/\n/g, '<br />') }} />
                    </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </section>
        </div>

        <div className="space-y-6 md:sticky md:top-6">
            <CourseQa courseContent={fullCourseContent} />
            <CourseRating />
        </div>
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


import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import { CourseQuiz } from "@/components/course-quiz";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

function QuizSkeleton() {
    return (
      <div className="max-w-4xl mx-auto w-full">
        <Skeleton className="h-8 w-48 mb-8" />
        <Skeleton className="h-[500px] w-full" />
      </div>
    );
}

export default async function QuizPage({
  params,
}: {
  params: { id: string };
}) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  const fullCourseContent = course.modules.map(c => `Module: ${c.title}\nTopics: ${c.topics.join(', ')}`).join('\n\n');

  return (
    <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href={`/courses/${course.id}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Course
                </Link>
            </Button>
        </div>
      <Suspense fallback={<QuizSkeleton />}>
        <CourseQuiz courseTitle={course.title} courseContent={fullCourseContent} />
      </Suspense>
    </div>
  );
}

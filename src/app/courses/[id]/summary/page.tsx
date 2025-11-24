
import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import { CourseSummary } from "@/components/course-summary";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

function SummarySkeleton() {
    return (
      <div className="max-w-4xl mx-auto w-full">
        <Skeleton className="h-8 w-48 mb-8" />
        <Skeleton className="h-[500px] w-full" />
      </div>
    );
}

export default async function SummaryPage({
  params,
}: {
  params: { id: string };
}) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  const fullCourseContent = course.modules.map(c => `Module: ${c.title}\n${c.topics.join(', ')}`).join('\n\n');

  return (
    <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href={`/courses/${course.id}/learn`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Learning
                </Link>
            </Button>
        </div>
      <Suspense fallback={<SummarySkeleton />}>
        <CourseSummary courseTitle={course.title} courseContent={fullCourseContent} />
      </Suspense>
    </div>
  );
}

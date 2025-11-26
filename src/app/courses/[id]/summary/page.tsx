
import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import { CourseSummary } from "@/components/course-summary";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useDoc, useFirestore, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import type { Course } from "@/lib/courses";


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
  // This is a server component, so we can't use hooks directly.
  // We'll fetch the course data in a client component or pass it down.
  // For now, we'll use the static data to get the content, assuming it's available.
  const courseFromStatic = courses.find((c) => c.id === params.id);
  
  // A real implementation would fetch the course from Firestore here.
  // Since this is a Server Component, we can't use the `useDoc` hook.
  // We will pass the necessary data to the client component `CourseSummary`.

  if (!courseFromStatic) {
    notFound();
  }

  const fullCourseContent = courseFromStatic.modules.map(c => `Module: ${c.title}\n${c.topics.join(', ')}`).join('\n\n');

  return (
    <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href={`/courses/${courseFromStatic.id}/learn`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Learning
                </Link>
            </Button>
        </div>
      <Suspense fallback={<SummarySkeleton />}>
        <CourseSummary courseTitle={courseFromStatic.title} courseContent={fullCourseContent} />
      </Suspense>
    </div>
  );
}

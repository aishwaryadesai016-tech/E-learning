
'use client';

import { CourseForm } from "@/components/course-form";
import { useDoc, useFirestore, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import { useParams } from "next/navigation";
import type { Course } from "@/lib/courses";
import { Skeleton } from "@/components/ui/skeleton";

function EditCourseSkeleton() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-5 w-3/4" />
            </div>
            <div className="space-y-8">
                 <Skeleton className="h-96 w-full" />
            </div>
        </div>
    )
}

export default function EditCoursePage() {
    const params = useParams();
    const id = params.id as string;
    const firestore = useFirestore();

    const courseDocRef = useMemoFirebase(() => {
        if (!firestore || !id) return null;
        return doc(firestore, 'courses', id);
    }, [firestore, id]);

    const { data: course, isLoading } = useDoc<Course>(courseDocRef);

    if (isLoading) {
        return <EditCourseSkeleton />;
    }

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold md:text-3xl font-headline">
                    Edit Course
                </h1>
                <p className="text-muted-foreground">Update the details for &quot;{course?.title}&quot;.</p>
            </div>
            {course ? <CourseForm course={course} /> : <p>Course not found.</p>}
        </div>
    )
}


'use client';

import { CourseListView } from "@/components/course-list-view";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query } from "firebase/firestore";
import type { Course } from "@/lib/courses";
import { courses as staticCourses } from "@/lib/courses";
import CoursesLoading from "./loading";

export default function CoursesPage() {
  const firestore = useFirestore();
  
  const coursesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "courses"));
  }, [firestore]);

  const { data: firestoreCourses, isLoading } = useCollection<Course>(coursesQuery);

  if (isLoading) {
    return <CoursesLoading />;
  }

  // Use Firestore courses if available, otherwise use static fallback data
  const courses = (firestoreCourses && firestoreCourses.length > 0) ? firestoreCourses : staticCourses;

  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">
          Browse Courses
        </h1>
      </div>
      <CourseListView courses={courses || []} />
    </>
  );
}

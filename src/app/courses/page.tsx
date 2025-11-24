
import { CourseListView } from "@/components/course-list-view";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  const allCourses = courses;

  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">
          Browse Courses
        </h1>
      </div>
      <CourseListView courses={allCourses} />
    </>
  );
}

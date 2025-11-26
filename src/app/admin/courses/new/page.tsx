
'use client'
import { CourseForm } from "@/components/course-form";

export default function NewCoursePage() {

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold md:text-3xl font-headline">
                    Create a New Course
                </h1>
                <p className="text-muted-foreground">Fill out the form below to add a new course to the platform.</p>
            </div>
            <CourseForm />
        </div>
    )
}

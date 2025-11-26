
"use client";

import { useState, useMemo } from "react";
import type { Course } from "@/lib/courses";
import { CourseCard } from "@/components/course-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CourseListView({ courses }: { courses: Course[] }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const courseTopics = useMemo(() => {
    return [...new Set(courses.map((course) => course.category))];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    let filtered = courses;

    if (activeTopic) {
      filtered = filtered.filter((course) => course.category === activeTopic);
    }

    if (searchTerm.length > 1) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.skills_gained.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    return filtered;
  }, [courses, activeTopic, searchTerm]);

  const coursesByTopic = useMemo(() => {
    return filteredCourses.reduce((acc, course) => {
      const category = course.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(course);
      return acc;
    }, {} as Record<string, Course[]>);
  }, [filteredCourses]);

  const topicsToDisplay = activeTopic
    ? [activeTopic]
    : courseTopics.filter((topic) => coursesByTopic[topic]?.length > 0);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10 bg-card"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto sm:min-w-[200px]">
          <Select
            onValueChange={(value) =>
              setActiveTopic(value === "all" ? null : value)
            }
            defaultValue="all"
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {courseTopics.map((topic) => (
                <SelectItem key={topic} value={topic}>
                  {topic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="space-y-8">
          {topicsToDisplay.map((topic) => (
            <section key={topic}>
              <h2 className="text-xl md:text-2xl font-headline font-semibold mb-4">
                {topic}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {coursesByTopic[topic].map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-lg bg-card">
          <h3 className="text-xl font-semibold">No Courses Found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import type { Course } from "@/lib/courses";
import { CourseCard } from "@/components/course-card";
import { courseTopics } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function CourseListView({ courses }: { courses: Course[] }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const topicMatch = activeTopic ? course.topic === activeTopic : true;
      const searchMatch =
        searchTerm.length > 1
          ? course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : true;
      return topicMatch && searchMatch;
    });
  }, [courses, activeTopic, searchTerm]);

  return (
    <div className="flex flex-col gap-6">
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
        <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 w-full sm:w-auto">
          <Button
            variant={activeTopic === null ? "default" : "outline"}
            onClick={() => setActiveTopic(null)}
            className="shrink-0"
          >
            All Topics
          </Button>
          {courseTopics.map((topic) => (
            <Button
              key={topic}
              variant={activeTopic === topic ? "default" : "outline"}
              onClick={() => setActiveTopic(topic)}
              className="shrink-0"
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>
      {filteredCourses.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
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

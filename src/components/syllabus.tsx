
"use client";

import type { Course } from "@/lib/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useProgress } from "@/lib/progress";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useUser } from "@/firebase";
import { courseContent } from "@/lib/course-content";
import { ChapterContent } from "./chapter-content";

export function Syllabus({ course }: { course: Course }) {
  const { user } = useUser();
  const { progress, updateProgress } = useProgress();
  const courseId = course.id;
  const courseProgress = progress[courseId] || { completedChapters: [] };

  const handleChapterToggle = (chapterIndex: number, isCompleted: boolean) => {
    if (user) {
      updateProgress(user.uid, courseId, course.modules.length, chapterIndex, isCompleted);
    }
  };

  const modulesContent = courseContent[course.id]?.modules;

  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
      {course.modules.map((module, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b">
          <div className="flex items-center gap-4 py-4 text-left">
            <Checkbox
              id={`chapter-${index}`}
              checked={courseProgress.completedChapters.includes(index)}
              onCheckedChange={(checked) => handleChapterToggle(index, !!checked)}
              className="h-5 w-5 rounded-full"
              disabled={!user}
            />
            <AccordionTrigger className="text-lg font-semibold hover:no-underline p-0 flex-1 justify-start">
              <Label htmlFor={`chapter-${index}`} className="cursor-pointer">
                {module.title}
              </Label>
            </AccordionTrigger>
          </div>
          <AccordionContent className="text-base text-muted-foreground prose prose-sm max-w-none pl-12 pb-4">
             {modulesContent && modulesContent[index] ? (
                <ChapterContent content={modulesContent[index]} />
             ) : (
                <p>Content for this module is not available yet.</p>
             )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

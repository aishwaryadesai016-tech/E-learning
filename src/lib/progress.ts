
"use client";

import { useEffect, useState } from "react";

export type CourseProgress = {
  [courseId: number]: {
    completedChapters: number[]; // Array of chapter indices
    progressPercentage: number;
  };
};

const getProgressForUser = (): CourseProgress => {
  if (typeof window === "undefined") return {};
  const storedProgress = localStorage.getItem("courseProgress");
  return storedProgress ? JSON.parse(storedProgress) : {};
};

const saveProgressForUser = (progress: CourseProgress) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("courseProgress", JSON.stringify(progress));
};

export const useProgress = () => {
    const [progress, setProgress] = useState<CourseProgress>({});

    useEffect(() => {
        setProgress(getProgressForUser());
    }, []);

    const updateProgress = (courseId: number, totalChapters: number, chapterIndex: number, isCompleted: boolean) => {
        const newProgress = getProgressForUser();
        if (!newProgress[courseId]) {
            newProgress[courseId] = { completedChapters: [], progressPercentage: 0 };
        }

        const completedChapters = new Set(newProgress[courseId].completedChapters);
        if (isCompleted) {
            completedChapters.add(chapterIndex);
        } else {
            completedChapters.delete(chapterIndex);
        }
        
        const updatedChapters = Array.from(completedChapters);
        const progressPercentage = Math.round((updatedChapters.length / totalChapters) * 100);

        newProgress[courseId] = {
            completedChapters: updatedChapters,
            progressPercentage: progressPercentage,
        };

        saveProgressForUser(newProgress);
        setProgress(newProgress);
    };

    return { progress, updateProgress };
}

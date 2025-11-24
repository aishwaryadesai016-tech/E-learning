"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useUser, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import { updateDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import type { User } from "@/lib/users";

export type CourseProgress = {
  [courseId: number]: {
    completedChapters: number[]; // Array of chapter indices
    progressPercentage: number;
  };
};

type ProgressContextType = {
  progress: CourseProgress;
  isProgressLoading: boolean;
  updateProgress: (
    userId: string,
    courseId: number,
    totalChapters: number,
    chapterIndex: number,
    isCompleted: boolean
  ) => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  
  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const { data: userData, isLoading: isUserDocLoading } = useDoc<User>(userDocRef);

  const [progress, setProgress] = useState<CourseProgress>({});
  const [isProgressLoading, setIsProgressLoading] = useState(true);

  useEffect(() => {
    const loading = isUserLoading || isUserDocLoading;
    setIsProgressLoading(loading);
    if (!loading && userData) {
      setProgress(userData.progress || {});
    } else if (!loading && !user) {
      setProgress({}); // No user, no progress
    }
  }, [isUserLoading, isUserDocLoading, userData, user]);

  const updateProgress = (
    userId: string,
    courseId: number,
    totalChapters: number,
    chapterIndex: number,
    isCompleted: boolean
  ) => {
    const newProgress = { ...progress };
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
    
    setProgress(newProgress);

    // Save to Firestore non-blockingly
    if (userDocRef) {
      updateDocumentNonBlocking(userDocRef, { progress: newProgress });
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, isProgressLoading, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};


"use client";

import { useMemo } from "react";
import { type Course } from "@/lib/courses";
import type { User } from "@/lib/users";
import { CourseCard } from "@/components/course-card";
import { useUser, useDoc, useMemoFirebase, useFirestore, useCollection } from "@/firebase";
import { collection, doc, query } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RecommendationsPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const { data: userData, isLoading: isUserDocLoading } = useDoc<User>(userDocRef);

  const coursesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'courses'));
  }, [firestore]);
  const { data: courses, isLoading: areCoursesLoading } = useCollection<Course>(coursesQuery);


  const recommendedCourses = useMemo(() => {
    if (!userData || !userData.interestTags || !userData.level || !courses) {
      return [];
    }

    return courses.filter(course => {
      const categoryMatch = userData.interestTags?.includes(course.category);
      const levelMatch = userData.level === course.level;
      return categoryMatch && levelMatch;
    });
  }, [userData, courses]);
  
  const isLoading = isUserLoading || isUserDocLoading || areCoursesLoading;

  if (isLoading) {
    return <RecommendationSkeleton />;
  }

  if (!userData || (!userData.interestTags?.length && !userData.level)) {
    return (
        <div className="text-center py-20 rounded-lg bg-card">
            <Info className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">Complete Your Profile</h3>
            <p className="mt-2 text-muted-foreground">
                To get personalized course recommendations, please set your interests and experience level in your profile.
            </p>
            <Button asChild className="mt-6">
                <Link href="/profile">Go to Profile</Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-semibold md:text-3xl font-headline">
          Recommended For You
        </h1>
      </div>
      <p className="text-muted-foreground">
        Based on your interest in <span className="font-semibold text-foreground">{userData.interestTags?.join(', ')}</span> and your level as a <span className="font-semibold text-foreground">{userData.level}</span>.
      </p>

      {recommendedCourses.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-lg bg-card">
          <h3 className="text-xl font-semibold">No Recommendations Found</h3>
          <p className="text-muted-foreground mt-2">
            We couldn't find any courses matching your interests right now. Try updating your profile or check back later!
          </p>
        </div>
      )}
    </div>
  );
}

function RecommendationSkeleton() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-64" />
            </div>
            <Skeleton className="h-5 w-96" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-96 w-full" />
            </div>
        </div>
    )
}

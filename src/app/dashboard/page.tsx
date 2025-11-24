
"use client";

import { Clock, CheckCircle, ListVideo } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/lib/courses";
import { useProgress } from "@/lib/progress";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser, useDoc, useMemoFirebase } from "@/firebase";
import { useFirestore } from "@/firebase";
import { doc } from "firebase/firestore";
import type { User } from "@/lib/users";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { progress, isProgressLoading } = useProgress();

  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const { data: userData, isLoading: isUserDocLoading } = useDoc<User>(userDocRef);

  const isLoading = isUserLoading || isUserDocLoading || isProgressLoading;

  const userName = userData?.name || "User";

  const inProgressCourses = courses.filter(
    (course) =>
      progress[course.id] && progress[course.id].progressPercentage < 100
  );

  const completedCourses = courses.filter(
    (course) =>
      progress[course.id] && progress[course.id].progressPercentage === 100
  );

  const watchlisted = courses.filter((course) =>
    (userData?.watchlist || []).includes(course.id)
  );

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold md:text-3xl font-headline">
          Welcome Back, {userName}!
        </h1>
        <p className="text-muted-foreground">
          Here's a summary of your learning journey.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-500" />
              <CardTitle>Continue Learning</CardTitle>
            </div>
            <CardDescription>Pick up where you left off.</CardDescription>
          </CardHeader>
          <CardContent>
            {inProgressCourses.length > 0 ? (
              <div className="space-y-4">
                {inProgressCourses.map((course) => (
                  <Link href={`/courses/${course.id}`} key={course.id} className="block group">
                    <div className="flex items-center gap-4 p-2 -m-2 rounded-lg group-hover:bg-muted">
                        <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        </div>
                        <div className="flex-1">
                        <p className="font-semibold text-sm">{course.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <Progress
                            value={progress[course.id]?.progressPercentage || 0}
                            className="h-2 w-full"
                            />
                            <span className="text-xs text-muted-foreground">
                            {progress[course.id]?.progressPercentage || 0}%
                            </span>
                        </div>
                        </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <p>No courses in progress.</p>
                <Button variant="link" asChild>
                  <Link href="/courses">Browse courses</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <CardTitle>Completed Courses</CardTitle>
            </div>
            <CardDescription>
              Courses you have successfully completed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {completedCourses.length > 0 ? (
              <div className="space-y-4">
                {completedCourses.map((course) => (
                  <div key={course.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex-shrink-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{course.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-4">
                You haven't completed any courses yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <ListVideo className="h-6 w-6 text-purple-500" />
          <h2 className="text-xl font-semibold font-headline">My Watchlist</h2>
        </div>
        {watchlisted.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {watchlisted.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-20">
            <CardContent>
              <h3 className="text-xl font-semibold">Your Watchlist is Empty</h3>
              <p className="text-muted-foreground mt-2">
                Browse courses and add them to your watchlist.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-80" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-40" />
            </div>
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-40" />
            </div>
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-12 w-full" />
          </CardContent>
        </Card>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-40" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-80 w-full" />
        </div>
      </div>
    </div>
  )
}

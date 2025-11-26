
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courseTopics } from "@/lib/courses";
import { CourseCard } from "@/components/course-card";
import { useProgress } from "@/lib/progress";
import { useUser, useFirestore, useDoc, useMemoFirebase, useCollection } from "@/firebase";
import { doc, collection, query } from "firebase/firestore";
import { updateDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";
import type { User, Course } from "@/lib/users";
import { useMemo } from "react";

export default function ProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const { progress, isProgressLoading } = useProgress();
  
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

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  useEffect(() => {
    if (userData?.interestTags) {
      setSelectedInterests(userData.interestTags);
    }
  }, [userData]);

  const handleInterestChange = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSaveChanges = () => {
    if (userDocRef) {
      updateDocumentNonBlocking(userDocRef, { interestTags: selectedInterests });
      toast({
        title: "Interests Saved",
        description: "Your course recommendations will now be updated.",
      });
    }
  };
  
  const isLoading = isUserLoading || isUserDocLoading || isProgressLoading || areCoursesLoading;

  const completedCourses = useMemo(() => {
    if (!courses || !progress) return [];
    return courses.filter(
      (course) => {
        const courseProgress = progress[course.id];
        return courseProgress && courseProgress.progressPercentage === 100
      }
    );
  }, [courses, progress]);

  const isAdmin = userData?.isAdmin;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-headline font-semibold">Profile</h1>
      {isAdmin ? (
          <Card>
            <CardHeader>
                <CardTitle>Admin Profile</CardTitle>
                <CardDescription>
                    You are currently logged in as an administrator.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Admin-specific profile settings and information can be displayed here. User-related sections like 'Interests' and 'Completed Courses' are hidden.</p>
            </CardContent>
          </Card>
      ) : (
        <Tabs defaultValue="settings" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="settings">Profile Settings</TabsTrigger>
            <TabsTrigger value="completed">Completed Courses</TabsTrigger>
            </TabsList>
            <TabsContent value="settings">
            <Card>
                <CardHeader>
                <CardTitle>Your Interests</CardTitle>
                <CardDescription>
                    Update your interests to refine course recommendations.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                    {courseTopics.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                        id={interest}
                        checked={selectedInterests.includes(interest)}
                        onCheckedChange={() => handleInterestChange(interest)}
                        disabled={isLoading}
                        />
                        <Label htmlFor={interest} className="font-normal">
                        {interest}
                        </Label>
                    </div>
                    ))}
                </div>
                <Button onClick={handleSaveChanges} disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save Changes"}
                </Button>
                </CardContent>
            </Card>
            </TabsContent>
            <TabsContent value="completed">
            <Card>
                <CardHeader>
                <CardTitle>Completed Courses</CardTitle>
                <CardDescription>
                    A collection of all the courses you have completed.
                </CardDescription>
                </CardHeader>
                <CardContent>
                {isLoading ? (
                    <div className="text-center py-12">
                    <p className="text-muted-foreground">Loading completed courses...</p>
                    </div>
                ) : completedCourses.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {completedCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                    <p className="text-muted-foreground">
                        You haven't completed any courses yet.
                    </p>
                    </div>
                )}
                </CardContent>
            </Card>
            </TabsContent>
        </Tabs>
      )}
    </div>
  );
}


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
import { courses, courseTopics } from "@/lib/courses";
import { CourseCard } from "@/components/course-card";
import { useProgress } from "@/lib/progress";
import { useUser, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import { updateDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@/lib/users";

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

  const completedCourses = courses.filter(
    (course) => {
      const courseId = parseInt(course.id, 10);
      return progress[courseId] && progress[courseId].progressPercentage === 100
    }
  );

  const isLoading = isUserLoading || isUserDocLoading || isProgressLoading;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-headline font-semibold">Profile</h1>
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
    </div>
  );
}

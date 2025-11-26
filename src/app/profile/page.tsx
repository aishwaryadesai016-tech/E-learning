

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

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
  const { data: coursesData, isLoading: areCoursesLoading } = useCollection<Course>(coursesQuery);

  const usersQuery = useMemoFirebase(() => {
    if (!firestore || !userData?.isAdmin) return null;
    return query(collection(firestore, 'users'));
  }, [firestore, userData?.isAdmin]);
  const { data: usersData, isLoading: areUsersLoading } = useCollection<User>(usersQuery);

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
  
  const isLoading = isUserLoading || isUserDocLoading || isProgressLoading || areCoursesLoading || areUsersLoading;

  const completedCourses = useMemo(() => {
    if (!coursesData || !progress) return [];
    return coursesData.filter(
      (course) => {
        const courseProgress = progress[course.id];
        return courseProgress && courseProgress.progressPercentage === 100
      }
    );
  }, [coursesData, progress]);

  const isAdmin = userData?.isAdmin;
  const courses = coursesData || [];
  const users = usersData || [];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-headline font-semibold">Profile</h1>
      {isAdmin ? (
          <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Admin Information</CardTitle>
                    <CardDescription>Your administrator account details.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border">
                        <AvatarImage src={user?.photoURL || `https://avatar.vercel.sh/${user?.uid}.png`} />
                        <AvatarFallback>{userData?.name?.charAt(0) || 'A'}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <p className="text-xl font-semibold">{userData?.name}</p>
                        <p className="text-muted-foreground">{userData?.email}</p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Platform Overview</CardTitle>
                        <CardDescription>High-level statistics for the platform.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Users className="h-5 w-5 text-muted-foreground" />
                                <span className="font-medium">Total Users</span>
                            </div>
                            <span className="font-bold text-lg">{users.length}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                             <div className="flex items-center gap-3">
                                <Home className="h-5 w-5 text-muted-foreground" />
                                <span className="font-medium">Total Courses</span>
                            </div>
                            <span className="font-bold text-lg">{courses.length}</span>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Navigate to admin sections.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Button asChild className="w-full justify-between">
                            <Link href="/admin/courses">
                                <span>Manage Courses</span>
                                <ArrowRight />
                            </Link>
                        </Button>
                         <Button asChild className="w-full justify-between">
                            <Link href="/admin/users">
                                <span>Manage Users</span>
                                <ArrowRight />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
          </div>
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

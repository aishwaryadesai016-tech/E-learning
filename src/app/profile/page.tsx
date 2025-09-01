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
import { courses } from "@/lib/courses";
import { completedCourses } from "@/lib/dashboard-data";
import { CourseCard } from "@/components/course-card";

const allInterests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Mobile Development",
  "Game Development",
  "Cybersecurity",
  "Cloud Computing",
  "Software Engineering",
  "Blockchain",
  "UI/UX Design",
  "Algorithms & Data Structures",
];

export default function ProfilePage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  useEffect(() => {
    // In a real app, you'd fetch the user's saved interests.
    // For this prototype, we'll get them from localStorage.
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (storedUser.interests) {
      setSelectedInterests(storedUser.interests);
    }
  }, []);

  const handleInterestChange = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSaveChanges = () => {
    // In a real app, you would save this to your database.
    // For this prototype, we'll update localStorage.
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const updatedUser = { ...storedUser, interests: selectedInterests };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    alert("Your interests have been saved!");
  };

  const completed = courses.filter((course) =>
    completedCourses.includes(course.id)
  );

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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allInterests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={selectedInterests.includes(interest)}
                      onCheckedChange={() => handleInterestChange(interest)}
                    />
                    <Label htmlFor={interest} className="font-normal">
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
              <Button onClick={handleSaveChanges}>Save Changes</Button>
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
              {completed.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {completed.map((course) => (
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

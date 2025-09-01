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
import { completedCourses, watchlist } from "@/lib/dashboard-data";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  const completed = courses.filter((course) =>
    completedCourses.includes(course.id)
  );
  const watchlisted = courses.filter((course) =>
    watchlist.includes(course.id)
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold md:text-3xl font-headline">
          Welcome Back, User!
        </h1>
        <p className="text-muted-foreground">
          Here's a summary of your learning journey.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <CardTitle>Completed Courses</CardTitle>
            </div>
            <CardDescription>
              Courses you have successfully completed. Keep it up!
            </CardDescription>
          </CardHeader>
          <CardContent>
            {completed.length > 0 ? (
              <div className="space-y-4">
                {completed.map((course) => (
                  <div key={course.id} className="flex items-center gap-4">
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
                        <Progress value={100} className="h-2 w-full" />
                        <span className="text-xs text-muted-foreground">100%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                You haven't completed any courses yet.
              </p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-500" />
              <CardTitle>Continue Learning</CardTitle>
            </div>
             <CardDescription>
              Pick up where you left off.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for in-progress courses */}
            <div className="text-center text-muted-foreground py-8">
                <p>No courses in progress.</p>
            </div>
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

import { suggestRelatedCourses } from "@/ai/flows/suggest-related-courses";
import type { Course } from "@/lib/courses";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Lightbulb } from "lucide-react";

export async function RelatedCourses({ course }: { course: Course }) {
  try {
    const related = await suggestRelatedCourses({
      courseTitle: course.title,
      courseDescription: course.description,
    });

    if (!related || related.length === 0) {
      return null;
    }

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-primary/10 rounded-full">
              <Lightbulb className="h-5 w-5 text-primary" />
            </span>
            <CardTitle className="font-headline text-xl">
              AI-Powered Suggestions
            </CardTitle>
          </div>
          <CardDescription>
            Because you're viewing "{course.title}", you might also like these
            courses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {related.slice(0, 3).map((suggestion) => (
              <div
                key={suggestion.title}
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-semibold">{suggestion.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {suggestion.description}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs shrink-0 whitespace-nowrap border-green-600/50 bg-green-500/10 text-green-700"
                  >
                    {Math.round(suggestion.similarityScore * 100)}% Match
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  } catch (error) {
    console.error("Failed to fetch related courses:", error);
    // Gracefully fail by returning null. This prevents the page from crashing.
    return null;
  }
}


"use client";

import { useEffect, useState, useCallback } from "react";
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
import type { SuggestRelatedCoursesOutput } from "@/ai/flows/suggest-related-courses";
import { Skeleton } from "./ui/skeleton";

export function RelatedCourses({ course }: { course: Course }) {
  const [related, setRelated] = useState<SuggestRelatedCoursesOutput | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRelated = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await suggestRelatedCourses({
        courseTitle: course.title,
        courseDescription: course.description,
      });
      setRelated(result);
    } catch (error) {
      console.error("Failed to fetch related courses:", error);
      setError(
        "Could not load AI recommendations. This may be due to a temporary issue with the AI service or a missing API key in the application's environment configuration."
      );
      setRelated([]);
    } finally {
      setLoading(false);
    }
  }, [course]);

  useEffect(() => {
    fetchRelated();
  }, [fetchRelated]);

  if (loading) {
    return (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-muted rounded-full">
                 <Skeleton className="h-5 w-5 rounded-full" />
              </span>
              <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
    );
  }
  
  if (error || !related || related.length === 0) {
    // Fail gracefully and don't show the component if there's an error or no related courses.
    return null;
  }


  return (
    <Card>
      <CardHeader className="items-center text-center">
        <span className="p-2 bg-primary/10 rounded-full mb-2">
            <Lightbulb className="h-5 w-5 text-primary" />
        </span>
        <CardTitle className="font-headline text-xl">
            Top Recommended Courses
        </CardTitle>
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
}


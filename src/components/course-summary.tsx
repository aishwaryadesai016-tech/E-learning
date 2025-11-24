
"use client";

import { useState, useEffect, useCallback } from "react";
import { generateCourseSummary } from "@/ai/flows/generate-course-summary";
import type { GenerateCourseSummaryOutput } from "@/ai/flows/generate-course-summary";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle, RefreshCw } from "lucide-react";

export function CourseSummary({
  courseTitle,
  courseContent,
}: {
  courseTitle: string;
  courseContent: string;
}) {
  const [summaryData, setSummaryData] = useState<GenerateCourseSummaryOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSummary = useCallback(async () => {
    setLoading(true);
    setError(null);
    setSummaryData(null);
    try {
      const result = await generateCourseSummary({ courseTitle, courseContent });
      if (result && result.summary) {
        setSummaryData(result);
      } else {
        throw new Error("Summary data is invalid or empty.");
      }
    } catch (err) {
      console.error("Failed to generate summary:", err);
      setError("The AI-powered summary could not be generated. This may be due to a temporary issue with the AI service or a missing API key in the application's environment configuration. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [courseTitle, courseContent]);

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  if (loading) {
    return <SummarySkeleton />;
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={fetchSummary} className="mt-4">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!summaryData) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Takeaways for {courseTitle}</CardTitle>
        <CardDescription>
          Here is an AI-generated summary of the most important concepts from the course.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {summaryData.summary.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}


function SummarySkeleton() {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/2 mb-2" />
          <Skeleton className="h-4 w-full" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-start gap-3">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-full" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

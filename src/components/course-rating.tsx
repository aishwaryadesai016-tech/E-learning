"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export function CourseRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (rating === 0) {
      toast({
        title: "No rating selected",
        description: "Please select a rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    // In a real app, you would submit this rating to your backend.
    console.log("Submitted rating:", rating);
    toast({
      title: "Rating submitted!",
      description: `You rated this course ${rating} out of 5 stars.`,
    });
  };

  return (
    <Card className="bg-primary/5 border-primary/20 sticky top-6">
      <CardHeader>
        <CardTitle className="font-headline">Rate this course</CardTitle>
        <CardDescription>
          Your feedback helps us improve recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="flex items-center justify-center gap-1 mb-4"
          onMouseLeave={() => setHoverRating(0)}
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="group"
              onClick={() => setRating(index)}
              onMouseEnter={() => setHoverRating(index)}
            >
              <Star
                className={cn(
                  "h-6 w-6 text-muted-foreground transition-colors duration-200",
                  (hoverRating >= index || rating >= index)
                    ? "text-amber-500 fill-amber-500"
                    : "group-hover:text-amber-500/50"
                )}
              />
            </Button>
          ))}
        </div>
        <Button className="w-full" variant="default" onClick={handleSubmit}>
          Complete & Submit Rating
        </Button>
      </CardContent>
    </Card>
  );
}


"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/courses";
import type { User } from "@/lib/users";
import { ArrowRight, Bookmark, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUser, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { updateDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

export function CourseCard({ course }: { course: Course }) {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, "users", user.uid);
  }, [firestore, user]);

  const { data: userData } = useDoc<User>(userDocRef);

  const isInWatchlist = userData?.watchlist?.includes(course.id) ?? false;

  const handleWatchlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!userDocRef) {
      toast({
        variant: "destructive",
        title: "Please log in",
        description: "You need to be logged in to modify your watchlist.",
      });
      return;
    }

    const updatePayload = {
      watchlist: isInWatchlist ? arrayRemove(course.id) : arrayUnion(course.id),
    };

    updateDocumentNonBlocking(userDocRef, updatePayload);

    toast({
      title: isInWatchlist ? "Removed from Watchlist" : "Added to Watchlist",
      description: `${course.title} has been ${
        isInWatchlist ? "removed from" : "added to"
      } your watchlist.`,
    });
  };

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-amber-100 text-amber-800 border-amber-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <Link href={`/courses/${course.id}`} className="group block h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:shadow-primary/10">
        <div className="relative h-40 w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={`course ${course.topic.toLowerCase()}`}
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <Badge
                className={cn(
                "border",
                difficultyColors[course.difficulty]
                )}
            >
                {course.difficulty}
            </Badge>
            {course.averageRating > 0 && (
                <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                    <span className="font-bold">{course.averageRating.toFixed(1)}</span>
                </Badge>
            )}
          </div>
          {user && (
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              onClick={handleWatchlistToggle}
            >
              <Bookmark
                className={cn(
                  "h-4 w-4 text-muted-foreground",
                  isInWatchlist && "fill-current text-primary"
                )}
              />
              <span className="sr-only">
                {isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}
              </span>
            </Button>
          )}
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-lg leading-tight">
            {course.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow pt-0">
          <CardDescription className="flex-grow mb-4 min-h-[60px]">
            {course.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1">
            {course.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <div className="p-6 pt-0 mt-auto">
          <div className="flex items-center text-sm font-semibold text-primary mt-2">
            View Course{" "}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}


"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/courses";
import type { User } from "@/lib/users";
import { ArrowRight, Bookmark, Star, Users, Clock } from "lucide-react";
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

  const isInWatchlist = userData?.watchlist?.includes(parseInt(course.id, 10)) ?? false;

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
      watchlist: isInWatchlist ? arrayRemove(parseInt(course.id, 10)) : arrayUnion(parseInt(course.id, 10)),
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
    Beginner: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
    Intermediate: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-700",
    Advanced: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700",
  };

  return (
    <Link href={`/courses/${course.id}`} className="group block h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:shadow-primary/10">
        <div className="relative h-48 w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={`course ${course.category.toLowerCase()}`}
          />
           <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
          />
          <Badge
                className={cn(
                "absolute top-3 left-3 border",
                difficultyColors[course.level]
                )}
            >
                {course.level}
            </Badge>
          {user && (
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 border-none"
              onClick={handleWatchlistToggle}
            >
              <Bookmark
                className={cn(
                  "h-4 w-4 text-white",
                  isInWatchlist && "fill-current text-primary"
                )}
              />
              <span className="sr-only">
                {isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}
              </span>
            </Button>
          )}
           <div className="absolute bottom-4 left-4 right-4">
              <CardTitle className="font-headline text-lg leading-tight text-white line-clamp-2">
                {course.title}
              </CardTitle>
           </div>
        </div>
        
        <CardContent className="flex flex-col flex-grow pt-4">
            <div className="flex justify-between text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm text-foreground">{course.rating.toFixed(1)}</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span>{course.total_enrollments}</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{course.duration.split('(')[0].trim()}</span>
                </div>
            </div>
            <p className="text-sm text-muted-foreground flex-grow mb-4 line-clamp-3 min-h-[60px]">
                {course.description}
            </p>
            <div className="flex flex-wrap gap-1">
                {course.skills_gained.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                </Badge>
                ))}
                {course.skills_gained.length > 3 && (
                     <Badge variant="secondary" className="font-normal">
                        +{course.skills_gained.length - 3} more
                    </Badge>
                )}
            </div>
        </CardContent>
        <div className="p-4 pt-0 mt-auto">
          <div className="flex items-center text-sm font-semibold text-primary mt-2">
            View Course{" "}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

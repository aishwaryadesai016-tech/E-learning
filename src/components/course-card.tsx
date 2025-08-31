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
import { ArrowRight } from "lucide-react";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block h-full"
    >
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
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-lg leading-tight">
            {course.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow pt-0">
          <CardDescription className="flex-grow mb-4">
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

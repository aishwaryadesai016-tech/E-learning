
import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Info, Star, BrainCircuit, BarChart, Clock, Book, Layers, ArrowRight, CheckCircle, Award, Users, Languages } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default async function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      {/* Course Header */}
      <div className="space-y-4">
          <Badge variant="outline" className="text-sm">{course.category}</Badge>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            {course.title}
          </h1>
          <p className="text-lg text-muted-foreground">{course.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    data-ai-hint={`course ${course.category.toLowerCase()}`}
                />
            </div>
        </div>
        <div className="md:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BarChart className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">Level: {course.level}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">Duration: {course.duration}</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Book className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{course.modules.length} Modules</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{course.total_enrollments} enrolled</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Star className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{course.rating} average rating</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Languages className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{course.language}</span>
                    </div>
                     {course.certificate_available && <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">Certificate available</span>
                    </div>}
                </CardContent>
            </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
            {/* What you'll learn */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <h2 className="font-headline text-2xl font-semibold">What You'll Learn</h2>
                </div>
                 <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {course.learning_objectives.map((objective, i) => (
                        <li key={i}>{objective}</li>
                    ))}
                </ul>
            </section>
            
            <Separator />

            {/* Syllabus Section */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h2 className="font-headline text-2xl font-semibold">Syllabus</h2>
                </div>
                <div className="space-y-4">
                    {course.modules.map((module) => (
                        <div key={module.week} className="p-4 border rounded-lg">
                            <h3 className="font-semibold">Week {module.week}: {module.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{module.topics.join(' · ')}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <Separator />
            
             {/* Reviews Section */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <Star className="h-6 w-6 text-primary" />
                    <h2 className="font-headline text-2xl font-semibold">Student Reviews</h2>
                </div>
                <div className="space-y-4">
                    {course.reviews.map((review, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold">{review.user}</p>
                                <div className="flex items-center gap-1 text-amber-500">
                                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 italic">"{review.comment}"</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        <div className="md:col-span-1 space-y-8">
            {/* Instructor Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={course.instructor.profile_image} alt={course.instructor.name} />
                        <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">{course.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor.designation}</p>
                </CardContent>
            </Card>

             {/* Skills Card */}
             <Card>
                <CardHeader>
                    <CardTitle>Skills You'll Gain</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {course.skills_gained.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </CardContent>
             </Card>

            {/* Quiz Section */}
            <Card className="bg-primary/10 border-primary/20">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-2">
                        <BrainCircuit className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Test Your Knowledge</CardTitle>
                    <CardDescription>
                        Ready to see what you've learned? Take a short quiz to check your understanding.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Button asChild size="lg">
                        <Link href={`/courses/${course.id}/quiz`}>
                            Start Quiz
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}


"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courseTopics } from "@/lib/courses";
import type { Course } from "@/lib/courses";
import { X, PlusCircle, RefreshCw, Wand2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    useFirestore,
} from "@/firebase";
import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { generateCourseTags } from "@/ai/flows/generate-course-tags";

const reviewSchema = z.object({
  user: z.string().min(1, "User name is required"),
  rating: z.coerce.number().min(1).max(5),
  comment: z.string().min(1, "Comment is required"),
});

const moduleSchema = z.object({
  title: z.string().min(1, "Module title is required"),
  topics: z.array(z.string()).min(1, "At least one topic is required"),
});

const courseFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  category: z.string().min(1, "Category is required"),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  duration: z.string().min(1, "Duration is required"),
  language: z.string().min(1, "Language is required"),
  image: z.string().url("Must be a valid URL"),
  skills_gained: z.array(z.string()).min(1, "At least one skill is required"),
  learning_objectives: z.array(z.string()).min(1, "At least one objective is required"),
  modules: z.array(moduleSchema).min(1, "At least one module is required"),
  instructor: z.object({
      name: z.string().min(1, "Instructor name is required"),
      designation: z.string().min(1, "Designation is required"),
      profile_image: z.string().url("Must be a valid URL"),
  }),
  reviews: z.array(reviewSchema).min(1, "At least one review is required"),
});

export type CourseFormValues = z.infer<typeof courseFormSchema>;

export function CourseForm({ course }: { course?: Course }) {
  const isEditing = !!course;
  const firestore = useFirestore();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGeneratingTags, setIsGeneratingTags] = useState(false);


  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: isEditing ? {
        ...course,
        // Ensure arrays are not undefined
        skills_gained: course.skills_gained || [],
        learning_objectives: course.learning_objectives || [],
        modules: course.modules || [],
        reviews: course.reviews || [],
    } : {
      title: "",
      description: "",
      level: "Beginner",
      language: "English",
      skills_gained: [],
      learning_objectives: [],
      modules: [{ title: "", topics: [""] }],
      reviews: [{ user: "Initial User", rating: 5, comment: "Great course!" }],
      image: "https://picsum.photos/seed/placeholder/600/400"
    },
  });

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control: form.control,
    name: "skills_gained",
  });

  const { fields: objectiveFields, append: appendObjective, remove: removeObjective } = useFieldArray({
    control: form.control,
    name: "learning_objectives",
  });

  const { fields: moduleFields, append: appendModule, remove: removeModule } = useFieldArray({
    control: form.control,
    name: "modules",
  });
  
  const handleGenerateTags = async () => {
    const title = form.getValues("title");
    const description = form.getValues("description");

    if (!title || !description) {
        toast({
            variant: "destructive",
            title: "Title and Description needed",
            description: "Please fill out the title and description before generating tags.",
        });
        return;
    }

    setIsGeneratingTags(true);
    try {
        const result = await generateCourseTags({ title, description });
        if (result.tags) {
            form.setValue("skills_gained", result.tags, { shouldValidate: true });
            toast({
                title: "AI Tags Generated!",
                description: "The suggested skills have been added.",
            });
        }
    } catch (error) {
        console.error("Failed to generate tags:", error);
        toast({
            variant: "destructive",
            title: "AI Error",
            description: "Could not generate AI tags. Please try again.",
        });
    } finally {
        setIsGeneratingTags(false);
    }
};

  const onSubmit = async (values: CourseFormValues) => {
    setIsSubmitting(true);
    try {
        const courseData = {
            ...values,
            rating: course?.rating || 0,
            total_enrollments: course?.total_enrollments || '0',
            platform: course?.platform || 'Internal',
            certificate_available: course?.certificate_available || true,
            course_link: course?.course_link || '#',
            lastUpdated: serverTimestamp(),
        };

        if (isEditing) {
            const courseRef = doc(firestore, "courses", course.id);
            await setDoc(courseRef, courseData, { merge: true });
            toast({
                title: "Course Updated",
                description: `"${values.title}" has been successfully updated.`,
            });
        } else {
            const collectionRef = collection(firestore, "courses");
            await addDoc(collectionRef, courseData);
            toast({
                title: "Course Created",
                description: `"${values.title}" has been successfully created.`,
            });
        }
        router.push("/admin");
    } catch (error) {
        console.error("Error saving course:", error);
        toast({
            variant: "destructive",
            title: "Save Failed",
            description: "An unexpected error occurred while saving the course.",
        });
        setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Introduction to Python" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="A detailed description of the course content..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {courseTopics.map(topic => (
                            <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., Approx. 6 months" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                 <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Language</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., English" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem className="md:col-span-2">
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                            <Input placeholder="https://..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            
             <FormField
              control={form.control}
              name="skills_gained"
              render={() => (
                <FormItem>
                    <div className="flex items-center justify-between">
                        <div>
                            <FormLabel>Skills Gained</FormLabel>
                            <FormDescription>List the key skills learners will acquire.</FormDescription>
                        </div>
                        <Button type="button" variant="outline" size="sm" onClick={handleGenerateTags} disabled={isGeneratingTags}>
                            {isGeneratingTags ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                            AI Generate
                        </Button>
                    </div>
                  
                  {skillFields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                        <FormControl>
                            <Input {...form.register(`skills_gained.${index}`)} />
                        </FormControl>
                        <Button type="button" variant="destructive" size="icon" onClick={() => removeSkill(index)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                  ))}
                   <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => appendSkill("")}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Skill
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : (isEditing ? 'Save Changes' : 'Create Course')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

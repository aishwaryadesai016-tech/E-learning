
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useFirestore } from "@/firebase";
import { deleteDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";
import type { Course } from "@/lib/courses";
import { doc } from "firebase/firestore";
import { useState } from "react";

interface DeleteCourseDialogProps {
    course: Course;
    onOpenChange: (open: boolean) => void;
}

export function DeleteCourseDialog({ course, onOpenChange }: DeleteCourseDialogProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const firestore = useFirestore();
    const { toast } = useToast();

    const handleDelete = async () => {
        setIsDeleting(true);
        const courseRef = doc(firestore, 'courses', course.id);
        deleteDocumentNonBlocking(courseRef);
        toast({
            title: "Course Deleted",
            description: `"${course.title}" has been permanently deleted.`,
        });
        onOpenChange(false);
    };

    return (
        <AlertDialog open onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the course
                        &quot;{course.title}&quot; and remove its data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                        {isDeleting ? "Deleting..." : "Yes, delete course"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}


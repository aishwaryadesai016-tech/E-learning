
export type User = {
    id: string;
    email: string;
    name: string;
    profilePicture?: string;
    completedCourseIds?: string[];
    interestTags?: string[];
    level?: "Beginner" | "Intermediate" | "Advanced";
    progress?: {
        [courseId: number]: {
            completedChapters: number[];
            progressPercentage: number;
        };
    };
    watchlist?: number[];
};

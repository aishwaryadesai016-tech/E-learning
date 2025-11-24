
export type User = {
    id: string;
    email: string;
    name: string;
    profilePicture?: string;
    completedCourseIds?: string[];
    interestTags?: string[];
    progress?: {
        [courseId: number]: {
            completedChapters: number[];
            progressPercentage: number;
        };
    };
    watchlist?: number[];
};

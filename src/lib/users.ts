
export type User = {
    id: string;
    email: string;
    name: string;
    profilePicture?: string;
    completedCourseIds?: string[];
    interestTags?: string[];
    level?: "Beginner" | "Intermediate" | "Advanced";
    progress?: {
        [courseId: string]: {
            completedChapters: number[];
            progressPercentage: number;
        };
    };
    watchlist?: string[];
    isAdmin?: boolean;
    isDisabled?: boolean;
};

export type Course = {
  id: string;
  title: string;
  category: string;
  rating: number;
  total_enrollments: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: string;
  platform: string;
  description: string;
  skills_gained: string[];
  learning_objectives: string[];
  modules: {
    title: string;
    topics: string[];
  }[];
  instructor: {
    name: string;
    designation: string;
    profile_image: string;
  };
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  certificate_available: boolean;
  course_link: string;
  image: string;
};


import CoursesLayout from "../courses/layout";

export default function RecommendationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CoursesLayout>{children}</CoursesLayout>;
}

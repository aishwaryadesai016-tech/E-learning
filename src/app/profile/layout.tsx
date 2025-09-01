import CoursesLayout from "../courses/layout";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CoursesLayout>{children}</CoursesLayout>;
}

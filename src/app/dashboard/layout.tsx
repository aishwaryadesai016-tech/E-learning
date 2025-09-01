import CoursesLayout from "../courses/layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CoursesLayout>{children}</CoursesLayout>;
}

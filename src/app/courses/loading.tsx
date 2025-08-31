import { Skeleton } from "@/components/ui/skeleton";

export default function CoursesLoading() {
  return (
    <>
      <div className="flex items-center">
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Skeleton className="h-10 w-full sm:max-w-xs" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-96 w-full" />
          ))}
        </div>
      </div>
    </>
  );
}

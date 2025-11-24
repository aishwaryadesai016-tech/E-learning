
import { Skeleton } from "@/components/ui/skeleton";

export default function SummaryLoading() {
  return (
    <div className="max-w-4xl mx-auto w-full">
        <Skeleton className="h-10 w-40 mb-8" />
        <Skeleton className="h-[600px] w-full" />
    </div>
  );
}

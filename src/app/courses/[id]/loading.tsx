
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CourseDetailLoading() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      <div className="space-y-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-5/6" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <Skeleton className="w-full aspect-video rounded-lg" />
        </div>
        <div className="md:col-span-1">
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/2 mb-2" />
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                </CardContent>
            </Card>
        </div>
      </div>

       <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/3 mb-2" />
                </CardHeader>
                <CardContent className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/3 mb-2" />
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-1 space-y-8">
            <Card>
                <CardHeader>
                     <Skeleton className="h-6 w-1/2 mb-2" />
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <Skeleton className="h-24 w-24 rounded-full mb-4" />
                    <Skeleton className="h-5 w-3/4 mb-1" />
                    <Skeleton className="h-4 w-full" />
                </CardContent>
            </Card>
        </div>
       </div>

    </div>
  );
}

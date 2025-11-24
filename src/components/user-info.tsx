
'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/firebase";

export function UserInfo() {
  const { user, isUserLoading } = useUser();

  if (isUserLoading) {
    return (
      <div className="flex items-center gap-3">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="space-y-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-32" />
        </div>
      </div>
    );
  }

  if (user) {
    const displayName = user.displayName || 'User';
    const email = user.email || 'No email provided';

    return (
        <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border">
              <AvatarImage src={user.photoURL || `https://avatar.vercel.sh/${user.uid}.png`} alt={displayName} data-ai-hint="profile avatar" />
              <AvatarFallback>{displayName.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs">
                <div className="font-medium">{displayName}</div>
                <div className="text-muted-foreground">{email}</div>
            </div>
        </div>
    );
  }

  return null;
}

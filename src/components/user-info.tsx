
'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser, useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import type { User } from "@/lib/users";


export function UserInfo() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  
  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const { data: userData, isLoading: isUserDocLoading } = useDoc<User>(userDocRef);

  const isLoading = isUserLoading || isUserDocLoading;

  if (isLoading) {
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

  if (user && userData) {
    const displayName = userData.name || user.displayName || 'User';
    const email = user.email || 'No email provided';

    return (
        <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border">
              <AvatarImage src={user.photoURL || `https://avatar.vercel.sh/${user.uid}.png`} alt={displayName} data-ai-hint="profile avatar" />
              <AvatarFallback>{displayName.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs">
                <div className="font-medium truncate">{displayName}</div>
                <div className="text-muted-foreground truncate">{email}</div>
            </div>
        </div>
    );
  }

  return null;
}


'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Bell } from "lucide-react";
import { Logo } from "@/components/logo";
import { Sidebar } from "./sidebar";
import { UserInfo } from "./user-info";

export function Header() {
  return (
    <header className="fixed top-0 z-40 flex h-14 w-full items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0 w-[280px] sm:w-[280px]">
             <Sidebar />
          </SheetContent>
        </Sheet>
        <Logo />
      </div>
      
      <div className="w-full flex-1">
        {/* Placeholder for potential header content like breadcrumbs */}
      </div>
      
      <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
      <UserInfo />
    </header>
  )
}

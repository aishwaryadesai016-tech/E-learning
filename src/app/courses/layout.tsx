
'use client'

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
      <div className="min-h-screen w-full">
        <Header />
        <div className="flex pt-14 lg:pt-[60px]">
            <div className="hidden md:block md:w-[220px] lg:w-[280px]">
                <Sidebar />
            </div>
            <main className="flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-y-auto">
                {children}
            </main>
        </div>
      </div>
  );
}

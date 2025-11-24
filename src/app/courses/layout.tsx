
'use client'

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-card md:block">
          <Sidebar />
        </div>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 mt-14 md:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}

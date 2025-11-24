
'use client'

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-card md:flex md:flex-col fixed h-full w-[220px] lg:w-[280px]">
        <Sidebar />
      </div>
      <div className="flex flex-col ml-[220px] lg:ml-[280px]">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-background/50">
          <div className="flex flex-col gap-4 lg:gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

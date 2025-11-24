
'use client'

import { Header } from "@/components/header";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <div className="grid">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 mt-14 md:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}

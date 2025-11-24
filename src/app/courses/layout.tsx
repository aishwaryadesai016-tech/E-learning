
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
        <div className="hidden md:block md:w-[220px] lg:w-[280px] h-full fixed pt-14 lg:pt-[60px]">
            <Sidebar />
        </div>
        <div className="flex flex-col md:ml-[220px] lg:ml-[280px]">
            <Header />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
            </main>
        </div>
      </div>
  );
}

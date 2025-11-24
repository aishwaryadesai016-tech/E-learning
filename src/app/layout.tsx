import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { FirebaseClientProvider } from "@/firebase";
import { ProgressProvider } from "@/lib/progress.tsx";

export const metadata: Metadata = {
  title: "E-learning recommendation system",
  description: "An E-Learning Recommendation System using Machine Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background flex flex-col")}>
        <FirebaseClientProvider>
            <ProgressProvider>
                {children}
            </ProgressProvider>
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}

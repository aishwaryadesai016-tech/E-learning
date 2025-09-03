import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import Image from "next/image";
import { ArrowRight, BookOpen, BrainCircuit, Target } from "lucide-react";
import { cn } from "@/lib/utils";

function PublicNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/courses"
            className="transition-colors hover:text-primary"
          >
            Courses
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Sign Up
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 text-center bg-card">
           <div 
              aria-hidden="true" 
              className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-30"
            />
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Unlock Your Potential with AI-Powered Learning
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Discover courses tailored just for you. Our intelligent recommendation system helps you find the perfect learning path to achieve your goals.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="/signup"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Get Started for Free
                </Link>
                <Link
                  href="/courses"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" })
                  )}
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Why Choose Our Platform?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    We leverage cutting-edge technology to create a personalized and effective learning experience.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-headline">Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Our AI engine analyzes your interests and progress to suggest courses that align with your career goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-headline">Interactive Quizzes</h3>
                <p className="text-muted-foreground">
                  Test your knowledge with AI-generated quizzes that adapt to the course content, ensuring you master key concepts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-headline">Vast Course Library</h3>
                <p className="text-muted-foreground">
                  Explore a wide range of topics in computer science, from programming and AI to systems and security.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
       <footer className="bg-card border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row px-4 md:px-6">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} E-learning recommendation system. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
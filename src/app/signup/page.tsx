
"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { courseTopics } from "@/lib/courses";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState("beginner");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInterestChange = (topic: string) => {
    setInterests((prev) =>
      prev.includes(topic)
        ? prev.filter((i) => i !== topic)
        : [...prev, topic]
    );
  };

  const handleSignup = () => {
    setError("");
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // In a real app, this would involve a call to your backend to create a user.
    // For this prototype, we'll use localStorage.
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((u: any) => u.email === email);

    if (existingUser) {
      setError("A user with this email already exists.");
      return;
    }

    const newUser = {
      fullName,
      email,
      password, // In a real app, you would hash this password
      interests,
      skillLevel,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Simulate a session by storing user info
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setError("");
    router.push("/courses");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background/50 p-4">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
          <GraduationCap className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold font-headline">Create an Account</h1>
        <p className="text-muted-foreground mt-1">
          Start your learning journey with us.
        </p>
      </div>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                placeholder="John Doe"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Areas of Interest</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {courseTopics.map(topic => (
                    <div key={topic} className="flex items-center space-x-2">
                        <Checkbox id={topic} onCheckedChange={() => handleInterestChange(topic)} />
                        <Label htmlFor={topic} className="font-normal">{topic}</Label>
                    </div>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Current Skill Level</Label>
             <RadioGroup defaultValue={skillLevel} onValueChange={setSkillLevel} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner" />
                <Label htmlFor="beginner" className="font-normal">Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate" className="font-normal">Intermediate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced" className="font-normal">Advanced</Label>
              </div>
            </RadioGroup>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" onClick={handleSignup}>
            Sign Up & Start Learning
          </Button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

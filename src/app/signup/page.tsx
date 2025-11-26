
"use client";

import Link from "next/link";
import { GraduationCap, Eye, EyeOff } from "lucide-react";
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
import { courseTopics } from "@/lib/courses";
import { useAuth, useFirestore } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc } from "firebase/firestore";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [interestTags, setInterestTags] = useState<string[]>([]);
  const [level, setLevel] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const firestore = useFirestore();
  const { toast } = useToast();

  const handleInterestChange = (topic: string) => {
    setInterestTags((prev) =>
      prev.includes(topic)
        ? prev.filter((i) => i !== topic)
        : [...prev, topic]
    );
  };

  const handleSignup = async () => {
    if (!fullName || !email || !password || !confirmPassword || !level) {
      toast({
        variant: "destructive",
        title: "Missing Fields",
        description: "Please fill in all required fields.",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Password Mismatch",
        description: "Passwords do not match.",
      });
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Create user profile in Firestore
      const userDocRef = doc(firestore, "users", user.uid);
      const userProfile = {
        id: user.uid,
        name: fullName,
        email: user.email,
        interestTags: interestTags,
        completedCourseIds: [],
        level: level,
        watchlist: [],
        progress: {},
        // Check if the email is the special admin email
        isAdmin: email === "admin@example.com",
      };
      
      setDocumentNonBlocking(userDocRef, userProfile, { merge: true });

      toast({
        title: "Account Created!",
        description: "Welcome! You are now being redirected.",
      });

      router.push("/courses");
    } catch (error: any) {
      console.error("Signup failed:", error);
      let description = "An unexpected error occurred. Please try again later.";
      if (error.code === "auth/email-already-in-use") {
        description = "This email address is already in use.";
      } else if (error.code === "auth/weak-password") {
        description = "The password is too weak. Please use at least 6 characters.";
      }
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: description,
      });
    } finally {
      setLoading(false);
    }
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
                disabled={loading}
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
                disabled={loading}
              />
            </div>
            <div className="grid gap-2 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
                disabled={loading}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-7 h-7 w-7 text-muted-foreground"
                onClick={() => setShowPassword((prev) => !prev)}
                disabled={loading}
              >
                {showPassword ? <EyeOff /> : <Eye />}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
            <div className="grid gap-2 relative">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pr-10"
                disabled={loading}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-7 h-7 w-7 text-muted-foreground"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                disabled={loading}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
                <span className="sr-only">
                  {showConfirmPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Your Experience Level</Label>
             <RadioGroup onValueChange={setLevel} value={level} className="flex gap-4 pt-2">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Beginner" id="r1" />
                    <Label htmlFor="r1">Beginner</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Intermediate" id="r2" />
                    <Label htmlFor="r2">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Advanced" id="r3" />
                    <Label htmlFor="r3">Advanced</Label>
                </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label>Areas of Interest</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {courseTopics.map((topic) => (
                <div key={topic} className="flex items-center space-x-2">
                  <Checkbox
                    id={topic}
                    onCheckedChange={() => handleInterestChange(topic)}
                    disabled={loading}
                  />
                  <Label htmlFor={topic} className="font-normal">
                    {topic}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            className="w-full"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up & Start Learning"}
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

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User, Send, CornerDownLeft, BrainCircuit } from "lucide-react";
import { answerCourseQuestion } from "@/ai/flows/answer-course-question";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

type Message = {
  role: "user" | "bot";
  content: string;
};

export function CourseQa({ courseContent }: { courseContent: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const result = await answerCourseQuestion({
        courseContent: courseContent,
        question: input,
      });
      const botMessage: Message = { role: "bot", content: result.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching answer:", error);
      const errorMessage: Message = {
        role: "bot",
        content: "Sorry, I ran into an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="p-2 bg-primary/10 rounded-full">
            <BrainCircuit className="h-5 w-5 text-primary" />
          </span>
          <CardTitle className="font-headline">Course Q&A</CardTitle>
        </div>
        <CardDescription>
          Ask the AI assistant anything about this course.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 text-sm ${
                  message.role === "user" ? "justify-end" : ""
                }`}
              >
                {message.role === "bot" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-xs rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p>{message.content}</p>
                </div>
                 {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                     <AvatarFallback>
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {loading && (
                <div className="flex gap-3 text-sm">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback>
                        <Bot className="h-5 w-5" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="max-w-xs rounded-lg p-3 bg-muted w-full">
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={handleSendMessage}
          className="flex w-full items-center space-x-2"
        >
          <Input
            id="message"
            placeholder="Ask a question..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" size="icon" disabled={loading}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

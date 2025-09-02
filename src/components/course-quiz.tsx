
"use client";

import { useState, useEffect } from "react";
import { generateQuiz } from "@/ai/flows/generate-quiz";
import type { GenerateQuizOutput } from "@/ai/flows/generate-quiz";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

type QuizState = {
  selectedAnswers: (number | null)[];
  submitted: boolean;
  score: number;
};

export function CourseQuiz({
  courseTitle,
  courseContent,
}: {
  courseTitle: string;
  courseContent: string;
}) {
  const [quizData, setQuizData] = useState<GenerateQuizOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<QuizState>({
    selectedAnswers: [],
    submitted: false,
    score: 0,
  });

  const fetchQuiz = async () => {
    setLoading(true);
    setError(null);
    setQuizData(null);
    setQuizState({
        selectedAnswers: [],
        submitted: false,
        score: 0,
    })
    try {
      const result = await generateQuiz({ courseTitle, courseContent });
      setQuizData(result);
      setQuizState(prev => ({ ...prev, selectedAnswers: Array(result.questions.length).fill(null) }));
    } catch (err) {
      console.error("Failed to generate quiz:", err);
      setError("The AI-powered quiz could not be generated. This may be due to a missing API key in the application's environment configuration. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, [courseTitle, courseContent]);

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    if (quizState.submitted) return;
    const newAnswers = [...quizState.selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizState(prev => ({...prev, selectedAnswers: newAnswers}));
  };

  const handleSubmit = () => {
    if (!quizData) return;
    let newScore = 0;
    quizData.questions.forEach((q, i) => {
        if (quizState.selectedAnswers[i] === q.correctAnswerIndex) {
            newScore++;
        }
    });
    setQuizState(prev => ({...prev, submitted: true, score: newScore}));
  }

  const getOptionClassName = (questionIndex: number, optionIndex: number) => {
    if (!quizState.submitted || !quizData) return "";

    const question = quizData.questions[questionIndex];
    const isCorrect = optionIndex === question.correctAnswerIndex;
    const isSelected = optionIndex === quizState.selectedAnswers[questionIndex];

    if (isCorrect) return "bg-green-100 border-green-300 dark:bg-green-900/50 dark:border-green-700";
    if (isSelected && !isCorrect) return "bg-red-100 border-red-300 dark:bg-red-900/50 dark:border-red-700";
    return "border-muted";
  }


  if (loading) {
    return <QuizSkeleton />;
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={fetchQuiz} className="mt-4">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!quizData) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz Time!</CardTitle>
        <CardDescription>
          Check your understanding of the course material.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {quizData.questions.map((q, qIndex) => (
          <div key={qIndex}>
            <p className="font-semibold mb-4">{qIndex + 1}. {q.questionText}</p>
            <RadioGroup
              value={String(quizState.selectedAnswers[qIndex])}
              onValueChange={(value) => handleAnswerChange(qIndex, parseInt(value))}
              disabled={quizState.submitted}
            >
              {q.options.map((option, oIndex) => (
                <Label
                  key={oIndex}
                  htmlFor={`q${qIndex}o${oIndex}`}
                  className={cn(
                    "flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors",
                    "hover:bg-muted/50",
                    getOptionClassName(qIndex, oIndex)
                  )}
                >
                  <RadioGroupItem value={String(oIndex)} id={`q${qIndex}o${oIndex}`} />
                  <span>{option}</span>
                </Label>
              ))}
            </RadioGroup>
            {quizState.submitted && (
                <div className="mt-4 p-4 rounded-lg bg-secondary/50 text-sm">
                   <p className="font-semibold mb-2">Explanation:</p>
                   <p className="text-muted-foreground">{q.explanation}</p>
                </div>
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4">
        {quizState.submitted ? (
            <div className="text-center">
                <p className="text-2xl font-bold">You scored {quizState.score} out of {quizData.questions.length}!</p>
                <Button onClick={fetchQuiz} className="mt-4">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Another Quiz
                </Button>
            </div>
        ) : (
             <Button onClick={handleSubmit} disabled={quizState.selectedAnswers.includes(null)}>
                Submit Quiz
             </Button>
        )}
      </CardFooter>
    </Card>
  );
}


function QuizSkeleton() {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent className="space-y-8">
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              <Skeleton className="h-5 w-3/4 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }


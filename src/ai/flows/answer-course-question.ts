'use server';

/**
 * @fileOverview Answers questions about a course based on its content.
 *
 * - answerCourseQuestion - A function that answers user questions.
 * - AnswerCourseQuestionInput - The input type for the function.
 * - AnswerCourseQuestionOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerCourseQuestionInputSchema = z.object({
  courseContent: z.string().describe('The full content of the course.'),
  question: z.string().describe("The user's question about the course."),
});
export type AnswerCourseQuestionInput = z.infer<typeof AnswerCourseQuestionInputSchema>;

const AnswerCourseQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the user\'s question.'),
});
export type AnswerCourseQuestionOutput = z.infer<typeof AnswerCourseQuestionOutputSchema>;

export async function answerCourseQuestion(input: AnswerCourseQuestionInput): Promise<AnswerCourseQuestionOutput> {
  return answerCourseQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerCourseQuestionPrompt',
  input: {schema: AnswerCourseQuestionInputSchema},
  output: {schema: AnswerCourseQuestionOutputSchema},
  prompt: `You are an expert teaching assistant. Your goal is to answer a student's question based *only* on the provided course content. Do not use any external knowledge. If the answer cannot be found in the content, state that clearly.

Here is the course content:
---
{{{courseContent}}}
---

Here is the student's question:
"{{{question}}}"

Answer the question based on the provided content.`,
});

const answerCourseQuestionFlow = ai.defineFlow(
  {
    name: 'answerCourseQuestionFlow',
    inputSchema: AnswerCourseQuestionInputSchema,
    outputSchema: AnswerCourseQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileOverview Generates a summary of key takeaways for a given course.
 *
 * - generateCourseSummary - A function that generates a course summary.
 * - GenerateCourseSummaryInput - The input type for the generateCourseSummary function.
 * - GenerateCourseSummaryOutput - The return type for the generateCourseSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCourseSummaryInputSchema = z.object({
  courseTitle: z.string().describe('The title of the course.'),
  courseContent: z.string().describe('The full content of the course, including all chapters.'),
});
export type GenerateCourseSummaryInput = z.infer<typeof GenerateCourseSummaryInputSchema>;

const GenerateCourseSummaryOutputSchema = z.object({
  summary: z.array(z.string()).describe('An array of key takeaways from the course, formatted as a bulleted list.'),
});
export type GenerateCourseSummaryOutput = z.infer<typeof GenerateCourseSummaryOutputSchema>;


export async function generateCourseSummary(input: GenerateCourseSummaryInput): Promise<GenerateCourseSummaryOutput> {
  return generateCourseSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCourseSummaryPrompt',
  input: {schema: GenerateCourseSummaryInputSchema},
  output: {schema: GenerateCourseSummaryOutputSchema},
  prompt: `You are an expert educator specializing in creating concise educational content for Computer Science.

  Based on the title and content of the provided course, generate a bulleted list of the top 5-7 key takeaways or most important concepts.

  Course Title: {{{courseTitle}}}
  Course Content:
  {{{courseContent}}}
  
  Focus on the most critical points a learner should remember after completing the course.
  Return the summary as a JSON object with a "summary" key containing an array of strings.`,
});

const generateCourseSummaryFlow = ai.defineFlow(
  {
    name: 'generateCourseSummaryFlow',
    inputSchema: GenerateCourseSummaryInputSchema,
    outputSchema: GenerateCourseSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

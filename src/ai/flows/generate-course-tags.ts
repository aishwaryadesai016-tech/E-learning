'use server';

/**
 * @fileOverview Generates relevant tags for a given course title and description.
 *
 * - generateCourseTags - A function that generates course tags.
 * - GenerateCourseTagsInput - The input type for the generateCourseTags function.
 * - GenerateCourseTagsOutput - The return type for the generateCourseTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCourseTagsInputSchema = z.object({
  title: z.string().describe('The title of the course.'),
  description: z.string().describe('The description of the course.'),
});
export type GenerateCourseTagsInput = z.infer<typeof GenerateCourseTagsInputSchema>;

const GenerateCourseTagsOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of relevant tags for the course.'),
});
export type GenerateCourseTagsOutput = z.infer<typeof GenerateCourseTagsOutputSchema>;

export async function generateCourseTags(input: GenerateCourseTagsInput): Promise<GenerateCourseTagsOutput> {
  return generateCourseTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCourseTagsPrompt',
  input: {schema: GenerateCourseTagsInputSchema},
  output: {schema: GenerateCourseTagsOutputSchema},
  prompt: `You are an expert in Computer Science course content.

  Based on the title and description of a course, generate a list of relevant tags that can be used to filter and find the course.
  The tags should be specific and related to the content of the course.

  Title: {{{title}}}
  Description: {{{description}}}

  Tags:`, // Removed the extra space here
});

const generateCourseTagsFlow = ai.defineFlow(
  {
    name: 'generateCourseTagsFlow',
    inputSchema: GenerateCourseTagsInputSchema,
    outputSchema: GenerateCourseTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

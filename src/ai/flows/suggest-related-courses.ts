
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting related courses based on content similarity.
 *
 * - suggestRelatedCourses - A function that suggests related courses based on a given course's content.
 * - SuggestRelatedCoursesInput - The input type for the suggestRelatedCourses function.
 * - SuggestRelatedCoursesOutput - The return type for the suggestRelatedCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelatedCoursesInputSchema = z.object({
  courseTitle: z.string().describe('The title of the course.'),
  courseDescription: z.string().describe('The description of the course.'),
});
export type SuggestRelatedCoursesInput = z.infer<typeof SuggestRelatedCoursesInputSchema>;

const SuggestedCourseSchema = z.object({
  title: z.string().describe('The title of the suggested course.'),
  description: z.string().describe('A brief description of the suggested course.'),
  similarityScore: z.number().describe('A score indicating the similarity between the input course and the suggested course.'),
});

const SuggestRelatedCoursesOutputSchema = z.array(SuggestedCourseSchema).describe('An array of suggested courses related to the input course.');
export type SuggestRelatedCoursesOutput = z.infer<typeof SuggestRelatedCoursesOutputSchema>;

export async function suggestRelatedCourses(input: SuggestRelatedCoursesInput): Promise<SuggestRelatedCoursesOutput> {
  return suggestRelatedCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedCoursesPrompt',
  input: {schema: SuggestRelatedCoursesInputSchema},
  output: {schema: SuggestRelatedCoursesOutputSchema},
  prompt: `You are an AI course recommendation system. Given a course title and description, you will suggest other related courses.

Course Title: {{{courseTitle}}}
Course Description: {{{courseDescription}}}

Suggest related courses based on content similarity.  Return an array of courses, each with a title, description, and similarity score. The similarity score should be between 0 and 1, where 1 is a perfect match.

Return the results in JSON format.`, 
});

const suggestRelatedCoursesFlow = ai.defineFlow(
  {
    name: 'suggestRelatedCoursesFlow',
    inputSchema: SuggestRelatedCoursesInputSchema,
    outputSchema: SuggestRelatedCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

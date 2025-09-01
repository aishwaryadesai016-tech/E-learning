import { config } from 'dotenv';
config();

import '@/ai/flows/generate-course-tags.ts';
import '@/ai/flows/suggest-related-courses.ts';
import '@/ai/flows/answer-course-question.ts';

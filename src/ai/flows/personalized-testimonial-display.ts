'use server';

/**
 * @fileOverview This file defines a Genkit flow for displaying personalized testimonials.
 *
 * - getPersonalizedTestimonial - A function that retrieves a personalized testimonial based on user input.
 * - PersonalizedTestimonialInput - The input type for the getPersonalizedTestimonial function.
 * - PersonalizedTestimonialOutput - The return type for the getPersonalizedTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTestimonialInputSchema = z.object({
  userProfile: z
    .string()
    .describe(
      'A description of the user profile and interests, including demographics, professional background, and reasons for visiting the site.'
    ),
  testimonialBank: z
    .string()
    .describe(
      'A list of available testimonials to choose from. Each testimonial should include the speaker and the content of their testimonial.'
    ),
});
export type PersonalizedTestimonialInput = z.infer<
  typeof PersonalizedTestimonialInputSchema
>;

const PersonalizedTestimonialOutputSchema = z.object({
  chosenTestimonial: z
    .string()
    .describe(
      'The testimonial chosen from the testimonial bank that is most relevant to the user profile.'
    ),
});
export type PersonalizedTestimonialOutput = z.infer<
  typeof PersonalizedTestimonialOutputSchema
>;

export async function getPersonalizedTestimonial(
  input: PersonalizedTestimonialInput
): Promise<PersonalizedTestimonialOutput> {
  return personalizedTestimonialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTestimonialPrompt',
  input: {schema: PersonalizedTestimonialInputSchema},
  output: {schema: PersonalizedTestimonialOutputSchema},
  prompt: `Given the following user profile:\n\n{{{userProfile}}}\n\nAnd the following bank of testimonials:\n\n{{{testimonialBank}}}\n\nChoose the single testimonial from the testimonial bank that would be most relevant and impactful for the user. Consider the user's background, interests, and goals when making your selection. Return ONLY the content of the selected testimonial.\n`,
});

const personalizedTestimonialFlow = ai.defineFlow(
  {
    name: 'personalizedTestimonialFlow',
    inputSchema: PersonalizedTestimonialInputSchema,
    outputSchema: PersonalizedTestimonialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {chosenTestimonial: output!.chosenTestimonial!};
  }
);

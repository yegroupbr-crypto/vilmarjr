'use server';

import { getPersonalizedTestimonial } from '@/ai/flows/personalized-testimonial-display';
import type { PersonalizedTestimonialInput } from '@/ai/flows/personalized-testimonial-display';

export async function getTestimonialAction(
  input: PersonalizedTestimonialInput
): Promise<string> {
  try {
    const result = await getPersonalizedTestimonial(input);
    return result.chosenTestimonial;
  } catch (error) {
    console.error('Error fetching personalized testimonial:', error);
    return 'O Junior tornou o sonho da casa própria uma realidade! Como comprador de primeira viagem, eu estava perdido, mas ele me guiou em cada passo do financiamento. Recomendo demais! - Ana Silva';
  }
}

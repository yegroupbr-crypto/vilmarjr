'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getTestimonialAction } from '@/app/actions';
import type { PersonalizedTestimonialInput } from '@/ai/flows/personalized-testimonial-display';
import { MessageSquareQuote } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PersonalizedTestimonialProps {
  input: PersonalizedTestimonialInput;
}

export function PersonalizedTestimonial({ input }: PersonalizedTestimonialProps) {
  const [testimonial, setTestimonial] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        setLoading(true);
        const result = await getTestimonialAction(input);
        setTestimonial(result);
      } catch (e) {
        toast({
          title: 'Erro de IA',
          description: 'Falha ao carregar o depoimento personalizado.',
          variant: 'destructive',
        });
        setTestimonial('O Junior tornou o sonho da casa própria uma realidade! Como comprador de primeira viagem, eu estava perdido, mas ele me guiou em cada passo do financiamento. Recomendo demais! - Ana Silva');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, [input, toast]);

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-headline">
          <MessageSquareQuote className="text-accent" />
          Depoimento em Destaque
        </CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground italic min-h-[6rem]">
        {loading ? (
          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        ) : (
          `"${testimonial}"`
        )}
      </CardContent>
    </Card>
  );
}

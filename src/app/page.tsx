import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Instagram, MapPin, Globe } from 'lucide-react';
import { PersonalizedTestimonial } from '@/components/personalized-testimonial';
import type { PersonalizedTestimonialInput } from '@/ai/flows/personalized-testimonial-display';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6s0-.3.1-.4c.1-.1.2-.2.4-.4.1-.1.2-.2.2-.4.1-.1 0-.3-.1-.4s-.7-1.7-.9-2.3c-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.2-.6.4-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.5 2.3 3.6 3.2.5.2.8.3 1.1.4.5.1.9.1 1.2-.1.4-.2.7-.9.8-1.7.1-.9.1-1.6 0-1.8-.1-.2-.3-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
  </svg>
);

export default function Home() {
  const testimonialInput: PersonalizedTestimonialInput = {
    userProfile:
      'Visitante interessado em comprar o primeiro imóvel, jovem adulto, planejando futuro financeiro.',
    testimonialBank: JSON.stringify([
      'O Junior tornou o sonho da casa própria uma realidade! Como comprador de primeira viagem, eu estava perdido, mas ele me guiou em cada passo do financiamento. Recomendo demais! - Ana Silva',
      'Eficiência e conhecimento definem o trabalho do Junior. Consegui o melhor financiamento para meu novo investimento imobiliário graças à sua consultoria. - Carlos Pereira',
      'Com a ajuda do Junior, nossa família finalmente conseguiu o financiamento para um lar maior. O processo foi tranquilo e sem estresse. - Família Oliveira',
    ]),
  };

  const gmapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Conect+Towers+QS+01+sala+639+Águas+Claras+Brasília+DF';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-6 lg:p-8 font-body">
      <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
        <Card className="overflow-hidden shadow-xl border-none bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6 text-center flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4 border-4 border-accent">
              <AvatarImage
                src="https://picsum.photos/200/200"
                alt="Junior Gualbertto"
                data-ai-hint="professional man"
                width={200}
                height={200}
              />
              <AvatarFallback>JG</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold font-headline text-foreground">
              Junior Gualbertto
            </h1>
            <p className="text-accent font-medium">
              Consultor especializado em financiamento de imóveis
            </p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button asChild className="w-full h-14 text-base font-semibold" size="lg">
            <a
              href="https://wa.me/5561998166292"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Entrar em contato via WhatsApp
            </a>
          </Button>
          <Button asChild className="w-full h-14 text-base font-semibold" size="lg">
            <a
              href="https://www.instagram.com/juniorgualbertto_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
              Siga-me no Instagram
            </a>
          </Button>
          <Button asChild className="w-full h-14 text-base font-semibold" size="lg">
            <a href={gmapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-6 h-6" />
              Visite meu escritório
            </a>
          </Button>
          <Button disabled className="w-full h-14 text-base font-semibold" size="lg">
            <Globe className="w-6 h-6" />
            Website (em breve)
          </Button>
        </div>

        <PersonalizedTestimonial input={testimonialInput} />

        <footer className="text-center text-xs text-muted-foreground pt-4">
          <p>Junior Gualbertto &copy; {new Date().getFullYear()}</p>
          <p className="mt-1">
            Conect Towers, QS 01, Sala 639, Águas Claras - Brasília/DF
          </p>
        </footer>
      </div>
    </main>
  );
}

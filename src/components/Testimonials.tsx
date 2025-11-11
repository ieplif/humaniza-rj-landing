import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Na Humaniza, me senti ouvida de verdade. Cada sessão foi um passo importante no meu processo de cura.",
      author: "Camila S."
    },
    {
      text: "O cuidado vai além do físico. Encontrei um espaço onde pude me reconectar comigo mesma.",
      author: "Juliana M."
    },
    {
      text: "Profissionais incríveis que realmente se importam. Minha qualidade de vida melhorou muito.",
      author: "Patricia R."
    },
    {
      text: "Nunca imaginei que a fisioterapia pélvica pudesse transformar tanto a minha vida. Gratidão!",
      author: "Ana Clara L."
    },
    {
      text: "Ambiente acolhedor e tratamento humanizado. Recomendo de coração!",
      author: "Mariana F."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Depoimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e cuidado
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto slide-up">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="h-full bg-gradient-to-br from-background to-rosy-beige/10 border-2 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      <Quote className="h-10 w-10 text-primary/30 mb-4" />
                      <p className="text-base leading-relaxed text-foreground mb-6 flex-grow italic">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold text-primary">— {testimonial.author}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

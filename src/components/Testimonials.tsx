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
      text: "Este estúdio de pilates é muito agradável e acolhedor. As profissionais são super competentes e atenciosas! Recomendo de olhos fechados! 🥰",
      author: "Suely L."
    },
    {
      text: "Fiz fisioterapia pélvica e amei o atendimento dispensado pela Caíssa, que, mediante tratamento e exercícios, possibilitou que eu tivesse o meu desejado parto normal. Profissional competente, pontual e agradável.",
      author: "Ana Paula C."
    },
    {
      text: "Excelente espaço com um diferencial é só para mulheres.",
      author: "Patricia F."
    },
    {
      text: "Maravilhosa iluminou minha vida! Me fez calma e feliz novamente e confiante! Parabéns!",
      author: "Lúcia M."
    },
    {
      text: "Em 2023 procurei a Humaniza por conta da minha gestação, entrei com 12 semanas para iniciar o Pilates como indicação da minha obstetra para o parto. E foi a melhor decisão que eu tomei, além vir de uma vida sedentária, me ajudou com queixas antigas como dor de coluna e fraqueza nos joelhos. Agora estou com 39 semanas e tive também uma aula de parto com a Caíssa que é uma das fisioterapeutas que faz também a fisioterapia pélvica. É um lugar super completo, com alunas e instrutoras super acolhedoras. Super recomendo! Totalmente focada na saúde da mulher.",
      author: "Ester B."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-card">
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

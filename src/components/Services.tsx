import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Activity, Dumbbell, Stethoscope, Droplets } from "lucide-react";
import abstractPelvic from "@/assets/abstract-pelvic.jpg";
import abstractOrthopedic from "@/assets/abstract-orthopedic.jpg";
import abstractPilates from "@/assets/abstract-pilates.jpg";
import abstractDrainage from "@/assets/abstract-drainage.jpg";

interface ServiceDetail {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  fullDescription: string;
  benefits: string[];
  images: string[];
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      icon: Activity,
      title: "Fisioterapia Pélvica",
      description: "Tratamento especializado para saúde íntima, incontinência urinária, disfunções sexuais e recuperação pós-parto.",
      color: "from-sage to-sage/70",
      fullDescription: "A fisioterapia pélvica é uma especialidade voltada para o tratamento das disfunções do assoalho pélvico. Utilizamos técnicas manuais, exercícios específicos e recursos terapêuticos para restaurar a função muscular e promover qualidade de vida.",
      benefits: [
        "Tratamento de incontinência urinária e fecal",
        "Recuperação pós-parto e pós-cirúrgica",
        "Tratamento de disfunções sexuais",
        "Preparação para o parto",
        "Fortalecimento do assoalho pélvico",
      ],
      images: [abstractPelvic],
    },
    {
      icon: Stethoscope,
      title: "Fisioterapia Ortopédica",
      description: "Tratamento de dores musculares e articulares, reabilitação pós-cirúrgica e prevenção de lesões.",
      color: "from-light-blue to-light-blue/70",
      fullDescription: "A fisioterapia ortopédica atua na avaliação, prevenção e tratamento de disfunções musculoesqueléticas. Com técnicas modernas e baseadas em evidências, promovemos a recuperação funcional e o alívio da dor.",
      benefits: [
        "Alívio de dores crônicas e agudas",
        "Reabilitação pós-cirúrgica ortopédica",
        "Tratamento de lesões esportivas",
        "Correção postural",
        "Prevenção de lesões e recidivas",
      ],
      images: [abstractOrthopedic],
    },
    {
      icon: Dumbbell,
      title: "Pilates",
      description: "Fortalecimento, flexibilidade e consciência corporal através de movimentos controlados e respiração.",
      color: "from-burnt-earth to-burnt-earth/70",
      fullDescription: "O Pilates é um método de exercícios que trabalha corpo e mente de forma integrada. Através de movimentos precisos e controlados, promovemos o fortalecimento muscular, a flexibilidade e o equilíbrio corporal em um ambiente acolhedor.",
      benefits: [
        "Fortalecimento muscular global",
        "Melhora da flexibilidade e mobilidade",
        "Correção postural",
        "Alívio de dores na coluna",
        "Aumento da consciência corporal",
      ],
      images: [abstractPilates],
    },
    {
      icon: Droplets,
      title: "Drenagem",
      description: "Drenagem linfática para redução de inchaços, eliminação de toxinas e melhora da circulação.",
      color: "from-light-blue to-sage/70",
      fullDescription: "A drenagem linfática é uma técnica de massagem suave e rítmica que estimula o sistema linfático, promovendo a eliminação de líquidos retidos e toxinas. Ideal para quem busca bem-estar, redução de inchaços e melhora da circulação.",
      benefits: [
        "Redução de inchaços e retenção de líquidos",
        "Eliminação de toxinas do organismo",
        "Melhora da circulação sanguínea e linfática",
        "Relaxamento e bem-estar",
        "Auxílio no pós-operatório",
      ],
      images: [abstractDrainage],
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atendimento especializado e personalizado para cada necessidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 slide-up overflow-hidden flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="text-base leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-auto"
                    onClick={() => setSelectedService(service)}
                  >
                    Saiba mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                    <selectedService.icon className="h-6 w-6 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl">{selectedService.title}</DialogTitle>
                </div>
                <DialogDescription className="text-base leading-relaxed">
                  {selectedService.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="flex justify-center my-4">
                {selectedService.images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-[4/3]">
                    <img
                      src={img}
                      alt={`${selectedService.title} - imagem ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Benefícios</h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;

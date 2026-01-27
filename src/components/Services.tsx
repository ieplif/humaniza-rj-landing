import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Dumbbell, Stethoscope, Droplets } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Fisioterapia Pélvica",
      description: "Tratamento especializado para saúde íntima, incontinência urinária, disfunções sexuais e recuperação pós-parto.",
      color: "from-sage to-sage/70"
    },
    {
      icon: Stethoscope,
      title: "Fisioterapia Ortopédica",
      description: "Tratamento de dores musculares e articulares, reabilitação pós-cirúrgica e prevenção de lesões.",
      color: "from-light-blue to-light-blue/70"
    },
    {
      icon: Dumbbell,
      title: "Pilates",
      description: "Fortalecimento, flexibilidade e consciência corporal através de movimentos controlados e respiração.",
      color: "from-burnt-earth to-burnt-earth/70"
    },
    {
      icon: Droplets,
      title: "Drenagem",
      description: "Drenagem linfática para redução de inchaços, eliminação de toxinas e melhora da circulação.",
      color: "from-light-blue to-sage/70"
    },
  ];

  return (
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
                >
                  Saiba mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

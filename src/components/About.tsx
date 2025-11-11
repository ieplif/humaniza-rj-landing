import { Heart, Ear, Users, Sparkles } from "lucide-react";
import aboutImage from "@/assets/treatment-room.jpg";

const About = () => {
  const values = [
    { icon: Heart, label: "Empatia" },
    { icon: Ear, label: "Escuta ativa" },
    { icon: Users, label: "Acolhimento" },
    { icon: Sparkles, label: "Integração corpo e mente" },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Sobre nós
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Humaniza RJ nasceu com a missão de promover um cuidado que vai além do tratamento — 
                um espaço de escuta, acolhimento e transformação. Nossa equipe multidisciplinar trabalha 
                de forma integrada para cuidar da sua saúde física, emocional e mental.
              </p>
            </div>
            
            <div className="slide-up rounded-3xl overflow-hidden shadow-xl" style={{ animationDelay: "0.2s" }}>
              <img 
                src={aboutImage} 
                alt="Sala de atendimento do Humaniza RJ"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 slide-up">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-background/50 hover:bg-background transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

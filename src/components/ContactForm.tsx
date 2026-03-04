import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.service) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Aqui você pode integrar com um backend ou serviço de email
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Recebemos seu contato! Nossa equipe retornará em breve para confirmar o agendamento.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Dê o primeiro passo para cuidar de você
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário e entraremos em contato em breve
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 slide-up">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome"
                required
                className="bg-card"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu.email@exemplo.com"
                required
                className="bg-card"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <Input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="(21) 99999-9999"
                required
                className="bg-card"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">Tipo de atendimento *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pelvica">Fisioterapia Pélvica</SelectItem>
                  <SelectItem value="ortopedica">Fisioterapia Ortopédica</SelectItem>
                  <SelectItem value="pilates">Pilates</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Conte-nos um pouco sobre o que você precisa..."
                className="min-h-[120px] bg-card"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Enviar pedido de agendamento
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="slide-up space-y-4">
            <div className="rounded-xl overflow-hidden border border-border shadow-sm h-[300px] lg:h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5!2d-43.39!3d-22.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695dd2b0c1%3A0x0!2sEstr.+Cel.+Pedro+Corr%C3%AAa%2C+740+-+Jacarepagu%C3%A1%2C+Rio+de+Janeiro+-+RJ%2C+22775-090!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                📍 Estr. Cel. Pedro Corrêa, 740, Sala 807 — Barra Olímpica, Rio de Janeiro - RJ, 22775-090
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo número real do WhatsApp (formato: 5521999999999)
    const phoneNumber = "5521999999999";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os atendimentos do Humaniza RJ.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white z-50 group hover:scale-110 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default WhatsAppButton;

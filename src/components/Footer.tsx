import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-foreground">Humaniza RJ</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cuidado humanizado e integrado para sua saúde e bem-estar.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:contato@humanizarj.com.br" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@humanizarj.com.br
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Redes Sociais</h4>
            <a 
              href="https://www.instagram.com/humaniza.rj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
              @humaniza.rj
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Humaniza RJ — Todos os direitos reservados.</p>
          <p className="mt-2 italic">Cuidar é o primeiro passo para transformar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

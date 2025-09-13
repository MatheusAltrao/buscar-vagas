import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-muted py-16 px-4 rounded-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
          Encontre Sua Próxima Oportunidade
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Descubra milhares de vagas de emprego das melhores empresas. Sua carreira dos
          sonhos está a um clique de distância.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow-lg">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Cargo, palavra-chave ou empresa"
                className="pl-10 h-12 border-0 focus-visible:ring-2 focus-visible:ring-accent"
              />
            </div>
            <Button className="h-12 px-8 bg-accent text-accent-foreground hover:bg-accent/90">
              Buscar Vagas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

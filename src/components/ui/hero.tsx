"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
}
export function HeroSection({ title, description }: HeroSectionProps) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const isDisabled = inputValue.length === 0;

  const handleSearchApplications = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const encodedInput = encodeURIComponent(inputValue.trim());
      router.push(`/?search=${encodedInput}`);
    }
  };

  return (
    <section className="bg-muted py-16 px-4 rounded-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4 text-balance">{title}</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          {description}
        </p>

        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSearchApplications}
            className="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow-lg"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Cargo, palavra-chave ou empresa"
                className="pl-10 h-12 border-0 focus-visible:ring-2 focus-visible:ring-accent"
              />
            </div>
            <Button disabled={isDisabled} className="h-12 px-8">
              <Search /> Buscar Vagas
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { DoorOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between layout-area">
        <h1 className="text-xl font-semibold">
          Busca<span className="text-primary">Vagas</span>{" "}
        </h1>
        <Button variant="outline" size={"sm"}>
          <DoorOpen /> Entrar
        </Button>
      </div>
    </header>
  );
}

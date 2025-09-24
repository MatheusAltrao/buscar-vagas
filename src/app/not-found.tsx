import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 pt-[15vh] space-y-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <div>
        <h2 className="text-2xl font-medium">Página não encontrada</h2>
        <p className="text-muted-foreground">
          Não conseguimos encontrar o recurso solicitado.
        </p>
      </div>
      <Link href="/">
        <Button> Voltar para a página inicial</Button>
      </Link>
    </div>
  );
}

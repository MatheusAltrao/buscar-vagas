import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Back() {
  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft size={20} />
        Voltar para vagas
      </Link>
    </div>
  );
}

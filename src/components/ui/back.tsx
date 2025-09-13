"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function Back() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button className="p-0" variant={"link"} onClick={handleBack}>
      <ChevronLeft size={20} />
      Voltar para vagas
    </Button>
  );
}

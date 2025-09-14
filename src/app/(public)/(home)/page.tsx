import JobList from "@/app/(public)/(home)/job/[id]/components/job-list";
import { HeroSection } from "@/components/ui/hero";

interface HomePageProps {
  searchParams: {
    search?: string;
  };
}

export default function HomePage({ searchParams }: HomePageProps) {
  const search = searchParams?.search || "";
  return (
    <div className="min-h-screen layout-area pt-5 ">
      <HeroSection
        title="Vagas em Destaque"
        description="Explore as melhores oportunidades de emprego selecionadas especialmente para você"
        search={search}
      />
      <JobList search={search} />
    </div>
  );
}

import { HeroSection } from "@/app/(public)/(home)/components/hero";
import JobList from "@/app/(public)/(home)/job/[id]/components/job-list";

export default function HomePage() {
  return (
    <div className="min-h-screen layout-area pt-5 ">
      <HeroSection
        title="Vagas em Destaque"
        description="Explore as melhores oportunidades de emprego selecionadas especialmente para você"
      />
      <JobList />
    </div>
  );
}

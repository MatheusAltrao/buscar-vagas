import { HeroSection } from "@/app/(public)/(home)/components/hero";
import JobListUser from "./components/job-list-user";

export default function MyApplicationsPage() {
  return (
    <div className="min-h-screen layout-area pt-5 ">
      <HeroSection
        title="Suas candidaturas"
        description="Veja todas as vagas para as quais você se candidatou."
      />
      <JobListUser />
    </div>
  );
}

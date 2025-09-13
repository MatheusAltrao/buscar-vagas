import { HeroSection } from "@/components/home/secoes/hero";
import { JobList } from "@/components/home/secoes/job-list";

export default function Home() {
  return (
    <div className="min-h-screen layout-area pt-5 ">
      <HeroSection />
      <JobList />
    </div>
  );
}

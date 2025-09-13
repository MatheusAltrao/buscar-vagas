import { HeroSection } from "@/components/secoes/home/hero";
import JobList from "@/components/secoes/job/job-list";

export default function Home() {
  return (
    <div className="min-h-screen layout-area pt-5 ">
      <HeroSection />
      <JobList />
    </div>
  );
}

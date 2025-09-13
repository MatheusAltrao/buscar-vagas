import JobList from "@/app/(public)/(home)/[id]/components/job-list";
import { HeroSection } from "@/app/(public)/(home)/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen layout-area pt-5 ">
      <HeroSection />
      <JobList />
    </div>
  );
}

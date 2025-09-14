import { HeroSection } from "@/app/(public)/(home)/components/hero";
import JobList from "@/app/(public)/(home)/job/[id]/components/job-list";

export default function HomePage() {
  return (
    <div className="min-h-screen layout-area pt-5 ">
      <HeroSection />
      <JobList />
    </div>
  );
}

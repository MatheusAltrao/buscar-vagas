import Header from "@/components/home/secoes/header";
import { HeroSection } from "@/components/home/secoes/hero";
import { JobList } from "@/components/home/secoes/job-list";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="layout-area">
        <HeroSection />
        <JobList />
      </div>
    </div>
  );
}

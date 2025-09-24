import { HeroSection } from "@/components/ui/hero";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import JobListUser from "./components/job-list-user";

export default async function MyApplicationsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }
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

import { getAllJobs } from "@/actions/jobs/get-all-jobs";
import JobCard from "./job-card";

export default async function JobList() {
  const jobs = await getAllJobs();
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  mb-4">Vagas em Destaque</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore as melhores oportunidades de emprego selecionadas especialmente para
            você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

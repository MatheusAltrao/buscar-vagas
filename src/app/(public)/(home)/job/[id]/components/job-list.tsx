import { getAllJobs } from "@/actions/jobs/get-all-jobs";
import JobCard from "./job-card";

interface JobListProps {
  search?: string;
}

export default async function JobList({ search }: JobListProps) {
  const jobs = await getAllJobs(search);
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

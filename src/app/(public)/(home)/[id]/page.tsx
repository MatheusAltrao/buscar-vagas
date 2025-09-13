import { JobDetails } from "@/components/secoes/job/job-details";
import { JOBS } from "@/constants/jobs";
import { notFound } from "next/navigation";

interface JobPageProps {
  params: {
    id: string;
  };
}

export default function JobPage({ params }: JobPageProps) {
  const jobId = Number.parseInt(params.id);
  const selectedJob = JOBS.find((j) => j.id === jobId);

  if (!selectedJob) {
    notFound();
  }

  return (
    <div className="min-h-screen py-5">
      <JobDetails job={selectedJob} />
    </div>
  );
}

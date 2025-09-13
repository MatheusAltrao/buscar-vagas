import { getJobById } from "@/actions/jobs/get-job-by-id";
import { JobDetails } from "@/components/secoes/job/job-details";
import { notFound } from "next/navigation";

interface JobPageProps {
  params: {
    id: string;
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const paramsId = Number.parseInt(params.id);
  const job = await getJobById(paramsId);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen py-5">
      <JobDetails job={job} />
    </div>
  );
}

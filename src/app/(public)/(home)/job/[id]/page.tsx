import { registeredApplication } from "@/actions/applications/registered-application";
import { getJobById } from "@/actions/jobs/get-job-by-id";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import { JobDetails } from "./components/job-details";

interface JobPageProps {
  params: {
    id: string;
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const paramsId = Number(params.id);
  const job = await getJobById(paramsId);
  const session = await auth();

  if (!job) {
    notFound();
  }

  const isAuthtenticated = !!session?.user;
  const alreadyApplied = await registeredApplication(paramsId, session?.user?.id!);

  console.log(alreadyApplied);

  return (
    <div className="min-h-screen py-5">
      <JobDetails
        job={job}
        isAuthtenticated={isAuthtenticated}
        alreadyApplied={alreadyApplied}
      />
    </div>
  );
}

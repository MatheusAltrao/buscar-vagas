export interface ApplicationProps {
  id: number;
  userId: string;
  jobId: number;
  description: string;
  projectLink?: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  createdAt: Date;
  updatedAt: Date;
}

export interface ApplicationWithJob extends ApplicationProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
  };
}

export interface ApplicationWithUser extends ApplicationProps {
  user: {
    id: string;
    name?: string;
    email: string;
  };
}

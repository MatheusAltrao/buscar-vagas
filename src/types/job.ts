export interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "CLT" | "PJ" | "Freelance";
  salary: string;
  postedAt: string;
  description: string;
  tags: string[];
}

import { JobProps } from "@/types/job";
import JobCard from "./job-card";

const jobs = [
  {
    id: 1,
    title: "Desenvolvedor Frontend React",
    company: "TechCorp",
    location: "São Paulo, SP",
    type: "CLT",
    salary: "R$ 8.000 - R$ 12.000",
    postedAt: "2 dias atrás",
    description:
      "Buscamos desenvolvedor React experiente para integrar nossa equipe de frontend...",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: 2,
    title: "Designer UX/UI Sênior",
    company: "DesignStudio",
    location: "Rio de Janeiro, RJ",
    type: "PJ",
    salary: "R$ 6.000 - R$ 10.000",
    postedAt: "1 dia atrás",
    description:
      "Procuramos designer experiente para criar experiências digitais incríveis...",
    tags: ["Figma", "Design System", "Prototipagem"],
  },
  {
    id: 3,
    title: "Desenvolvedor Full Stack",
    company: "StartupXYZ",
    location: "Remoto",
    type: "CLT",
    salary: "R$ 10.000 - R$ 15.000",
    postedAt: "3 dias atrás",
    description:
      "Oportunidade para trabalhar com tecnologias modernas em ambiente startup...",
    tags: ["Node.js", "React", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Product Manager",
    company: "InnovaCorp",
    location: "Belo Horizonte, MG",
    type: "CLT",
    salary: "R$ 12.000 - R$ 18.000",
    postedAt: "1 semana atrás",
    description: "Lidere o desenvolvimento de produtos digitais inovadores...",
    tags: ["Agile", "Analytics", "Roadmap"],
  },
  {
    id: 5,
    title: "Engenheiro de Dados",
    company: "DataTech",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 14.000 - R$ 20.000",
    postedAt: "4 dias atrás",
    description: "Construa pipelines de dados robustos e escaláveis...",
    tags: ["Python", "AWS", "Apache Spark"],
  },
  {
    id: 6,
    title: "Desenvolvedor Mobile Flutter",
    company: "MobileFirst",
    location: "Curitiba, PR",
    type: "CLT",
    salary: "R$ 7.000 - R$ 11.000",
    postedAt: "5 dias atrás",
    description: "Desenvolva aplicativos móveis de alta qualidade usando Flutter...",
    tags: ["Flutter", "Dart", "Firebase"],
  },
] as JobProps[];

export function JobList() {
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

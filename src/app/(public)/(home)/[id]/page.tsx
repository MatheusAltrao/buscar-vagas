import { JobDetails } from "@/components/home/secoes/job-details";
import { notFound } from "next/navigation";

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
      "Buscamos desenvolvedor React experiente para integrar nossa equipe de frontend. Você será responsável por desenvolver interfaces modernas e responsivas, trabalhando em colaboração com designers e desenvolvedores backend.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Estamos procurando um Desenvolvedor Frontend React para se juntar à nossa equipe dinâmica. Você trabalhará em projetos desafiadores, desenvolvendo aplicações web modernas e escaláveis.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver interfaces de usuário responsivas usando React e TypeScript</li>
        <li>Colaborar com designers para implementar designs pixel-perfect</li>
        <li>Otimizar aplicações para máxima velocidade e escalabilidade</li>
        <li>Participar de code reviews e manter padrões de qualidade</li>
        <li>Trabalhar com APIs RESTful e GraphQL</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência com React</li>
        <li>Conhecimento sólido em TypeScript</li>
        <li>Experiência com Next.js</li>
        <li>Conhecimento em CSS-in-JS ou Tailwind CSS</li>
        <li>Experiência com Git e metodologias ágeis</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e alimentação</li>
        <li>Home office flexível</li>
        <li>Auxílio educação</li>
        <li>Participação nos lucros</li>
      </ul>
    `,
    tags: ["React", "TypeScript", "Next.js"],
    companyLogo: "/abstract-tech-logo.png",
    companyDescription:
      "A TechCorp é uma empresa líder em soluções tecnológicas, focada em inovação e excelência.",
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
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Designer UX/UI Sênior para liderar projetos de design e criar experiências digitais excepcionais.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Criar wireframes, protótipos e designs de alta fidelidade</li>
        <li>Conduzir pesquisas de usuário e testes de usabilidade</li>
        <li>Desenvolver e manter design systems</li>
        <li>Colaborar com equipes de produto e desenvolvimento</li>
      </ul>
    `,
    tags: ["Figma", "Design System", "Prototipagem"],
    companyLogo: "/design-studio-logo.png",
    companyDescription:
      "DesignStudio é um estúdio criativo especializado em experiências digitais inovadoras.",
  },
];

interface JobPageProps {
  params: {
    id: string;
  };
}

export default function JobPage({ params }: JobPageProps) {
  const jobId = Number.parseInt(params.id);
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen py-5">
      <JobDetails job={job} />
    </div>
  );
}

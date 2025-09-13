import { JobProps } from "@/types/job";

export const JOBS = [
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
      "Procuramos designer experiente para criar experiências digitais incríveis e interfaces intuitivas que encantem os usuários.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Designer UX/UI Sênior para liderar projetos de design e criar experiências digitais excepcionais.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Criar wireframes, protótipos e designs de alta fidelidade</li>
        <li>Conduzir pesquisas de usuário e testes de usabilidade</li>
        <li>Desenvolver e manter design systems</li>
        <li>Colaborar com equipes de produto e desenvolvimento</li>
        <li>Definir diretrizes de experiência do usuário</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>5+ anos de experiência em UX/UI Design</li>
        <li>Proficiência em Figma e ferramentas de prototipagem</li>
        <li>Experiência com design systems</li>
        <li>Conhecimento em metodologias de pesquisa UX</li>
        <li>Portfolio robusto com cases de sucesso</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho remoto</li>
        <li>Horário flexível</li>
        <li>Orçamento para cursos e eventos</li>
        <li>Equipamentos de última geração</li>
      </ul>
    `,
    tags: ["Figma", "Design System", "Prototipagem"],

    companyDescription:
      "DesignStudio é um estúdio criativo especializado em experiências digitais inovadoras.",
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
      "Oportunidade para trabalhar com tecnologias modernas em ambiente startup dinâmico e inovador.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Junte-se à nossa startup inovadora e trabalhe com as tecnologias mais modernas do mercado. Você terá a oportunidade de impactar diretamente o crescimento da empresa.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver aplicações full stack usando Node.js e React</li>
        <li>Projetar e implementar APIs RESTful</li>
        <li>Trabalhar com bancos de dados PostgreSQL</li>
        <li>Implementar testes automatizados</li>
        <li>Participar das decisões técnicas da empresa</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência em desenvolvimento full stack</li>
        <li>Experiência com Node.js e React</li>
        <li>Conhecimento em PostgreSQL</li>
        <li>Experiência com Docker e AWS</li>
        <li>Mentalidade startup e adaptabilidade</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Equity da empresa</li>
        <li>Trabalho 100% remoto</li>
        <li>Orçamento para setup home office</li>
        <li>Plano de saúde premium</li>
        <li>Férias ilimitadas</li>
      </ul>
    `,
    tags: ["Node.js", "React", "PostgreSQL"],
    companyLogo: "/startup-xyz-logo.png",
    companyDescription:
      "StartupXYZ é uma startup em crescimento focada em soluções tecnológicas disruptivas.",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "InnovaCorp",
    location: "Belo Horizonte, MG",
    type: "CLT",
    salary: "R$ 12.000 - R$ 18.000",
    postedAt: "1 semana atrás",
    description:
      "Lidere o desenvolvimento de produtos digitais inovadores e estratégias de crescimento.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Product Manager experiente para liderar o desenvolvimento de produtos digitais e definir estratégias de crescimento.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Definir roadmap de produtos e prioridades</li>
        <li>Conduzir pesquisas de mercado e análise de concorrência</li>
        <li>Trabalhar com equipes de desenvolvimento e design</li>
        <li>Analisar métricas e KPIs de produto</li>
        <li>Gerenciar stakeholders e comunicar progresso</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>5+ anos de experiência como Product Manager</li>
        <li>Experiência com metodologias ágeis</li>
        <li>Conhecimento em analytics e data-driven decisions</li>
        <li>Experiência com ferramentas de roadmap</li>
        <li>Excelentes habilidades de comunicação</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Participação nos lucros</li>
        <li>Desenvolvimento de carreira</li>
        <li>Ambiente colaborativo</li>
      </ul>
    `,
    tags: ["Agile", "Analytics", "Roadmap"],
    companyLogo: "/innova-corp-logo.png",
    companyDescription:
      "InnovaCorp é uma empresa inovadora focada em produtos digitais de alto impacto.",
  },
  {
    id: 5,
    title: "Engenheiro de Dados",
    company: "DataTech",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 14.000 - R$ 20.000",
    postedAt: "4 dias atrás",
    description:
      "Construa pipelines de dados robustos e escaláveis para processar grandes volumes de informação.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Engenheiro de Dados para construir e manter infraestruturas de dados escaláveis e confiáveis.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver e manter pipelines de dados usando Python</li>
        <li>Trabalhar com serviços AWS para processamento de dados</li>
        <li>Implementar soluções usando Apache Spark</li>
        <li>Otimizar performance de consultas e processamento</li>
        <li>Garantir qualidade e integridade dos dados</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência em engenharia de dados</li>
        <li>Proficiência em Python e SQL</li>
        <li>Experiência com AWS (S3, EMR, Glue, Redshift)</li>
        <li>Conhecimento em Apache Spark</li>
        <li>Experiência com Docker e Kubernetes</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho 100% remoto</li>
        <li>Horário flexível</li>
        <li>Orçamento para certificações AWS</li>
        <li>Equipamentos de trabalho</li>
        <li>Plano de saúde</li>
      </ul>
    `,
    tags: ["Python", "AWS", "Apache Spark"],
    companyLogo: "/data-tech-logo.png",
    companyDescription:
      "DataTech é especializada em soluções de big data e analytics avançados.",
  },
  {
    id: 6,
    title: "Desenvolvedor Mobile Flutter",
    company: "MobileFirst",
    location: "Curitiba, PR",
    type: "CLT",
    salary: "R$ 7.000 - R$ 11.000",
    postedAt: "5 dias atrás",
    description:
      "Desenvolva aplicativos móveis de alta qualidade usando Flutter para iOS e Android.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Junte-se ao nosso time para desenvolver aplicativos móveis inovadores usando Flutter. Você trabalhará em projetos desafiadores para diferentes plataformas.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver aplicativos móveis usando Flutter e Dart</li>
        <li>Integrar com APIs e serviços backend</li>
        <li>Implementar funcionalidades usando Firebase</li>
        <li>Otimizar performance dos aplicativos</li>
        <li>Colaborar com designers e product managers</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência com desenvolvimento mobile</li>
        <li>Experiência sólida com Flutter e Dart</li>
        <li>Conhecimento em Firebase</li>
        <li>Experiência com publicação na App Store e Google Play</li>
        <li>Conhecimento em integrações de API REST</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Horário flexível</li>
        <li>Dispositivos móveis para testes</li>
        <li>Curso de inglês</li>
      </ul>
    `,
    tags: ["Flutter", "Dart", "Firebase"],
    companyLogo: "/mobile-first-logo.png",
    companyDescription:
      "MobileFirst é uma empresa focada no desenvolvimento de aplicativos móveis inovadores.",
  },
] as JobProps[];

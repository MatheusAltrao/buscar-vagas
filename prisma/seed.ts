import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const jobs = [
  {
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
    companyLogo: "/design-studio-logo.png",
    companyDescription:
      "DesignStudio é um estúdio criativo especializado em experiências digitais inovadoras.",
  },
  {
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
  {
    title: "DevOps Engineer",
    company: "CloudSolutions",
    location: "São Paulo, SP",
    type: "CLT",
    salary: "R$ 12.000 - R$ 18.000",
    postedAt: "6 dias atrás",
    description:
      "Implemente e mantenha infraestruturas cloud escaláveis e sistemas de CI/CD robustos.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um DevOps Engineer para gerenciar e otimizar nossa infraestrutura cloud, garantindo alta disponibilidade e escalabilidade.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Gerenciar infraestrutura AWS usando Terraform</li>
        <li>Implementar e manter pipelines CI/CD</li>
        <li>Monitorar aplicações usando ferramentas observabilidade</li>
        <li>Automatizar processos de deploy e scaling</li>
        <li>Garantir segurança e compliance da infraestrutura</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência com DevOps/SRE</li>
        <li>Experiência sólida com AWS</li>
        <li>Conhecimento em Terraform e Ansible</li>
        <li>Experiência com Docker e Kubernetes</li>
        <li>Conhecimento em scripts Bash/Python</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde premium</li>
        <li>Vale refeição e transporte</li>
        <li>Certificações cloud patrocinadas</li>
        <li>Home office híbrido</li>
        <li>Participação nos lucros</li>
      </ul>
    `,
    tags: ["AWS", "Terraform", "Kubernetes"],
    companyLogo: "/cloud-solutions-logo.png",
    companyDescription:
      "CloudSolutions é especializada em soluções de infraestrutura cloud e DevOps.",
  },
  {
    title: "Analista de Segurança da Informação",
    company: "SecureTech",
    location: "Brasília, DF",
    type: "CLT",
    salary: "R$ 9.000 - R$ 14.000",
    postedAt: "1 semana atrás",
    description:
      "Proteja ativos digitais e implemente medidas de segurança robustas para proteger contra ameaças cibernéticas.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Analista de Segurança da Informação para fortalecer nossa postura de segurança cibernética e proteger nossos sistemas.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Monitorar e analisar eventos de segurança</li>
        <li>Implementar políticas de segurança da informação</li>
        <li>Realizar testes de penetração e vulnerability assessment</li>
        <li>Responder a incidentes de segurança</li>
        <li>Treinar equipes em boas práticas de segurança</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência em segurança da informação</li>
        <li>Certificações como CISSP, CEH ou equivalentes</li>
        <li>Conhecimento em SIEM e ferramentas de segurança</li>
        <li>Experiência com frameworks ISO 27001, NIST</li>
        <li>Conhecimento em redes e sistemas operacionais</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Certificações de segurança patrocinadas</li>
        <li>Treinamentos especializados</li>
        <li>Bônus por performance</li>
      </ul>
    `,
    tags: ["Cybersecurity", "CISSP", "Penetration Testing"],
    companyLogo: "/secure-tech-logo.png",
    companyDescription:
      "SecureTech é líder em soluções de segurança cibernética e proteção de dados.",
  },
  {
    title: "Cientista de Dados",
    company: "AIInnovate",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 15.000 - R$ 22.000",
    postedAt: "2 dias atrás",
    description:
      "Extraia insights valiosos de grandes volumes de dados usando machine learning e estatística avançada.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Cientista de Dados para desenvolver modelos de machine learning e extrair insights estratégicos dos nossos dados.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver modelos de machine learning</li>
        <li>Realizar análises estatísticas complexas</li>
        <li>Criar dashboards e visualizações de dados</li>
        <li>Colaborar com equipes de produto para definir métricas</li>
        <li>Implementar soluções de ML em produção</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>Mestrado/PhD em área quantitativa</li>
        <li>5+ anos de experiência em ciência de dados</li>
        <li>Proficiência em Python/R e SQL</li>
        <li>Experiência com TensorFlow/PyTorch</li>
        <li>Conhecimento em estatística e matemática</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho 100% remoto</li>
        <li>Horário flexível</li>
        <li>Orçamento para cursos e conferências</li>
        <li>Equipamentos de alta performance</li>
        <li>Stock options</li>
      </ul>
    `,
    tags: ["Machine Learning", "Python", "TensorFlow"],
    companyLogo: "/ai-innovate-logo.png",
    companyDescription:
      "AIInnovate é uma empresa de inteligência artificial focada em soluções inovadoras.",
  },
  {
    title: "Desenvolvedor Backend Java",
    company: "EnterpriseSoft",
    location: "São Paulo, SP",
    type: "CLT",
    salary: "R$ 9.000 - R$ 14.000",
    postedAt: "3 dias atrás",
    description:
      "Desenvolva sistemas backend robustos e escaláveis usando Java e Spring Framework.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Desenvolvedor Backend Java para trabalhar em sistemas empresariais de grande escala.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver APIs REST usando Spring Boot</li>
        <li>Implementar arquiteturas de microsserviços</li>
        <li>Trabalhar com bancos de dados relacionais</li>
        <li>Otimizar performance de aplicações</li>
        <li>Implementar testes unitários e integração</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>5+ anos de experiência com Java</li>
        <li>Experiência sólida com Spring Framework</li>
        <li>Conhecimento em JPA/Hibernate</li>
        <li>Experiência com bancos de dados SQL</li>
        <li>Conhecimento em arquitetura de microsserviços</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Participação nos lucros</li>
        <li>Plano de carreira estruturado</li>
        <li>Treinamentos técnicos</li>
      </ul>
    `,
    tags: ["Java", "Spring Boot", "Microservices"],
    companyLogo: "/enterprise-soft-logo.png",
    companyDescription:
      "EnterpriseSoft desenvolve soluções empresariais robustas para grandes corporações.",
  },
  {
    title: "Frontend Developer Vue.js",
    company: "ModernWeb",
    location: "Florianópolis, SC",
    type: "CLT",
    salary: "R$ 7.000 - R$ 11.000",
    postedAt: "4 dias atrás",
    description:
      "Crie interfaces modernas e interativas usando Vue.js e tecnologias frontend de ponta.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Frontend Developer especializado em Vue.js para desenvolver aplicações web modernas e responsivas.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver SPAs usando Vue.js 3</li>
        <li>Implementar designs responsivos com CSS3</li>
        <li>Integrar com APIs REST e GraphQL</li>
        <li>Otimizar performance de aplicações frontend</li>
        <li>Trabalhar com Vuex/Pinia para gerenciamento de estado</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência com Vue.js</li>
        <li>Conhecimento sólido em JavaScript ES6+</li>
        <li>Experiência com Nuxt.js</li>
        <li>Conhecimento em CSS/SASS</li>
        <li>Experiência com ferramentas de build (Vite/Webpack)</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Home office flexível</li>
        <li>Auxílio educação</li>
        <li>Ambiente descontraído</li>
      </ul>
    `,
    tags: ["Vue.js", "Nuxt.js", "JavaScript"],
    companyLogo: "/modern-web-logo.png",
    companyDescription:
      "ModernWeb é uma agência digital especializada em aplicações web modernas.",
  },
  {
    title: "QA Automation Engineer",
    company: "QualityFirst",
    location: "Porto Alegre, RS",
    type: "CLT",
    salary: "R$ 8.000 - R$ 12.000",
    postedAt: "5 dias atrás",
    description:
      "Implemente estratégias de testes automatizados para garantir a qualidade de software.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um QA Automation Engineer para liderar iniciativas de automação de testes e garantir a qualidade dos nossos produtos.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver e manter suítes de testes automatizados</li>
        <li>Implementar testes de API e interface</li>
        <li>Trabalhar com ferramentas CI/CD</li>
        <li>Definir estratégias de testes</li>
        <li>Mentorar equipe de QA manual</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência em QA Automation</li>
        <li>Experiência com Selenium, Cypress ou Playwright</li>
        <li>Conhecimento em linguagens como Java/Python/JavaScript</li>
        <li>Experiência com testes de API (REST/SOAP)</li>
        <li>Conhecimento em metodologias ágeis</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Certificações técnicas patrocinadas</li>
        <li>Horário flexível</li>
        <li>Participação nos lucros</li>
      </ul>
    `,
    tags: ["Selenium", "Cypress", "Test Automation"],
    companyLogo: "/quality-first-logo.png",
    companyDescription:
      "QualityFirst é especializada em soluções de qualidade de software e testes automatizados.",
  },
  {
    title: "Scrum Master",
    company: "AgileTeam",
    location: "Remoto",
    type: "CLT",
    salary: "R$ 10.000 - R$ 15.000",
    postedAt: "6 dias atrás",
    description:
      "Facilite processos ágeis e apoie equipes de desenvolvimento na entrega de valor contínuo.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Scrum Master experiente para facilitar cerimônias ágeis e apoiar equipes de alta performance.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Facilitar cerimônias Scrum (Daily, Planning, Review, Retrospective)</li>
        <li>Apoiar o Product Owner na gestão do backlog</li>
        <li>Remover impedimentos da equipe</li>
        <li>Promover melhoria contínua</li>
        <li>Treinar equipes em práticas ágeis</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência como Scrum Master</li>
        <li>Certificação CSM ou PSM</li>
        <li>Experiência com metodologias ágeis</li>
        <li>Conhecimento em Jira, Confluence</li>
        <li>Excelentes habilidades de facilitação</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho 100% remoto</li>
        <li>Horário flexível</li>
        <li>Certificações ágeis patrocinadas</li>
        <li>Plano de saúde premium</li>
        <li>Desenvolvimento de liderança</li>
      </ul>
    `,
    tags: ["Scrum", "Agile", "Facilitation"],
    companyLogo: "/agile-team-logo.png",
    companyDescription:
      "AgileTeam é consultoria especializada em transformação ágil e desenvolvimento de equipes.",
  },
  {
    title: "Desenvolvedor Python",
    company: "PythonCorp",
    location: "São Paulo, SP",
    type: "CLT",
    salary: "R$ 8.000 - R$ 13.000",
    postedAt: "1 semana atrás",
    description:
      "Desenvolva aplicações Python robustas e escaláveis usando frameworks modernos.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Desenvolvedor Python para trabalhar em projetos desafiadores usando as melhores práticas de desenvolvimento.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver APIs usando Django/FastAPI</li>
        <li>Implementar soluções de processamento de dados</li>
        <li>Trabalhar com bancos de dados relacionais e NoSQL</li>
        <li>Otimizar performance de aplicações</li>
        <li>Implementar testes automatizados</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência com Python</li>
        <li>Experiência com Django ou FastAPI</li>
        <li>Conhecimento em PostgreSQL/MongoDB</li>
        <li>Experiência com Redis e Celery</li>
        <li>Conhecimento em práticas de Clean Code</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Home office híbrido</li>
        <li>Auxílio educação</li>
        <li>Participação nos lucros</li>
      </ul>
    `,
    tags: ["Python", "Django", "FastAPI"],
    companyLogo: "/python-corp-logo.png",
    companyDescription:
      "PythonCorp desenvolve soluções empresariais usando tecnologias Python de ponta.",
  },
  {
    title: "Arquiteto de Software",
    company: "ArchSolutions",
    location: "São Paulo, SP",
    type: "CLT",
    salary: "R$ 18.000 - R$ 25.000",
    postedAt: "2 dias atrás",
    description:
      "Projete arquiteturas de software escaláveis e defina padrões técnicos para equipes de desenvolvimento.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Arquiteto de Software sênior para liderar decisões técnicas e projetar arquiteturas robustas.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Projetar arquiteturas de software escaláveis</li>
        <li>Definir padrões e diretrizes técnicas</li>
        <li>Avaliar e selecionar tecnologias</li>
        <li>Mentorar desenvolvedores sêniores</li>
        <li>Revisar arquiteturas de projetos</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>8+ anos de experiência em desenvolvimento</li>
        <li>Experiência em arquitetura de microsserviços</li>
        <li>Conhecimento em padrões de design</li>
        <li>Experiência com cloud (AWS/Azure/GCP)</li>
        <li>Liderança técnica e mentoria</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Salário competitivo</li>
        <li>Plano de saúde premium</li>
        <li>Stock options</li>
        <li>Orçamento para conferências</li>
        <li>Ambiente de inovação</li>
      </ul>
    `,
    tags: ["Software Architecture", "Microservices", "Cloud"],
    companyLogo: "/arch-solutions-logo.png",
    companyDescription:
      "ArchSolutions é consultoria especializada em arquitetura de software e transformação digital.",
  },
  {
    title: "Desenvolvedor iOS Swift",
    company: "iOSMasters",
    location: "Rio de Janeiro, RJ",
    type: "PJ",
    salary: "R$ 9.000 - R$ 14.000",
    postedAt: "3 dias atrás",
    description:
      "Desenvolva aplicativos iOS nativos de alta qualidade usando Swift e SwiftUI.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Desenvolvedor iOS para criar aplicativos nativos inovadores para a plataforma Apple.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver aplicativos iOS usando Swift</li>
        <li>Implementar interfaces com SwiftUI</li>
        <li>Integrar com APIs REST e GraphQL</li>
        <li>Otimizar performance dos aplicativos</li>
        <li>Publicar apps na App Store</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência com desenvolvimento iOS</li>
        <li>Proficiência em Swift e SwiftUI</li>
        <li>Experiência com Core Data e CloudKit</li>
        <li>Conhecimento em padrões MVVM/MVP</li>
        <li>Experiência com App Store guidelines</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho remoto flexível</li>
        <li>MacBook Pro fornecido</li>
        <li>Conta de desenvolvedor Apple paga</li>
        <li>Plano de saúde</li>
        <li>Participação em conferências iOS</li>
      </ul>
    `,
    tags: ["iOS", "Swift", "SwiftUI"],
    companyLogo: "/ios-masters-logo.png",
    companyDescription:
      "iOSMasters é especializada no desenvolvimento de aplicativos iOS de alta qualidade.",
  },
  {
    title: "Desenvolvedor Android Kotlin",
    company: "AndroidExperts",
    location: "Belo Horizonte, MG",
    type: "CLT",
    salary: "R$ 8.000 - R$ 13.000",
    postedAt: "4 dias atrás",
    description:
      "Crie aplicativos Android modernos usando Kotlin e as últimas tecnologias do ecosistema Android.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Desenvolvedor Android para trabalhar com as tecnologias mais modernas do ecossistema Android.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver aplicativos Android usando Kotlin</li>
        <li>Implementar Material Design</li>
        <li>Trabalhar com Jetpack Compose</li>
        <li>Integrar com APIs e serviços backend</li>
        <li>Otimizar performance e UX dos apps</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência com Android</li>
        <li>Proficiência em Kotlin</li>
        <li>Experiência com Jetpack Compose</li>
        <li>Conhecimento em MVVM e Clean Architecture</li>
        <li>Experiência com Room, Retrofit, Dagger/Hilt</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Dispositivos Android para testes</li>
        <li>Cursos e certificações</li>
        <li>Ambiente colaborativo</li>
      </ul>
    `,
    tags: ["Android", "Kotlin", "Jetpack Compose"],
    companyLogo: "/android-experts-logo.png",
    companyDescription:
      "AndroidExperts é referência no desenvolvimento de aplicativos Android inovadores.",
  },
  {
    title: "Especialista em Blockchain",
    company: "CryptoTech",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 20.000 - R$ 30.000",
    postedAt: "5 dias atrás",
    description:
      "Desenvolva soluções blockchain e smart contracts para aplicações descentralizadas.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Especialista em Blockchain para desenvolver soluções inovadoras usando tecnologias descentralizadas.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver smart contracts em Solidity</li>
        <li>Criar DApps (Aplicações Descentralizadas)</li>
        <li>Implementar protocolos DeFi</li>
        <li>Auditar contratos inteligentes</li>
        <li>Pesquisar novas tecnologias blockchain</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência com blockchain</li>
        <li>Proficiência em Solidity</li>
        <li>Experiência com Ethereum, Polygon</li>
        <li>Conhecimento em Web3.js/Ethers.js</li>
        <li>Experiência com Hardhat/Truffle</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho 100% remoto</li>
        <li>Pagamento em crypto (opcional)</li>
        <li>Token equity</li>
        <li>Conferências blockchain patrocinadas</li>
        <li>Ambiente de inovação</li>
      </ul>
    `,
    tags: ["Blockchain", "Solidity", "DeFi"],
    companyLogo: "/crypto-tech-logo.png",
    companyDescription:
      "CryptoTech é pioneira em soluções blockchain e finanças descentralizadas.",
  },
  {
    title: "Tech Lead Frontend",
    company: "LeadTech",
    location: "São Paulo, SP",
    type: "CLT",
    salary: "R$ 15.000 - R$ 20.000",
    postedAt: "6 dias atrás",
    description:
      "Lidere equipes de frontend e defina estratégias técnicas para produtos digitais de alta escala.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Tech Lead Frontend para liderar nossa equipe de desenvolvimento e definir direções técnicas.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Liderar equipe de desenvolvedores frontend</li>
        <li>Definir arquitetura e padrões de código</li>
        <li>Mentorar desenvolvedores júniores e plenos</li>
        <li>Participar de decisões de produto</li>
        <li>Garantir qualidade e performance dos produtos</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>6+ anos de experiência frontend</li>
        <li>Experiência em liderança técnica</li>
        <li>Expertise em React/Vue/Angular</li>
        <li>Conhecimento em arquitetura frontend</li>
        <li>Experiência com micro-frontends</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde premium</li>
        <li>Vale refeição e transporte</li>
        <li>Stock options</li>
        <li>Orçamento para team building</li>
        <li>Desenvolvimento de liderança</li>
      </ul>
    `,
    tags: ["Tech Lead", "Frontend", "Team Leadership"],
    companyLogo: "/lead-tech-logo.png",
    companyDescription:
      "LeadTech desenvolve produtos digitais de alta escala para mercados globais.",
  },
  {
    title: "Desenvolvedor .NET Core",
    company: "DotNetSolutions",
    location: "Curitiba, PR",
    type: "CLT",
    salary: "R$ 9.000 - R$ 14.000",
    postedAt: "1 semana atrás",
    description:
      "Desenvolva aplicações empresariais robustas usando .NET Core e tecnologias Microsoft.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Desenvolvedor .NET Core para trabalhar em sistemas empresariais críticos usando tecnologias Microsoft.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver APIs usando .NET Core/NET 6+</li>
        <li>Implementar arquiteturas de microsserviços</li>
        <li>Trabalhar com Entity Framework Core</li>
        <li>Integrar com Azure Services</li>
        <li>Implementar padrões SOLID e Clean Architecture</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência com .NET</li>
        <li>Experiência com .NET Core/.NET 6+</li>
        <li>Conhecimento em Entity Framework Core</li>
        <li>Experiência com SQL Server</li>
        <li>Conhecimento em Azure (desejável)</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Certificações Microsoft patrocinadas</li>
        <li>Home office híbrido</li>
        <li>Participação nos lucros</li>
      </ul>
    `,
    tags: [".NET Core", "Entity Framework", "Azure"],
    companyLogo: "/dotnet-solutions-logo.png",
    companyDescription:
      "DotNetSolutions é especializada em soluções empresariais usando tecnologias Microsoft.",
  },
  {
    title: "Engenheiro de Machine Learning",
    company: "MLOps",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 16.000 - R$ 24.000",
    postedAt: "2 dias atrás",
    description:
      "Implemente modelos de machine learning em produção e construa pipelines de MLOps robustos.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Engenheiro de Machine Learning para colocar modelos de IA em produção de forma escalável e confiável.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Implementar modelos ML em produção</li>
        <li>Construir pipelines de MLOps</li>
        <li>Monitorar performance de modelos</li>
        <li>Otimizar latência e throughput</li>
        <li>Implementar A/B testing para modelos</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência em ML Engineering</li>
        <li>Experiência com MLflow, Kubeflow</li>
        <li>Conhecimento em Docker e Kubernetes</li>
        <li>Experiência com AWS/GCP ML services</li>
        <li>Proficiência em Python e frameworks ML</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho 100% remoto</li>
        <li>Horário flexível</li>
        <li>GPUs para experimentação</li>
        <li>Conferências de ML patrocinadas</li>
        <li>Stock options</li>
      </ul>
    `,
    tags: ["MLOps", "Kubernetes", "Machine Learning"],
    companyLogo: "/mlops-logo.png",
    companyDescription:
      "MLOps é especializada em operacionalização de machine learning em escala empresarial.",
  },
  {
    title: "Desenvolvedor Ruby on Rails",
    company: "RubyMasters",
    location: "Porto Alegre, RS",
    type: "CLT",
    salary: "R$ 8.000 - R$ 12.000",
    postedAt: "3 dias atrás",
    description:
      "Desenvolva aplicações web elegantes e eficientes usando Ruby on Rails e melhores práticas.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Desenvolvedor Ruby on Rails para trabalhar em aplicações web modernas seguindo as melhores práticas da comunidade Ruby.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver aplicações Rails escaláveis</li>
        <li>Implementar APIs RESTful</li>
        <li>Trabalhar com PostgreSQL e Redis</li>
        <li>Escrever testes usando RSpec</li>
        <li>Otimizar performance de queries</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência com Ruby on Rails</li>
        <li>Conhecimento sólido em Ruby</li>
        <li>Experiência com PostgreSQL</li>
        <li>Conhecimento em RSpec e TDD</li>
        <li>Experiência com Sidekiq/background jobs</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Home office flexível</li>
        <li>Auxílio educação</li>
        <li>Ambiente criativo</li>
      </ul>
    `,
    tags: ["Ruby on Rails", "PostgreSQL", "RSpec"],
    companyLogo: "/ruby-masters-logo.png",
    companyDescription:
      "RubyMasters desenvolve aplicações web elegantes usando as melhores práticas Ruby.",
  },
  {
    title: "Especialista em Performance Web",
    company: "SpeedTech",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 12.000 - R$ 18.000",
    postedAt: "4 dias atrás",
    description:
      "Otimize performance de aplicações web e implemente estratégias de melhoria de velocidade.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Especialista em Performance Web para otimizar aplicações e garantir excelente experiência do usuário.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Auditar performance de aplicações web</li>
        <li>Implementar otimizações de Core Web Vitals</li>
        <li>Configurar CDNs e estratégias de cache</li>
        <li>Otimizar assets e bundle size</li>
        <li>Monitorar métricas de performance</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência em web performance</li>
        <li>Expertise em Core Web Vitals</li>
        <li>Conhecimento em ferramentas de profiling</li>
        <li>Experiência com CDNs (CloudFlare, AWS)</li>
        <li>Conhecimento em service workers e PWA</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho 100% remoto</li>
        <li>Horário flexível</li>
        <li>Ferramentas premium de monitoring</li>
        <li>Certificações cloud patrocinadas</li>
        <li>Bônus por métricas atingidas</li>
      </ul>
    `,
    tags: ["Web Performance", "Core Web Vitals", "CDN"],
    companyLogo: "/speed-tech-logo.png",
    companyDescription:
      "SpeedTech é especializada em otimização de performance para aplicações web de alta escala.",
  },
  {
    title: "Desenvolvedor Go",
    company: "GoExperts",
    location: "São Paulo, SP",
    type: "CLT",
    salary: "R$ 10.000 - R$ 15.000",
    postedAt: "5 dias atrás",
    description:
      "Desenvolva sistemas backend de alta performance usando Go e arquiteturas modernas.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Desenvolvedor Go para trabalhar em sistemas de alta performance e baixa latência.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver microsserviços usando Go</li>
        <li>Implementar APIs REST e gRPC</li>
        <li>Trabalhar com bancos de dados relacionais e NoSQL</li>
        <li>Otimizar performance e concorrência</li>
        <li>Implementar sistemas distribuídos</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência com Go</li>
        <li>Conhecimento em concorrência (goroutines, channels)</li>
        <li>Experiência com gRPC e Protocol Buffers</li>
        <li>Conhecimento em Docker e Kubernetes</li>
        <li>Experiência com sistemas distribuídos</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Home office híbrido</li>
        <li>Treinamentos técnicos</li>
        <li>Participação nos lucros</li>
      </ul>
    `,
    tags: ["Go", "gRPC", "Microservices"],
    companyLogo: "/go-experts-logo.png",
    companyDescription:
      "GoExperts desenvolve sistemas de alta performance usando Go e tecnologias modernas.",
  },
  {
    title: "Especialista em Acessibilidade Web",
    company: "AccessTech",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 8.000 - R$ 12.000",
    postedAt: "6 dias atrás",
    description:
      "Implemente soluções de acessibilidade web e garanta conformidade com padrões WCAG.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um Especialista em Acessibilidade Web para tornar aplicações inclusivas e acessíveis para todos os usuários.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Auditar aplicações para conformidade WCAG</li>
        <li>Implementar melhorias de acessibilidade</li>
        <li>Treinar equipes em práticas inclusivas</li>
        <li>Desenvolver components acessíveis</li>
        <li>Realizar testes com tecnologias assistivas</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência em acessibilidade web</li>
        <li>Conhecimento profundo das diretrizes WCAG</li>
        <li>Experiência com leitores de tela</li>
        <li>Conhecimento em ARIA e semântica HTML</li>
        <li>Certificação em acessibilidade (desejável)</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho 100% remoto</li>
        <li>Horário flexível</li>
        <li>Certificações de acessibilidade pagas</li>
        <li>Equipamentos de tecnologia assistiva</li>
        <li>Conferências de acessibilidade</li>
      </ul>
    `,
    tags: ["Accessibility", "WCAG", "ARIA"],
    companyLogo: "/access-tech-logo.png",
    companyDescription:
      "AccessTech é especializada em tornar a web mais inclusiva e acessível para todos.",
  },
  {
    title: "Desenvolvedor Salesforce",
    company: "CRMSolutions",
    location: "Brasília, DF",
    type: "CLT",
    salary: "R$ 11.000 - R$ 16.000",
    postedAt: "1 semana atrás",
    description:
      "Desenvolva soluções customizadas na plataforma Salesforce usando Apex, Lightning e integrations.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Procuramos um Desenvolvedor Salesforce para criar soluções robustas na plataforma líder de CRM.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Desenvolver customizações usando Apex</li>
        <li>Criar componentes Lightning (LWC/Aura)</li>
        <li>Implementar integrações com sistemas externos</li>
        <li>Configurar workflows e process builders</li>
        <li>Desenvolver relatórios e dashboards</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>3+ anos de experiência com Salesforce</li>
        <li>Certificação Platform Developer I</li>
        <li>Experiência com Apex e SOQL</li>
        <li>Conhecimento em Lightning Web Components</li>
        <li>Experiência com integrações REST/SOAP</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Plano de saúde e odontológico</li>
        <li>Vale refeição e transporte</li>
        <li>Certificações Salesforce pagas</li>
        <li>Trailhead credits</li>
        <li>Participação nos lucros</li>
      </ul>
    `,
    tags: ["Salesforce", "Apex", "Lightning"],
    companyLogo: "/crm-solutions-logo.png",
    companyDescription:
      "CRMSolutions é parceira Salesforce especializada em implementações e customizações.",
  },
  {
    title: "Engenheiro de Confiabilidade (SRE)",
    company: "ReliableSystems",
    location: "Remoto",
    type: "CLT",
    salary: "R$ 14.000 - R$ 20.000",
    postedAt: "2 dias atrás",
    description:
      "Garanta alta disponibilidade de sistemas e implemente práticas de Site Reliability Engineering.",
    fullDescription: `
      <h3>Sobre a vaga:</h3>
      <p>Buscamos um SRE para garantir a confiabilidade e performance dos nossos sistemas críticos em produção.</p>
      
      <h3>Responsabilidades:</h3>
      <ul>
        <li>Implementar práticas de SRE e observabilidade</li>
        <li>Definir e monitorar SLIs, SLOs e error budgets</li>
        <li>Automatizar operações e deploys</li>
        <li>Responder a incidentes e post-mortems</li>
        <li>Otimizar capacidade e performance</li>
      </ul>
      
      <h3>Requisitos:</h3>
      <ul>
        <li>4+ anos de experiência em SRE/DevOps</li>
        <li>Experiência com Prometheus, Grafana</li>
        <li>Conhecimento em Kubernetes e Docker</li>
        <li>Experiência com clouds (AWS/GCP/Azure)</li>
        <li>Conhecimento em linguagens de programação</li>
      </ul>
      
      <h3>Benefícios:</h3>
      <ul>
        <li>Trabalho 100% remoto</li>
        <li>On-call compensation</li>
        <li>Certificações cloud patrocinadas</li>
        <li>Equipamentos de trabalho</li>
        <li>Stock options</li>
      </ul>
    `,
    tags: ["SRE", "Prometheus", "Kubernetes"],
    companyLogo: "/reliable-systems-logo.png",
    companyDescription:
      "ReliableSystems é especializada em engenharia de confiabilidade para sistemas de missão crítica.",
  },
];

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...");

  try {
    // Limpar dados existentes
    await prisma.job.deleteMany();
    console.log("🗑️  Dados existentes removidos");

    // Inserir novos dados
    for (const job of jobs) {
      await prisma.job.create({
        data: job,
      });
    }

    console.log(`✅ ${jobs.length} vagas inseridas com sucesso!`);
  } catch (error) {
    console.error("❌ Erro ao executar seed:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

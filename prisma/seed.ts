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
      "Desenvolva uma aplicação de e-commerce com React e TypeScript. Implemente: carrinho de compras com Context API, formulário de checkout com validação usando React Hook Form e Zod, integração com API de pagamento simulada, testes unitários com Jest e React Testing Library. Extras: implementar dark mode e responsividade completa.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Crie uma aplicação de e-commerce completa usando React e TypeScript. O projeto deve incluir autenticação, carrinho de compras, checkout e integração com API de pagamento simulada.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Sistema de autenticação com JWT</li>
        <li>Carrinho de compras usando Context API</li>
        <li>Formulário de checkout com validação (React Hook Form + Zod)</li>
        <li>Integração com API REST para produtos e pedidos</li>
        <li>Testes unitários com Jest e React Testing Library (cobertura mínima 80%)</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Implementar dark mode com persistência</li>
        <li>Design responsivo mobile-first</li>
        <li>Lazy loading de componentes</li>
        <li>Otimização de performance (React.memo, useMemo)</li>
        <li>Deploy automatizado com Vercel/Netlify</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Código no GitHub com README detalhado</li>
        <li>Deploy funcional com dados de teste</li>
        <li>Documentação da arquitetura</li>
        <li>Relatório de testes e cobertura</li>
        <li>Prazo: 7 dias</li>
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
      "Redesenhe um aplicativo de banco digital com foco em acessibilidade. Crie wireframes, protótipos interativos no Figma, conduza testes de usabilidade com usuários reais, desenvolva um design system completo e implemente microinterações que melhorem a UX.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Redesenhe a experiência completa de um aplicativo de banco digital, priorizando acessibilidade e usabilidade para diferentes perfis de usuários.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Pesquisa de usuário com pelo menos 10 entrevistas</li>
        <li>Wireframes de baixa e alta fidelidade</li>
        <li>Protótipo interativo funcional no Figma</li>
        <li>Design system completo com componentes reutilizáveis</li>
        <li>Teste de usabilidade com 5 usuários diferentes</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Conformidade total com WCAG 2.1 AA</li>
        <li>Design para daltonismo e baixa visão</li>
        <li>Microinterações e animações funcionais</li>
        <li>Versão dark mode completa</li>
        <li>Prototipagem para diferentes dispositivos</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Arquivo Figma com organização profissional</li>
        <li>Relatório de pesquisa de usuário</li>
        <li>Documentação do design system</li>
        <li>Vídeo demonstrativo do protótipo (3-5min)</li>
        <li>Prazo: 10 dias</li>
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
      "Construa uma API de chat em tempo real com Node.js e WebSockets. Implemente autenticação JWT, salas privadas, mensagens criptografadas, histórico persistente no PostgreSQL, testes de integração e deploy com Docker. Cache com Redis para otimização.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Desenvolva uma aplicação de chat em tempo real completa, incluindo backend com Node.js, frontend com React e infraestrutura de deploy escalável.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>API REST com autenticação JWT</li>
        <li>WebSockets para mensagens em tempo real</li>
        <li>Criptografia end-to-end das mensagens</li>
        <li>Sistema de salas públicas e privadas</li>
        <li>Banco PostgreSQL com migrations</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Cache com Redis para performance</li>
        <li>Testes unitários e de integração (80%+ cobertura)</li>
        <li>Containerização com Docker</li>
        <li>Deploy automatizado com CI/CD</li>
        <li>Monitoramento com logs estruturados</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Código no GitHub com documentação completa</li>
        <li>API documentada com Swagger</li>
        <li>Frontend funcional com todas as features</li>
        <li>Deploy em produção (AWS/Heroku)</li>
        <li>Prazo: 14 dias</li>
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
      "Desenvolva uma estratégia de produto para um app de delivery. Conduza pesquisa de mercado, defina roadmap de 6 meses, crie wireframes de novas features, analise métricas de retenção e converta insights em melhorias mensuráveis de UX.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Lidere o desenvolvimento de produto de um aplicativo de delivery, desde pesquisa de mercado até implementação de features baseadas em dados.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Pesquisa competitiva detalhada (5+ concorrentes)</li>
        <li>Análise de métricas existentes e identificação de oportunidades</li>
        <li>Roadmap de produto para 6 meses com priorização</li>
        <li>Wireframes de 3 novas features priorizadas</li>
        <li>Estratégia de testes A/B para validação</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Personas baseadas em dados reais</li>
        <li>Análise de jornada do usuário completa</li>
        <li>Definição de OKRs e KPIs mensuráveis</li>
        <li>Apresentação executiva com insights estratégicos</li>
        <li>Prototipagem de alta fidelidade</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Documento de estratégia de produto (15-20 páginas)</li>
        <li>Roadmap visual interativo</li>
        <li>Apresentação executiva (10-15 slides)</li>
        <li>Wireframes e fluxos de usuário</li>
        <li>Prazo: 12 dias</li>
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
      "Construa um pipeline de dados que processe 1M+ registros diários de e-commerce. Use Python, Apache Spark, AWS S3, implemente data quality checks, automatize com Airflow e crie dashboards em tempo real com streaming analytics.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Desenvolva uma infraestrutura completa de dados capaz de processar, transformar e disponibilizar insights de grandes volumes de dados de e-commerce.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Pipeline ETL para processar 1M+ registros/dia</li>
        <li>Processamento com Apache Spark (PySpark)</li>
        <li>Armazenamento escalável no AWS S3</li>
        <li>Data quality checks automatizados</li>
        <li>Orquestração com Apache Airflow</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Streaming analytics com Kafka/Kinesis</li>
        <li>Data lake architecture com Delta Lake</li>
        <li>Monitoramento de data pipelines</li>
        <li>APIs para consumo de dados em tempo real</li>
        <li>Dashboard executivo com métricas de negócio</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Código Python com arquitetura limpa</li>
        <li>Infraestrutura como código (Terraform)</li>
        <li>Documentação técnica completa</li>
        <li>Dashboard funcional com dados simulados</li>
        <li>Prazo: 14 dias</li>
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
      "Crie um app de fitness com Flutter que funcione offline. Implemente sincronização de dados, push notifications, integração com sensores, animações fluidas, testes automatizados e publique nas lojas iOS e Android.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Desenvolva um aplicativo móvel completo de fitness que funcione offline e online, com sincronização automática de dados e integração com sensores do dispositivo.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>App Flutter multiplataforma (iOS e Android)</li>
        <li>Funcionalidade offline com SQLite local</li>
        <li>Sincronização automática quando online</li>
        <li>Push notifications contextuais</li>
        <li>Integração com sensores (acelerômetro, giroscópio)</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Animações fluidas e microinterações</li>
        <li>Integração com Google Fit/Apple Health</li>
        <li>Testes widget e integração</li>
        <li>Geolocalização para tracking de corrida</li>
        <li>Sistema de achievements gamificado</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Código Flutter bem estruturado</li>
        <li>Apps publicados nas lojas (TestFlight/Play Console)</li>
        <li>Backend Firebase configurado</li>
        <li>Documentação de arquitetura</li>
        <li>Prazo: 16 dias</li>
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
      "Configure uma infraestrutura AWS completa com Terraform. Implemente CI/CD com GitLab, monitoramento com Prometheus/Grafana, auto-scaling de containers Kubernetes, backup automatizado e disaster recovery testado.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Projete e implemente uma infraestrutura cloud completa, escalável e monitorada, com práticas de DevOps e SRE para uma aplicação de e-commerce de alto tráfego.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Infraestrutura AWS provisionada com Terraform</li>
        <li>Cluster Kubernetes com auto-scaling</li>
        <li>Pipeline CI/CD completo (build, test, deploy)</li>
        <li>Monitoramento com Prometheus e Grafana</li>
        <li>Estratégia de backup e disaster recovery</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Service mesh com Istio</li>
        <li>Logging centralizado com ELK Stack</li>
        <li>Secrets management com Vault</li>
        <li>Infrastructure testing com Terratest</li>
        <li>Multi-region deployment</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Código Terraform modularizado</li>
        <li>Pipelines funcionais documentados</li>
        <li>Dashboards de monitoramento configurados</li>
        <li>Runbook de operações</li>
        <li>Prazo: 18 dias</li>
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
      "Conduza um security assessment completo de uma aplicação web. Realize penetration testing, análise de código, implemente SIEM, configure WAF, documente vulnerabilidades encontradas e apresente plano de remediação executivo.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Execute uma auditoria completa de segurança em uma aplicação web, identificando vulnerabilidades e implementando contramedidas efetivas.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Security assessment completo (OWASP Top 10)</li>
        <li>Penetration testing manual e automatizado</li>
        <li>Análise estática de código (SAST)</li>
        <li>Configuração de SIEM básico</li>
        <li>Implementação de WAF com regras customizadas</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Red team exercise completo</li>
        <li>Análise de compliance (ISO 27001, LGPD)</li>
        <li>Threat modeling documentado</li>
        <li>Security awareness training plan</li>
        <li>Incident response playbook</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Relatório executivo de vulnerabilidades</li>
        <li>Relatório técnico detalhado</li>
        <li>Plano de remediação priorizado</li>
        <li>Scripts e ferramentas utilizadas</li>
        <li>Prazo: 15 dias</li>
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
      "Desenvolva um modelo de machine learning para previsão de churn de clientes. Use Python, scikit-learn, implemente feature engineering avançado, deploy com MLflow, monitore performance em produção e crie explicabilidade com SHAP.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Construa um sistema completo de machine learning para prever churn de clientes, desde a análise exploratória até o deploy em produção com monitoramento contínuo.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Análise exploratória completa dos dados</li>
        <li>Feature engineering com técnicas avançadas</li>
        <li>Modelo ML com performance >90% AUC</li>
        <li>Deploy automatizado com MLflow</li>
        <li>API para inferência em tempo real</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Explicabilidade com SHAP/LIME</li>
        <li>A/B testing framework para modelos</li>
        <li>Monitoramento de data drift</li>
        <li>Pipeline de retreinamento automático</li>
        <li>Dashboard executivo com insights</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Notebooks Jupyter bem documentados</li>
        <li>Código Python em produção</li>
        <li>API funcional com documentação</li>
        <li>Relatório técnico com insights de negócio</li>
        <li>Prazo: 16 dias</li>
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
      "Crie um sistema de microsserviços em Java com Spring Boot. Implemente service discovery, circuit breaker, distributed tracing, API Gateway, mensageria assíncrona, cache distribuído e testes de contrato.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Desenvolva uma arquitetura completa de microsserviços para um sistema de e-commerce, implementando patterns essenciais para sistemas distribuídos.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>3+ microsserviços com Spring Boot</li>
        <li>Service discovery com Eureka</li>
        <li>API Gateway com Spring Cloud Gateway</li>
        <li>Circuit breaker com Hystrix/Resilience4j</li>
        <li>Mensageria assíncrona com RabbitMQ</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Distributed tracing com Zipkin</li>
        <li>Cache distribuído com Redis</li>
        <li>Testes de contrato com Pact</li>
        <li>Documentação com OpenAPI 3.0</li>
        <li>Monitoramento com Micrometer</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Código Java bem estruturado</li>
        <li>Docker compose para ambiente local</li>
        <li>Documentação de arquitetura</li>
        <li>Postman collection para testes</li>
        <li>Prazo: 20 dias</li>
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
      "Desenvolva uma SPA de gestão de projetos com Vue.js 3. Implemente Composition API, Pinia para estado, autenticação, drag-and-drop, notificações em tempo real, PWA e deploy otimizado com Vite.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Crie uma aplicação completa de gestão de projetos estilo Trello/Asana usando Vue.js 3 e as tecnologias mais modernas do ecossistema.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>SPA com Vue.js 3 e Composition API</li>
        <li>Gerenciamento de estado com Pinia</li>
        <li>Sistema de autenticação completo</li>
        <li>Interface drag-and-drop para cards</li>
        <li>Notificações em tempo real</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>PWA com funcionalidade offline</li>
        <li>Testes unitários com Vitest</li>
        <li>Internacionalização (i18n)</li>
        <li>Dark mode com persistência</li>
        <li>Performance otimizada (lazy loading, code splitting)</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Código Vue.js bem estruturado</li>
        <li>Deploy funcional</li>
        <li>Documentação técnica</li>
        <li>Tests com boa cobertura</li>
        <li>Prazo: 14 dias</li>
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
      "Crie uma suíte completa de testes automatizados para uma aplicação e-commerce. Implemente testes E2E com Playwright, API com REST Assured, performance com K6, visual regression e integração CI/CD.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Desenvolva uma estratégia completa de automação de testes para garantir qualidade de uma aplicação e-commerce complexa.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Testes E2E com Playwright (web e mobile)</li>
        <li>Testes de API com REST Assured</li>
        <li>Testes de performance com K6</li>
        <li>Framework de page objects</li>
        <li>Relatórios detalhados e screenshots</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Visual regression testing</li>
        <li>Testes de acessibilidade automatizados</li>
        <li>Integração com CI/CD pipeline</li>
        <li>Parallel execution otimizada</li>
        <li>Data-driven testing com massa sintética</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Suite de testes completa e funcional</li>
        <li>Documentação de estratégia de testes</li>
        <li>Pipeline CI/CD configurado</li>
        <li>Relatórios de execução e métricas</li>
        <li>Prazo: 12 dias</li>
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
      "Implemente metodologias ágeis em uma equipe disfuncional. Conduza retrospectivas efetivas, elimine impedimentos recorrentes, melhore velocity em 40%, estabeleça métricas de qualidade e documente lições aprendidas.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Transforme uma equipe com baixa performance em um time de alta performance usando metodologias ágeis e técnicas de facilitação avançadas.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Diagnóstico completo da situação atual da equipe</li>
        <li>Implementação de cerimônias Scrum efetivas</li>
        <li>Plano de remoção de impedimentos</li>
        <li>Métricas de acompanhamento (velocity, burn-down)</li>
        <li>Melhoria mensurável em 3 sprints</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Técnicas de facilitação inovadoras</li>
        <li>Coaching individual para desenvolvedores</li>
        <li>Implementação de práticas DevOps</li>
        <li>Cultura de melhoria contínua</li>
        <li>Plano de desenvolvimento de liderança técnica</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Relatório de diagnóstico inicial</li>
        <li>Plano de transformação ágil</li>
        <li>Métricas before/after documentadas</li>
        <li>Playbook de práticas implementadas</li>
        <li>Prazo: 90 dias (acompanhamento contínuo)</li>
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
      "Desenvolva uma API GraphQL escalável com Python. Implemente resolvers eficientes, autenticação JWT, cache com Redis, rate limiting, subscriptions em tempo real, testes de performance e documentação interativa.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Construa uma API GraphQL robusta para um sistema de social media, implementando features avançadas de performance e segurança.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>API GraphQL com FastAPI ou Django</li>
        <li>Sistema de autenticação e autorização</li>
        <li>Resolvers otimizados (N+1 problem)</li>
        <li>Cache inteligente com Redis</li>
        <li>Rate limiting por usuário</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Subscriptions para updates em tempo real</li>
        <li>Schema stitching para microsserviços</li>
        <li>Monitoring com Apollo Studio</li>
        <li>Testes de carga e performance</li>
        <li>Documentação interativa com GraphQL Playground</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Código Python bem estruturado</li>
        <li>Schema GraphQL documentado</li>
        <li>Suite de testes abrangente</li>
        <li>Deploy funcional com métricas</li>
        <li>Prazo: 14 dias</li>
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
      "Projete arquitetura de um sistema distribuído para 10M+ usuários. Defina patterns de resiliência, estratégia de dados, observabilidade, deploy multi-region, capacity planning e documentação técnica executiva.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Projete uma arquitetura completa para um sistema de alta escala, considerando todos os aspectos de performance, segurança e observabilidade.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Arquitetura para suportar 10M+ usuários simultâneos</li>
        <li>Design de microsserviços com boundaries bem definidos</li>
        <li>Estratégia de dados (CQRS, Event Sourcing)</li>
        <li>Patterns de resiliência (Circuit Breaker, Bulkhead)</li>
        <li>Observabilidade completa (traces, metrics, logs)</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Multi-region deployment strategy</li>
        <li>Disaster recovery plan</li>
        <li>Cost optimization analysis</li>
        <li>Security by design implementation</li>
        <li>Performance budgets e SLAs</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Documentação de arquitetura C4 Model</li>
        <li>ADRs (Architecture Decision Records)</li>
        <li>Protótipo funcional dos componentes críticos</li>
        <li>Apresentação executiva (30min)</li>
        <li>Prazo: 21 dias</li>
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
      "Crie uma DeFi protocol completa em Solidity. Implemente AMM, yield farming, governance token, auditorias de segurança, testes fuzzing, deploy multi-chain e interface Web3 responsiva.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Desenvolva um protocolo DeFi completo desde smart contracts até interface de usuário, implementando features avançadas de DeFi 2.0.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Smart contracts em Solidity (AMM + Yield Farming)</li>
        <li>Governance token com voting mechanism</li>
        <li>Interface Web3 com React e ethers.js</li>
        <li>Testes abrangentes com Hardhat/Foundry</li>
        <li>Deploy em testnet com documentação</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Audit security report completo</li>
        <li>Fuzzing tests para edge cases</li>
        <li>Multi-chain deployment (Polygon, BSC)</li>
        <li>Tokenomics detalhada e sustentável</li>
        <li>Analytics dashboard em tempo real</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Smart contracts verificados na blockchain</li>
        <li>Interface funcional deployed</li>
        <li>Documentação técnica completa</li>
        <li>Security audit report</li>
        <li>Prazo: 25 dias</li>
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
      "Lidere tecnicamente uma equipe de 8 desenvolvedores frontend. Implemente arquitetura micro-frontends, mentore desenvolvedores júniores, estabeleça code review process e melhore métricas de entrega em 50%.",
    fullDescription: `
      <h3>Desafio Técnico:</h3>
      <p>Transforme uma equipe frontend tradicional em uma squad de alta performance, implementando práticas modernas e arquitetura escalável.</p>
      
      <h3>Requisitos do Desafio:</h3>
      <ul>
        <li>Migração para arquitetura micro-frontends</li>
        <li>Implementação de design system consistente</li>
        <li>Processo de code review estruturado</li>
        <li>Mentoria técnica para 3 desenvolvedores júniores</li>
        <li>Melhoria de 50% nas métricas de delivery</li>
      </ul>
      
      <h3>Extras (Diferenciais):</h3>
      <ul>
        <li>Implementação de module federation</li>
        <li>Pipeline de CI/CD otimizado</li>
        <li>Performance budget enforcement</li>
        <li>A/B testing framework</li>
        <li>Developer experience tools</li>
      </ul>
      
      <h3>Entrega:</h3>
      <ul>
        <li>Arquitetura micro-frontends funcional</li>
        <li>Plano de desenvolvimento da equipe</li>
        <li>Métricas before/after documentadas</li>
        <li>Playbook de boas práticas</li>
        <li>Prazo: 120 dias (transformação gradual)</li>
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

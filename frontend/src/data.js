// Screenshot images — imported as ES modules so Vite bundles them correctly
// and resolves paths properly when deployed to GitHub Pages (/surigo-site/ base).
import imgSoftPrompts from './assets/images/SoftPromptsWorkflow.png';
import imgAnizenith from './assets/images/Anizenith.png';
import imgAgenticGraphRAG from './assets/images/AgenticGraphRAG.png';
import imgAICarRacing from './assets/images/AI-CarRacing.png';

export const heroAboutText = `
MS CS student at WPI building on 3 years of engineering enterprise software at Visa Inc. 
Specializing in scalable distributed systems and applied AI — 
currently researching LLM Interpretability and ASR Correction Intelligence.
`

export const funFacts = {
    title: "Beyond the Code",
    intro: "When I'm not building systems or debugging issues, you'll find me...",
    items: [
        { emoji: "⚽", label: "Cheering for Real Madrid" },
        { emoji: "💪🏼", label: "Hypertrophy Training" },
        { emoji: "🍔", label: "Culinary Exploration" },
        { emoji: "🎱", label: "Cue sports tactician" },
        { emoji: "🧑‍🍳", label: "Kitchen Alchemist" },
    ]
};


export const experienceData = [
    {
        title: "Senior Software Engineer",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "July 2024 - June 2025",
        description: "Engineered high-impact developer tools and AI solutions to accelerate internal software workflows. Built an agentic CLI tool in Python and LangChain that auto-remediates SonarQube code smells such as unused imports and duplicated code with human-in-the-loop review, adopted by pilot teams. Prototyped an LLM-powered IntelliJ code-search plugin using TreeSitter and MongoDB text search to eliminate cross-timezone dependencies on library-owning teams for API contracts and usage examples. Developed a programmable API simulator with GraalVM JavaScript, Spring WebFlux, and MongoDB that was adopted across teams to mock 100+ endpoints, unblocking integration testing for services still in delivery. Architected a RAG chatbot using GPT-4o and text-embedding-ada-002 over PDFs and Confluence that became the go-to reference tool for a PM Director and VP. Drove GenAI adoption across roughly 30 engineers through internal tech talks and onboarding onto GitHub Copilot and internal LLM tooling, while leading detail-oriented pull request reviews to mentor peers.",
        skills: ["RAG", "MongoDB", "Langchain", "Agentic AI & Prompt Engineering"]
    },
    {
        title: "Software Engineer",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "June 2022 - June 2024",
        description: "Engineered reactive Java microservices with Spring WebFlux for Visa's multi-datacenter Alias Directory Service, which resolves a consumer's email or phone number into their card and bank account details for client banks and digital wallets, sustaining 500+ requests/sec per service at sub-10ms P99 latency. De-risked the service's migration from Visa's datacenter to GCP by load-testing realistic client traffic with JMeter, implementing message-level encryption with Nimbus JOSE, and configuring mTLS for secure transit over the public internet. Eliminated performance bottlenecks across the stack, raising throughput 50% and cutting CPU utilization 21% and P99 latency 30%, including diagnosing CPU saturation via VisualVM profiling that traced blocking calls from shared platform libraries. Cut build times 72% by stripping legacy repos of dead code and redundant dependencies, and built automated Postman and Newman test pipelines that reduced production bugs 75%. Stood up the service's first consolidated observability stack with Prometheus, Micrometer, and Grafana, while sustaining 90%+ test coverage and resolving Checkstyle, SonarQube, and NexusIQ findings to meet release-gate compliance.",
        skills: ["Java (Spring Boot / Spring WebFlux)", "Load Testing", "Prometheus & Grafana", "CI/CD Automation", "Latency & Throughput Optimization"]
    },
    {
        title: "Software Engineer Intern",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "May 2020 – July 2020, May 2021 – August 2021",
        description: "Optimized outbound HTTP call configurations for Visa's Alias Directory service through targeted performance testing, boosting application throughput by 25%. Built \"Visa Touch,\" a proof-of-concept web application for generating and delivering personalized digital e-gift cards, engineering its backend from scratch with Java and Spring Boot alongside a PostgreSQL database for transactional storage. Also authored a technical white paper proposing a facial recognition-based biometric payment framework, analyzing security protocols and scalability constraints to inform Visa's long-term contactless payment strategy.",
        skills: ["Java (Spring Boot)", "PostgreSQL", "Performance Testing", "RESTful APIs"]
    }
];

export const skillsData = [
    {
        skillType: "Programming Languages",
        skillsList: ["Java", "Python", "JavaScript", "C++", "C", "Bash"]
    },
    {
        skillType: "AI/ML", 
        skillsList: ["PyTorch", "vLLM", "NumPy", "LangChain", "LangGraph", "Hugging Face", "Tensorboard", "Pandas", "RAG", "Gymnasium"]
    }, 
    {
        skillType: "Backend & Web",
        skillsList: ["Spring Boot", "Spring WebFlux", "FastAPI", "GraalVM", "Maven", "Postman", "Apache Kafka"]
    },
    {
        skillType: "Databases",
        skillsList: ["MongoDB", "MySQL", "PostgreSQL", "Neo4j", "ChromaDB"]
    },
    {
        skillType: "DevOps",
        skillsList: ["Git", "Linux", "Docker", "GitHub Actions", "AWS", "GCP", "Grafana", "Prometheus", "Splunk", "JMeter", "VisualVM"]
    },
    {
        skillType: "Agentic Engineering",
        skillsList: ["Claude Code", "Antigravity", "GitHub Copilot"]
    },

];

export const educationData = [
    {
        institution: "Worcester Polytechnic Institute",
        degree: "M.S. Computer Science",
        date: "Expected in Dec 2026",
        coursework: "Generative AI, Natural Language Processing, Reinforcement Learning, MLDevOps",
        awards: "Best Paper Presentation (Generative AI course)",
        gpa: "4.0"
    },
    {
        institution: "Worcester Polytechnic Institute",
        degree: "B.S. Computer Science",
        date: "May 2022",
        coursework: "Machine Learning, Artificial Intelligence, Analysis of Algorithms, Data Visualization, Software Engineering",
        awards: "High Distinction, Presidential Merit Scholarship, Provost's Major Qualifying Project Award (Honourable Mention), Charles O Thompson Scholar",
        gpa: "3.93"
    }
];

export const projectsData = [
    {
        title: "Soft Prompts Interpretability (Research)",
        description: "Co-first-authored a paper under review at EMNLP proposing a dedicated translator — a LoRA fine-tuned Llama-3.1-8B-Instruct model — that converts continuous soft prompt embeddings into fluent, human-readable task descriptions. Outperformed the prior training-free state of the art (InSPEcT) on every interpretability benchmark, including 0.80 Recall / 0.68 F1 on a 5,500-task classification suite where InSPEcT scored 0/0, and 0.252 vs 0.143 ROUGE-L on general instruction tasks. Engineered two Datasets-of-Datasets spanning 5,500 synthetic tasks and 2.75M sentences via vLLM with Pydantic-guided decoding, managed through a schema-validated SQLite pipeline.",
        link: "",
        pdfLink: "https://arxiv.org/pdf/2605.27642",
        screenshot: imgSoftPrompts,
        skills: ["LLM Fine-Tuning (LoRA)", "vLLM", "Dataset Engineering", "SQLite", "PyTorch", "Hugging Face"]
    },
    {
        title: "AniZenith",
        description: "Built AniZenith, a RAG-powered discovery chatbot with a FastAPI backend and JavaScript frontend that helps anime watchers find shows matching their preferences, grounding recommendations in real show metadata via MongoDB Vector Search and cosine similarity. Designed a dual-inference architecture letting users switch between a cloud-hosted LLM and a CPU-hosted local fallback model for resilience against API outages, and containerized the stack into a single Docker image deployed across AWS ECS Fargate, GCP Cloud Run, and Azure Container Apps with GitHub Actions CI/CD and Prometheus/Grafana observability.",
        link: "https://github.com/ShafathZ/AniZenithProject",
        pdfLink: "",
        screenshot: imgAnizenith,
        skills: ["Multi-Cloud Deployment (AWS / GCP / Azure)", "FastAPI", "GitHub Actions", "Docker", "MongoDB Vector Search"]
    },
    {
        title: "Yelp Restaurant QA Agent",
        description: "Built an agentic Graph RAG chatbot for restaurant Q&A, engineering a Neo4j knowledge graph — built with bart-large-mnli zero-shot metadata classification and google-embedding-001 review embeddings — to capture relational attributes like ratings, location, and amenities that plain review-embedding RAG misses. Designed a two-agent LangGraph architecture pairing a Gemini-2.5-Flash orchestrator, which rejects under-specified queries and skips unnecessary retrieval, with a Gemini-2.5-Pro Cypher retriever restricted to a read-only Cypher tool (mcp-neo4j-cypher) for defense against destructive queries. Achieved roughly 3x Factual Accuracy and 2x Entity Recall over baseline approaches, evaluated via an LLM-as-a-Judge framework using GPT-5 and Gemini 2.5 Pro.",
        link: "https://github.com/Suryanshg/Yelp-Restaurant-QA-Agent",
        pdfLink: "",
        screenshot: imgAgenticGraphRAG,
        skills: ["LangGraph", "Neo4j", "Graph RAG", "Agentic RAG", "Docker", "LLM-as-a-Judge Eval"]
    },
    {
        title: "AI Car Racing",
        description: "Developed and trained competitive Proximal Policy Optimization (PPO) and Advantage Actor-Critic (A2C) agents using PyTorch and Gymnasium. After diagnosing the agent exploiting the reward structure by cutting corners through grass to skip track segments, engineered a custom reward-shaping wrapper penalizing grass contact that boosted mean rewards by 62%, testing diverse CNN, attention, and residual architectures to achieve an average evaluation score of 829.",
        link: "https://github.com/Suryanshg/AI-Car-Racing",
        pdfLink: "",
        screenshot: imgAICarRacing,
        skills: ["Deep Reinforcement Learning (PPO / A2C)", "PyTorch", "OpenAI Gymnasium", "Reward Shaping"]
    }
];


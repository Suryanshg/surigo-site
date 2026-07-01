// Screenshot images — imported as ES modules so Vite bundles them correctly
// and resolves paths properly when deployed to GitHub Pages (/surigo-site/ base).
import imgSoftPrompts from './assets/images/SoftPromptsWorkflow.png';
import imgAnizenith from './assets/images/Anizenith.png';
import imgAgenticGraphRAG from './assets/images/AgenticGraphRAG.png';
import imgAICarRacing from './assets/images/AI-CarRacing.png';

export const bioSections = [
    {
        icon: "fa-solid fa-user",
        title: "About Me",
        content: "I am currently pursuing an MS in CS at Worcester Polytechnic Institute, building upon my BS in CS from the same institution. Before returning to academia, I spent three years engineering enterprise backend systems at Visa Inc. I specialize in building highly available, distributed architectures, having engineered reactive microservices and Agentic AI solutions."
    },
    {
        icon: "fa-solid fa-lightbulb",
        title: "Problem Solver",
        content: "My technical interests lie in scalable software engineering and applied AI / ML. I thrive on translating theoretical concepts into production-ready systems. My recent academic research includes authoring a paper on soft prompt interpretability—currently under review for the EMNLP conference—and architecting an Agentic Graph RAG system for Question-Answering on Yelp Dataset. At Visa Inc., I have developed Agentic AI developer tools utilizing LangChain and Python, including a CLI for automated code remediation and an IntelliJ plugin for internal code search."
    },
    {
        icon: "fa-solid fa-bug",
        title: "Relentless Debugger",
        content: "I am obsessed with system stability, observability, and optimization. I have a proven track record of identifying and resolving complex infrastructure bottlenecks through targeted performance testing; in one instance, this approach increased system throughput by ~50% and cut P99 latencies by ~30%. Whether I am refactoring legacy Java codebases to slash build times by 72% or engineering comprehensive observability pipelines using Prometheus and Grafana, I build systems designed to perform flawlessly under pressure."
    }
];

export const funFacts = {
    title: "Beyond the Code",
    intro: "When I'm not building systems or debugging issues, you'll find me...",
    items: [
        { emoji: "⚽", label: "Cheering for Real Madrid" },
        { emoji: "💪🏼", label: "Hypertrophy Training" },
        { emoji: "🍔", label: "Culinary Exploration" },
        { emoji: "🎱", label: "Cue sports tactician" },
        { emoji: "🧑‍🍳", label: "Kitchen Alchemist:" },
    ]
};


export const experienceData = [
    {
        title: "Senior Software Engineer",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "July 2024 - June 2025",
        description: "Engineered high-impact, full-stack developer tools and AI solutions to accelerate internal software workflows. Led the development of an agentic AI CLI tool utilizing Python and LangChain to automate Java code smell remediation, featuring a human-in-the-loop steering mechanism. Built a MongoDB-backed indexing pipeline and an IntelliJ plugin using TreeSitter to optimize repository code search. Additionally, developed a high-performance API simulator leveraging GraalVM and Spring WebFlux to mock complex HTTP endpoints. Spearheaded generative AI adoption through tech talks and architected a robust RAG chatbot utilizing GPT-4o to accurately surface insights from technical documentation.",
        skills: ["RAG", "MongoDB", "Langchain", "Agentic AI & Prompt Engineering"]
    },
    {
        title: "Software Engineer",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "June 2022 - June 2024",
        description: "Engineered high-performance, reactive Java microservices using Spring WebFlux for Visa’s multi-datacenter Alias Directory project, successfully processing 500+ TPS with sub-10ms P99 latency. Spearheaded rigorous load and performance testing via JMeter, optimizing system bottlenecks to boost throughput by 50% and reduce CPU utilization by 21%. Revolutionized development workflows by refactoring legacy codebases to cut build times by 72% and deploying automated Postman testing pipelines that dropped production bugs by 75%. Additionally, established comprehensive system observability utilizing Prometheus and Grafana, while embedding DevSecOps practices to achieve 90%+ repository test coverage and eliminate critical security vulnerabilities.",
        skills: ["Java (Spring Boot / Spring WebFlux)", "Load Testing", "Prometheus & Grafana", "CI/CD Automation", "Latency & Throughput Optimization"]
    },
    {
        title: "Software Engineer Intern",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "May 2021 - August 2021",
        description: "Conducted targeted performance testing on the Alias Directory project, isolating and optimizing critical bottlenecks in outbound HTTP call configurations. This system tuning successfully boosted application throughput by 25%. Additionally, driven by a commitment to engineering excellence, proactively audited codebase repositories to eliminate security hotspots, remediate software vulnerabilities, and clear technical code smells. Successfully drove comprehensive unit and integration test coverage across all assigned repositories to a robust baseline of at least 90%, significantly reinforcing platform reliability and software delivery standards prior to production deployment.",
        skills: ["HTTP Architecture", "Vulnerability Remediation", "Code Quality Auditing", "Unit & Integration Testing"]
    },
    {
        title: "Software Engineer Intern",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "May 2020 - July 2020",
        description: "Developed an proof-of-concept web application built to streamline the generation and delivery of personalized digital e-gift cards. Engineered the platform's backend ecosystem from scratch utilizing Java with Spring Boot, paired with a robust PostgreSQL database architecture for transactional storage. In addition to software development, conducted extensive emerging technology research and authored a comprehensive technical white paper. The publication proposed an innovative facial recognition-based biometric payment framework, analyzing security protocols and scalability constraints to drive forward Visa's long-term contactless payment strategies.",
        skills: ["Java(Spring Boot)", "PostgreSQL", "RESTful APIs"]
    }
];

export const skillsData = [
    {
        skillType: "Programming Languages",
        skillsList: ["Python", "Java", "JavaScript", "C++", "Bash"]
    },
    {
        skillType: "AI/ML", 
        skillsList: ["PyTorch", "vLLM", "NumPy", "LangChain", "LangGraph", "Hugging Face", "Tensorboard", "Pandas", "RAG", "Gymnasium"]
    }, 
    {
        skillType: "Backend & Web",
        skillsList: ["Spring Boot", "Spring WebFlux", "FastAPI", "Flask", "GraalVM", "Maven", "Postman", "Apache Kafka"]
    },
    {
        skillType: "Databases",
        skillsList: ["MongoDB", "MySQL", "PostgreSQL", "Neo4j", "ChromaDB"]
    },
    {
        skillType: "DevOps",
        skillsList: ["Git", "Linux", "Docker", "GitHub Actions", "AWS", "GCP", "Azure", "Grafana", "Prometheus", "Splunk", "JMeter", "VisualVM"]
    },
    {
        skillType: "Agentic Engineering",
        skillsList: ["Claude Code", "Antigravity CLI", "GitHub Copilot"]
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
        coursework: "Machine Learning, Artificial Intelligence, Mobile and Ubiquitous Computing, Data Visualization, Analysis of Algorithms, Operating Systems, Databases",
        awards: "Presidential Merit Scholarship, Provost's Major Qualifying Project Award (Honourable Mention), Charles O Thompson Scholar",
        gpa: "3.93"
    }
];

export const projectsData = [
    {
        title: "Soft Prompts Interpretability (Research)",
        description: "Authored EMNLP-submitted research on translating continuous soft prompt embeddings into human-readable text using a LoRA fine-tuned Llama-3.1-8B model. Engineered massive data pipelines handling 2.75M+ synthetic tokens via vLLM and a custom SQLite schema, validating model interpretability through activation patching and ROUGE heatmaps.",
        link: "",
        pdfLink: "https://arxiv.org/pdf/2605.27642",
        screenshot: imgSoftPrompts,
        skills: ["LLM Fine-Tuning (LoRA)", "vLLM", "Dataset Engineering", "SQLite", "PyTorch", "Hugging Face"]
    },
    {
        title: "AniZenith",
        description: "Architected a RAG-powered anime recommendation engine with a FastAPI backend, JavaScript frontend, and MongoDB Vector Search. Implemented a dual-inference cloud/local fallback engine and automated full deployment across multi-cloud infrastructure (AWS, GCP, Azure) via Docker, GitHub Actions CI/CD, and Prometheus/Grafana observability.",
        link: "https://github.com/ShafathZ/AniZenithProject",
        pdfLink: "",
        screenshot: imgAnizenith,
        skills: ["Multi-Cloud Deployment (AWS / GCP / Azure)", "FastAPI", "GitHub Actions", "Docker", "MongoDB Vector Search"]
    },
    {
        title: "Yelp Restaurant QA Agent",
        description: "Architected a multi-agent Graph RAG system using LangGraph and Gemini to dynamically execute Cypher searches on a Neo4j knowledge graph built from Yelp data. Containerized the pipeline via Docker with strict read-only LLM tool constraints, achieving a ~3x improvement in factual accuracy over standard RAG baselines via an LLM-as-a-Judge evaluation framework.",
        link: "https://github.com/Suryanshg/Yelp-Restaurant-QA-Agent",
        pdfLink: "",
        screenshot: imgAgenticGraphRAG,
        skills: ["LangGraph", "Neo4j", "Graph RAG", "Agentic RAG", "Docker", "LLM-as-a-Judge Eval"]
    },
    {
        title: "AI Car Racing",
        description: "Developed and trained competitive Proximal Policy Optimization (PPO) and Advantage Actor-Critic (A2C) agents using PyTorch and Gymnasium. Engineered a custom reward-shaping wrapper that boosted mean rewards by 62%, testing diverse CNN, attention, and residual architectures to achieve an average evaluation score of 829.",
        link: "https://github.com/Suryanshg/AI-Car-Racing",
        pdfLink: "",
        screenshot: imgAICarRacing,
        skills: ["Deep Reinforcement Learning (PPO / A2C)", "PyTorch", "OpenAI Gymnasium", "Reward Shaping"]
    }
];


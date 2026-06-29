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
        { emoji: "⚽", label: "Cheering for Real Madrid!" },
        { emoji: "🎱🥢", label: "Playing 8-Ball Pool" },
        { emoji: "💪🏼", label: "Hitting the Gym" },
        { emoji: "🍔", label: "Exploring Food" },
    ]
};


export const experienceData = [
    {
        title: "Senior Software Engineer",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "July 2024 - June 2025",
        description: "I spearheaded initiatives that merged enterprise-grade backend systems with cutting-edge Generative AI. A major focus of my work involved optimizing developer velocity by building intelligent internal tooling. For example, I engineered an Agentic AI CLI tool using Python and LangChain that automated Java code smell remediation via SonarQube reports, explicitly incorporating a human-in-the-loop mechanism so developers could steer or override the AI's fixes. I also prototyped an Agentic AI IntelliJ plugin for internal code search, leveraging LangChain, TreeSitter, and a MongoDB-backed indexing pipeline to ground LLM responses directly in our internal platform libraries.",
        skills: ["TODO: Skill 1", "TODO: Skill 2", "TODO: Skill 3", "TODO: Skill 4", "TODO: Skill 5"]
    },
    {
        title: "Software Engineer",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "June 2022 - June 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: ["TODO: Skill 1", "TODO: Skill 2", "TODO: Skill 3", "TODO: Skill 4", "TODO: Skill 5"]
    },
    {
        title: "Software Engineer Intern",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "May 2021 - August 2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: ["TODO: Skill 1", "TODO: Skill 2", "TODO: Skill 3", "TODO: Skill 4", "TODO: Skill 5"]
    },
    {
        title: "Software Engineer Intern",
        company: "Visa Inc.",
        logoClass: "fa-brands fa-cc-visa",
        date: "May 2020 - July 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: ["TODO: Skill 1", "TODO: Skill 2", "TODO: Skill 3", "TODO: Skill 4", "TODO: Skill 5"]
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
        skillType: "DevOps & Observability",
        skillsList: ["Git", "Linux", "Docker", "GitHub Actions", "AWS", "GCP", "Azure", "Grafana", "Prometheus", "Splunk", "JMeter", "VisualVM"]
    },
    {
        skillType: "Agentic Engineering",
        skillsList: ["Claude Code", "GitHub Copilot", "Aider"]
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
        title: "AniZenith",
        description: "A modern web application built with React, Vite, and Node.js. Enables real-time data sync and user collaboration.",
        link: "https://github.com/ShafathZ/AniZenithProject", // TODO: update or remove link
        skills: ["TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill"]
    },
    {
        title: "Yelp Restaurant QA Agent",
        description: "A machine learning tool that predicts data trends using Python, scikit-learn, and Pandas.",
        link: "https://github.com/Suryanshg/Yelp-Restaurant-QA-Agent", // TODO: add GitHub link
        skills: ["TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill"]
    },
    {
        title: "Soft Prompt Translator",
        description: "A responsive portfolio template designed to be completely customizable and lightweight.",
        link: "", // TODO: add GitHub link
        skills: ["TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill"]
    },
    {
        title: "AI Car Racing",
        description: "A responsive portfolio template designed to be completely customizable and lightweight.",
        link: "", // TODO: add GitHub link
        skills: ["TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill"]
    },
    {
        title: "ShakespeareGPT",
        description: "A responsive portfolio template designed to be completely customizable and lightweight.",
        link: "", // TODO: add GitHub link
        skills: ["TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill", "TODO: skill"]
    },
];

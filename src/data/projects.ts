export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  overview?: string;
  features?: string[];
  techStack?: {
    frontend?: string[];
    backend?: string[];
    design?: string[];
    database?: string[];
    auth?: string[];
    deployment?: string[];
    apis?: string[];
    ai?: string[];
    ml?: string[];
    blockchain?: string[];
  };
  focus?: string;
}

export const projects: Project[] = [
  {
    slug: "ecomart",
    title: "EcoMart | Sustainable E-Commerce Product Design",
    description:
      "A sustainability-focused e-commerce platform designed and developed with modern UI and frontend technologies.",
    tags: ["Figma", "React (TSX)", "Tailwind CSS", "shadcn/ui", "UI/UX Design", "Vercel Hosting"],
    link: "https://eco-mart-alpha.vercel.app/",
    overview:
      "EcoMart is a sustainability-focused e-commerce product designed to promote eco-friendly shopping. The platform emphasizes clean UI, intuitive UX, and transparency by showcasing environmental impact metrics like CO₂ saved and trees planted.",
    features: [
      "Minimal eco-themed UI (white & green palette)",
      "Card-based product browsing and comparison",
      "Product pages with eco scores and certifications",
      "Interactive cart and checkout flow",
      "User dashboard for tracking environmental impact",
      "Accessibility-focused typography and layout",
    ],
    techStack: {
      design: ["Figma"],
      frontend: ["React (TSX)", "Tailwind CSS", "shadcn/ui"],
      deployment: ["Vercel"],
    },
    focus:
      "Product design, UX storytelling, and converting high-fidelity Figma designs into a functional frontend.",
  },
  {
    slug: "novelnest",
    title: "NovelNest | Library Management System",
    description:
      "A database-driven library management system for handling book records, users, and transactions efficiently.",
    tags: ["Supabase (PostgreSQL)", "DBMS", "HTML5", "Tailwind CSS", "Vanilla JavaScript"],
    link: "https://novel-nest-kappa.vercel.app/",
    overview:
      "NovelNest is a web-based Library Management System designed to digitize and simplify library operations through a secure, role-based platform. It replaces traditional manual workflows with a reliable, database-driven solution for managing books, users, and transactions.",
    features: [
      "Role-based authentication for students and administrators",
      "Book browsing, availability tracking, issue/return system",
      "Admin dashboard for managing inventory and student records",
      "Automatic due-date calculation and real-time stock updates",
      "Secure access using Row Level Security (RLS)",
      "Relational database design with integrity constraints",
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "Vanilla JavaScript"],
      database: ["Supabase (PostgreSQL)"],
      auth: ["Supabase Auth"],
      deployment: ["Vercel"],
    },
    focus:
      "Database-driven web development with strong emphasis on DBMS concepts, access control, and secure data handling.",
  },
  {
    slug: "teamchat-plus",
    title: "TeamChat+ | Real-Time Chat Application",
    description:
      "A real-time chat application supporting instant messaging using WebSocket-based communication.",
    tags: ["Python", "FastAPI", "WebSockets", "HTML5", "CSS3", "Vanilla JavaScript", "WebSocket API", "MediaRecorder API"],
    link: "https://drive.google.com/file/d/1B6sXCg_U939cG5JyyeIQFe0P_3EUQlvT/view",
    overview:
      "TeamChat+ is a real-time, room-based chat application built using Python and WebSockets to enable instant communication without relying on a database.",
    features: [
      "Real-time messaging via WebSockets",
      "Dynamic chat room creation and joining",
      "File sharing with automatic categorization",
      "Voice messaging using MediaRecorder API",
      "Message sync for newly joined users",
      "Responsive UI with animations and glassmorphism",
    ],
    techStack: {
      backend: ["Python", "FastAPI", "Uvicorn", "WebSockets"],
      frontend: ["HTML5", "CSS3", "Vanilla JavaScript"],
      apis: ["WebSocket API", "MediaRecorder API"],
    },
    focus:
      "Low-latency real-time systems and WebSocket-based communication.",
  },
  {
    slug: "workverse",
    title: "WorkVerse | Collaborative Workspace",
    description:
      "A MERN-stack collaborative workspace enabling task management, team coordination, and seamless web-based collaboration.",
    tags: ["MERN Stack", "REST APIs", "Web Development", "Python", "Full-Stack Development"],
    overview:
      "WorkVerse is a digital workspace designed to improve productivity and collaboration in remote and hybrid environments by combining development tools, communication, and AI-powered features.",
    features: [
      "Live collaborative IDE",
      "Team chat module",
      "AI-powered chatbot assistance",
      "Task organizer (To-Do system)",
      "Project collaboration hub",
      "AI-based interview bot",
      "Role-based access control (RBAC)",
    ],
    techStack: {
      frontend: ["React"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      ai: ["Python", "OpenCV", "Flask"],
    },
    focus: "Full-stack development, collaboration systems, and AI integration.",
  },
  {
    slug: "mindmap",
    title: "MindMap | Visual Idea Mapping Tool",
    description:
      "An interactive mind-mapping tool for visually organizing ideas, workflows, and concepts.",
    tags: ["React", "TypeScript", "React Flow", "Tailwind CSS", "shadcn/ui", "Front-End Development"],
    link: "https://mindmap-self.vercel.app/",
    overview:
      "MindMap is an interactive web application that helps users visually organize ideas, concepts, and workflows using a node-based interface.",
    features: [
      "Drag-and-drop node-based interface",
      "Real-time visual updates",
      "Clean, distraction-free UI",
      "Responsive and intuitive interactions",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "React Flow", "Tailwind CSS", "shadcn/ui"],
    },
    focus:
      "Frontend engineering, visual data representation, and interactive UI design.",
  },
  {
    slug: "claricontract",
    title: "ClariContract | AI-Powered Contract Analysis Platform",
    description:
      "A smart contract analysis platform leveraging AI and NLP to classify clauses, detect risks, and ensure contract transparency.",
    tags: ["React.js", "Tailwind CSS", "PDF.js", "Node.js", "Python", "FastAPI", "Supabase (PostgreSQL)", "AI/NLP", "PyTorch", "Hugging Face", "Longformer", "DeBERTa", "RAG", "Security & RLS"],
    overview:
      "ClariContract is an AI-powered platform that analyzes legal contracts by breaking them into clauses, identifying clause types, detecting risk levels, and explaining them in simple language.",
    features: [
      "PDF upload and text extraction",
      "Clause segmentation using Longformer",
      "Clause type classification using DeBERTa",
      "Risk level detection (Low to Critical)",
      "Human-readable explanations and suggestions",
      "Visual risk summaries and AI-based Q&A",
      "Secure user authentication with RLS",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "PDF.js"],
      backend: ["Node.js", "Express", "Python", "FastAPI"],
      ml: ["PyTorch", "Hugging Face Transformers", "Longformer", "DeBERTa"],
      database: ["Supabase (PostgreSQL)"],
      auth: ["Supabase Auth", "Row Level Security (RLS)"],
    },
    focus: "Explainable AI, NLP, and scalable AI-driven system architecture.",
  },
  {
    slug: "resumate",
    title: "ResuMate | Smart Resume Builder Mobile App",
    description:
      "An Android application that enables users to build professional resumes and export them as PDFs.",
    tags: ["Java", "Android Development", "XML", "Supabase", "Authentication", "PDF Generation", "Mobile App Development"],
    overview:
      "ResuMate is an Android application that simplifies resume creation by offering structured templates, secure login, and PDF export functionality.",
    features: [
      "Secure authentication with Supabase",
      "Multiple resume templates",
      "Dynamic resume builder using XML & Java",
      "PDF generation and sharing",
      "Cloud storage for resumes",
      "Expert CV writing tips",
    ],
    techStack: {
      frontend: ["XML (Android Studio UI)"],
      backend: ["Java"],
      database: ["Supabase"],
      auth: ["Supabase Auth"],
      deployment: ["Android"],
    },
    focus: "Mobile application development and user-centric design.",
  },
  {
    slug: "employee-ticket-portal",
    title: "Employee Ticket Portal",
    description:
      "A web-based ticketing system for managing employee issues and internal requests.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Full-Stack Development"],
    overview:
      "A web-based system designed to manage employee issues by allowing users to raise tickets that are tracked and resolved through a centralized workflow.",
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["PHP"],
      database: ["MySQL", "Oracle"],
    },
    focus: "Full-stack web development and database integration.",
  },
  {
    slug: "pharmacy-management-system",
    title: "Pharmacy Management System",
    description:
      "A management system for pharmacy inventory, billing, and customer records.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "DBMS", "Software Development"],
    overview:
      "A database-driven system for managing pharmacy inventory, billing, and product records with real-time updates.",
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["PHP"],
      database: ["MySQL"],
    },
    focus: "Backend-driven web applications and inventory management.",
  },
  {
    slug: "student-organizer",
    title: "Student Organizer",
    description:
      "A simple productivity web application for organizing academic tasks and schedules.",
    tags: ["HTML", "CSS", "JavaScript", "Front-End Development", "Web Development"],
    overview:
      "A productivity-focused web application that helps students manage schedules, tasks, and daily academic activities.",
    features: ["Calendar scheduler", "To-do list", "Clean and user-friendly interface"],
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
    },
    focus: "Simple, clean, and effective productivity tools for students.",
  },
  {
    slug: "pasta-and-pour",
    title: "Pasta & Pour | Café Website UI/UX",
    description:
      "A modern café website design focused on branding, layout, and user experience.",
    tags: ["UI/UX Design", "Figma", "Typography", "Color Theory", "Prototyping"],
    link: "https://www.figma.com/proto/yhUpD67GxLJLVCOgfEdgYP/Pasta---Pour---Urban-Cafe-Website-UI",
    overview:
      "A café website product design inspired by Italian comfort food and slow coffee culture, focusing on warm visuals, storytelling, and intuitive navigation.",
    techStack: {
      design: ["Figma", "Wireframing", "Prototyping", "Typography", "Color Theory"],
    },
    focus: "Warm visuals, storytelling, and intuitive navigation for café branding.",
  },
  {
    slug: "healyou",
    title: "HealYou | Mental Health App (UI/UX)",
    description:
      "A mental health mobile app prototype designed with a calm, user-centric interface.",
    tags: ["UI/UX Design", "Figma", "Mobile App Design", "UX Optimization", "Prototyping"],
    link: "https://www.figma.com/proto/5rkVF7wWkhsPmcWG25r90Q/HealYou-Mental-Health-App",
    overview:
      "HealYou is a mental wellness app prototype designed with a calm, empathetic interface to support emotional well-being.",
    focus: "Accessibility, user comfort, and mental health–focused UI/UX design.",
  },
  {
    slug: "travora",
    title: "TRAVORA | Smart Travel Safety App",
    description:
      "A travel safety application prototype focused on tourist assistance and monitoring.",
    tags: ["UI/UX Design", "Figma", "Mobile App Design", "User Research", "Prototyping"],
    link: "https://www.figma.com/proto/3iDTfeUVGJDiHPteLTD3HL/TRAVORA-SIH-rough-prototype",
    overview:
      "TRAVORA is an AI-powered travel safety and assistance platform designed to make tourism safer, smarter, and more personalized.",
    features: [
      "Blockchain-based digital tourist identity",
      "AI-based anomaly detection",
      "SOS and live emergency response",
      "Geo-fencing alerts for high-risk zones",
      "Interactive maps and real-time insights",
    ],
    techStack: {
      frontend: ["React"],
      backend: ["Node.js"],
      ai: ["Python (AI/ML)"],
      blockchain: ["Hyperledger"],
      apis: ["Mapbox"],
      deployment: ["AWS", "Firebase"],
    },
    focus: "To redefine travel through safety, intelligence, and collaboration.",
  },
];

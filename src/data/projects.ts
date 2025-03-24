import { Code2, Brain, Library } from 'lucide-react';

export const projects = [
  {
    title: "Gen-Exam",
    description: "Revolutionary AI-powered examination system that automatically generates personalized questions using advanced NLP and semantic understanding. Integrated with ChromaDB for efficient knowledge retrieval and AWS for scalable deployment.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    technologies: ["NLP", "ChromaDB", "AWS", "Python", "FastAPI", "React"],
    githubUrl: "https://github.com/mohamedallamai/gen-exam",
    icon: Code2,
    stats: {
      users: "1000+",
      accuracy: "95%",
      questions: "50K+"
    }
  },
  {
    title: "US Criminal Code Chatbot",
    description: "Advanced legal AI assistant utilizing transformer models and semantic search to provide accurate interpretations of criminal codes. Features real-time updates and integration with legal databases.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    technologies: ["NLP", "Machine Learning", "FastAPI", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/mohamedallamai/criminal-code-bot",
    icon: Brain,
    stats: {
      accuracy: "98%",
      queries: "10K+",
      sources: "500+"
    }
  },
  {
    title: "Library Management System",
    description: "Next-generation library system featuring AI-powered book recommendations, natural language search, and automated categorization. Includes real-time analytics and predictive maintenance.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "SQL", "React", "Machine Learning", "Redis", "TypeScript"],
    githubUrl: "https://github.com/mohamedallamai/library-system",
    icon: Library,
    stats: {
      books: "100K+",
      users: "5000+",
      accuracy: "96%"
    }
  }
];
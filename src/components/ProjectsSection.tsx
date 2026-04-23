import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star, Briefcase, User } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

type ProjectType = "personal" | "freelance";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  status: "Completed" | "In Progress";
  github?: string;
  live?: string;
  featured?: boolean;
  client?: string;
  role?: string;
  year?: string;
}

const personalProjects: Project[] = [
  {
    title: "CloudSync Pro",
    description: "A real-time cloud collaboration platform with live document editing, team chat, and file sync.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    image: project1,
    status: "Completed",
    github: "#",
    live: "#",
    featured: true,
    year: "2025",
  },
  {
    title: "ChatMate",
    description: "A real-time chat application built using MERN stack and WebSockets with authentication.",
    tags: ["React", "Express", "MongoDB", "Socket.io"],
    image: project2,
    status: "Completed",
    github: "#",
    live: "#",
    year: "2024",
  },
  {
    title: "DevFolio",
    description: "A platform where developers can upload their projects, explore others' work, and leave reviews.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: project4,
    status: "In Progress",
    github: "#",
    live: "#",
    year: "2025",
  },
];

const freelanceProjects: Project[] = [
  {
    title: "ShopFlow",
    description: "Full-stack e-commerce platform with Stripe payments, product management, and order tracking.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: project3,
    status: "Completed",
    live: "#",
    featured: true,
    client: "Retail Co.",
    role: "Full-Stack Developer",
    year: "2024",
  },
  {
    title: "Agency Landing",
    description: "High-converting marketing website with CMS integration and animated hero sections.",
    tags: ["Next.js", "Framer Motion", "Sanity"],
    image: project1,
    status: "Completed",
    live: "#",
    client: "Creative Agency",
    role: "Frontend Developer",
    year: "2024",
  },
];

const tabs: { id: ProjectType; label: string; icon: typeof User; data: Project[] }[] = [
  { id: "personal", label: "Personal", icon: User, data: personalProjects },
  { id: "freelance", label: "Freelance", icon: Briefcase, data: freelanceProjects },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<ProjectType>("personal");

  const activeProjects = tabs.find((t) => t.id === active)?.data ?? [];

  return (
    <section id="projects" className="py-12">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6 flex-wrap gap-4"
        >
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>

          {/* Tab toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-lg border border-border bg-card">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-md bg-secondary"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={14} />
                    {tab.label}
                    <span className="text-xs text-muted-foreground">{tab.data.length}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {activeProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border overflow-hidden bg-card hover:shadow-lg hover:border-foreground/20 transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-background/90 backdrop-blur text-xs font-medium text-foreground border border-border">
                      <Star size={11} className="fill-foreground" />
                      Featured
                    </span>
                  )}
                  {project.year && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-background/90 backdrop-blur text-xs font-medium text-muted-foreground border border-border">
                      {project.year}
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          aria-label={`${project.title} live`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          aria-label={`${project.title} github`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {project.client && (
                    <p className="text-xs text-muted-foreground mb-2">
                      <span className="text-foreground font-medium">{project.client}</span>
                      {project.role && <span> · {project.role}</span>}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-secondary text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium ${
                        project.status === "Completed" ? "text-green" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === "Completed" ? "bg-green" : "bg-muted-foreground"
                        }`}
                      />
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;

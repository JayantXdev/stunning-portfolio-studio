import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projects = [
  {
    title: "CloudSync Pro",
    description: "A real-time cloud collaboration platform with live document editing, team chat, and file sync.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    image: project1,
    status: "Completed",
    github: "#",
    live: "#",
  },
  {
    title: "ChatMate",
    description: "A real-time chat application built using MERN stack and WebSockets with authentication.",
    tags: ["React", "Express", "MongoDB", "Socket.io"],
    image: project2,
    status: "Completed",
    github: "#",
    live: "#",
  },
  {
    title: "ShopFlow",
    description: "Full-stack e-commerce platform with Stripe payments, product management, and order tracking.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: project3,
    status: "Completed",
    github: "#",
    live: "#",
  },
  {
    title: "DevFolio",
    description: "A platform where developers can upload their projects, explore others' work, and leave reviews.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: project4,
    status: "In Progress",
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" >
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-8"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={16} />
                    </a>
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                    project.status === "Completed" ? "text-green" : "text-muted-foreground"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "Completed" ? "bg-green" : "bg-muted-foreground"
                    }`} />
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

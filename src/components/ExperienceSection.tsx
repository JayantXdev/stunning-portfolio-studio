import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import codepulse from "@/assets/codepulse.png";
const experiences = [
  {
    title: "Backend Developer",
    company: "Innovize Tech Solutions PVT Ltd.",
    location: "Rohtak, Haryana, Full-Time",
    period: "Sep 2025 - Present",
    description:"Worked as a Backend Developer at Innovize Tech Solutions, designing scalable APIs and optimizing server-side architecture while implementing caching and performance-driven backend solutions.",
    bullets: [
      "Developed and maintained RESTful APIs using Node.js and Express.js for scalable web applications",
      "Implemented Redis caching to improve API response time and reduce database load",
      "Optimized database queries and backend logic for high-performance data handling"
    ],
    icon: "https://innovizetechsolution.com/assets/logo-_rJm_nsb.webp",
    iconBg: "bg-card",
  },
  {
    title: "Full Stack Developer",
    company: "Code Pulse It Services PVT Ltd.",
    location: "Part-Time",
    period: "April 2024 - July 2025",
    description:"Worked as a Part-Time Full Stack Developer (Frontend Focused) at Code Pulse IT Services, building responsive client websites and managing efficient state handling for scalable web applications.",
    bullets: [
      "Designed and developed multiple static and dynamic websites for client projects",
      "Built responsive UI using React.js, HTML, CSS, and Tailwind CSS",
      "Implemented Redux for efficient client-side state management",
    ],
    icon: codepulse,
    iconBg: "bg-amber-500",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-10 border-border">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground mb-8"
        >
          Experience
        </motion.h2>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-lg border border-border flex items-center justify-center text-foreground font-bold text-lg shrink-0`}
                >
                  <img src={exp.icon} alt={exp.company} className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap sm:pt-1 mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="text-foreground font-medium">
                      {exp.company}
                    </span>
                    {" · "}
                    {exp.location}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {exp.description}
              </p>

              <ul className="space-y-1.5">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

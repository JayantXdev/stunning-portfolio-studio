import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, FileText, Terminal } from "lucide-react";

const socials = [
  { icon: Twitter, label: "Twitter", href: "https://x.com/jaxyant" },
  { icon: Github, label: "GitHub", href: "https://github.com/jayantxdev" },
  { icon: Mail, label: "Email", href: "mailto:jayantarora123a@gmail.com" },
  { icon: Terminal, label: "Terminal", href: "#" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg grid-fade" />

      <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
            Hi, I'm Jayant Arora</h1>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green/30 bg-green/10 text-xs font-medium text-green mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Open to work
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-muted-foreground leading-relaxed mb-2 max-w-2xl"
        >
          A <span className="text-foreground font-medium">full-stack developer</span> who loves coding, tech, and open source.
          I build clean, modern web applications using{" "}
          <span className="text-foreground font-medium">TypeScript, React, Node.js</span>, and{" "}
          <span className="text-foreground font-medium">PostgreSQL</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl"
        >
          I'm open to <span className="text-foreground font-medium">freelance projects</span>,{" "}
          <span className="text-foreground font-medium">collaborations</span>, and{" "}
          <span className="text-foreground font-medium">full-time opportunities</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="https://drive.google.com/file/d/1iYw8mo1_gJTicTYwSE0g8PbWrF7mDOXG/view?usp=sharing"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Mail size={16} />
            Contact
          </a>

          <span className="hidden sm:block w-px h-8 bg-border mx-1" />

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

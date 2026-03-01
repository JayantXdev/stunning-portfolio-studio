import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import avatar from "@/assets/avatar.png";

const navItems = ["Projects", "Skills", "Contact"];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Avatar logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-border bg-secondary">
            <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </button>

        {/* Floating pill nav */}
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-border">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-background transition-all"
            >
              {item}
            </button>
          ))}
          
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-background transition-all ml-1"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

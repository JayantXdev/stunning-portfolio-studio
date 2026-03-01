import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Mail, Twitter, ArrowUpRight, ArrowRight } from "lucide-react";
import { createContact } from "@/services/contact.service";

const contactMethods = [
  {
    icon: Calendar,
    title: "Schedule a free call",
    subtitle: "30-minute strategy session",
    href: "#",
  },
  {
    icon: Mail,
    title: "jayantarora123a@gmail.com",
    subtitle: "Quick inquiries & questions",
    href: "mailto:jayantarora123a@gmail.com",
  },
  {
    icon: Twitter,
    title: "Connect on X",
    subtitle: "Follow for updates & insights",
    href: "https://x.com/jaxyant",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const trimmed = {
    name: form.name.trim(),
    email: form.email.trim(),
    message: form.message.trim(),
  };

  if (!trimmed.name || !trimmed.email || !trimmed.message) return;

  try {
    setLoading(true);
    setSuccess(false);

    await createContact(trimmed);

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });

  } catch (error) {
    console.error("Contact API Error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="contact" className="py-10  border-border">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-6"
        >
          Let's work together
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Left – Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-6 flex flex-col"
          >
            <h2 className="text-xl font-bold text-foreground mb-2">Get in Touch</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Choose your preferred method to connect and let's discuss your project.
            </p>

            <div className="space-y-3 flex-1">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:bg-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground shrink-0">
                    <method.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{method.title}</p>
                    <p className="text-xs text-muted-foreground">{method.subtitle}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Response within 24 hours • Available for hire
            </p>
          </motion.div>

          {/* Right – Send a Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h2 className="text-xl font-bold text-foreground mb-2">Send a Message</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Prefer to write? Fill out the form and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                required
              />
              <textarea
                placeholder="Your Message"
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border bg-background text-foreground text-sm font-medium hover:bg-secondary transition-colors"
              >
                Send Message
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-20 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © 2026 Jayant Arora. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

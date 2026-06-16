import { motion } from "framer-motion";
import { GraduationCap, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <>
      {/* Education */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/50 px-8 py-4 shadow-gold">
              <GraduationCap className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-display font-bold text-foreground">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-sm text-muted-foreground">Rice University · May 2017</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gradient-gold mb-6">
              Let's Connect
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-10">
              {/* <a
                href="https://www.linkedin.com/in/appleby-parker-dylan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                <span className="text-sm">LinkedIn</span>
              </a> */}
              <a
                href="mailto:dylan.applebyme@outlook.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">dylan.applebyme@outlook.com</span>
              </a>
              <a
                href="tel:+15125532945"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">(512) 553-2945</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Austin, TX 78702</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Appleby Labs. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;

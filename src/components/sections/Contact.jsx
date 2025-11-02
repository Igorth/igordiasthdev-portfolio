import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 text-center max-w-2xl mx-auto">
          {" "}
          {/* wider box */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          {/* Contact Box */}
          <div className="bg-white/5 border border-white/20 rounded-2xl p-10 text-white shadow-lg backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-3 text-lg sm:text-xl">
                <Mail className="text-emerald-400 w-6 h-6" />
                <a
                  href="mailto:igordiasth@gmail.com"
                  className="hover:text-emerald-400 transition font-medium"
                >
                  igordiasth@gmail.com
                </a>
              </div>

              <div className="flex space-x-8 mt-4">
                <a
                  href="https://www.linkedin.com/in/igordiasth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  <Linkedin size={30} />
                </a>
                <a
                  href="https://github.com/Igorth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  <Github size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

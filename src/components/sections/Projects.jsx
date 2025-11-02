import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Azure Honeynet and Security Hardening Project — Microsoft
                Sentinel
              </h3>
              <p className="text-gray-400 mb-4">
                Deployed a honeynet in Microsoft Azure integrated with Microsoft
                Sentinel to detect and visualize attacks. Applied system
                hardening on Windows and Linux VMs, achieving a 97% reduction in
                security incidents.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Microsoft Azure",
                  "Microsoft Sentinel (SIEM)",
                  "Log Analytics Workspace",
                  "KQL",
                  "Defender for Cloud",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Igorth/soc-honeynet-azure"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Threat Detection and Response Lab — LimaCharlie
              </h3>
              <p className="text-gray-400 mb-4">
                Designed and executed a hands-on lab simulating real-world
                attacks using Sliver C2 to test LimaCharlie’s detection and
                response capabilities and implemented custom rules.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "LimaCharlie (EDR/SIEM)",
                  "Sliver C2",
                  "YARA",
                  "Sysmon",
                  "Windows",
                  "Ubuntu",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Igorth/limacharlie-lab"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  target="_blank"
                >
                  {" "}
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

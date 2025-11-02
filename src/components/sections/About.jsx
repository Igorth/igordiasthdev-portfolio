import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const iamSkills = [
    "Microsoft Entra ID",
    "PingOne Advanced Identity Cloud",
    "Okta",
    "Identity Lifecycle Management",
  ];
  const socAndDetectionSkills = [
    "Microsoft Sentinel",
    "Microsoft Defender",
    "LimaCharlie",
    "Endpoint Detection and Response (EDR)",
  ];
  const securityGovernanceSkills = [
    "ISO 27001",
    "Risk Prioritization",
    "OWASP Top 10",
    "CVE/CWE Management",
  ];

  const technicalSkills = [
    "Python",
    "PowerShell Scripting",
    "Linux Command Line",
    "GitHub",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-800 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                I started my career as a web developer, where I learned the
                value of problem-solving, and process. Over time, my curiosity
                for security grew — especially around how identities are managed
                and threats are detected.
              </p>

              <p>
                Today, I focus on{" "}
                <span className="text-white font-medium">
                  Security Operations{" "}
                </span>
                and{" "}
                <span className="text-white font-medium">
                  Identity & Access Management
                </span>
                , working with tools like{" "}
                <span className="text-white">Microsoft Entra ID</span>,
                <span className="text-white">
                  PingOne Advanced Identity Cloud
                </span>
                ,<span className="text-white">Okta</span>, and
                <span className="text-white">Microsoft Sentinel</span>.
              </p>

              <p>
                I enjoy building labs, automating security tasks, and exploring
                new ways to strengthen digital defenses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">IAM</h3>
                <div className="flex flex-wrap gap-2">
                  {iamSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">SOC</h3>
                <div className="flex flex-wrap gap-2">
                  {socAndDetectionSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.22)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.22)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Governance</h3>
                <div className="flex flex-wrap gap-2">
                  {securityGovernanceSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.22)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Postgraduate in Quality Assurance Testing</strong> -
                  NBCC, Canada (2021-2022)
                </li>
                <li>
                  <strong>B.S in Information System</strong> - PUC Minas, Brazil
                  (2011-2015)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Security Analayst at Deloitte (2021 - Present)
                  </h4>
                  <p>
                    Supporting Security Operations and Identity Management
                    initiatives, focusing on access control, incident analysis,
                    and process improvement.{" "}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Intern BMM TestLabs (2021 - 2021)
                  </h4>
                  <p>
                    Performed functional and automation testing on gaming and
                    compliance platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

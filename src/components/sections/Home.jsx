import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-800 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Igor Dias
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Cybersecurity professional with a background in Development, now
            focused on Security Operation Center and Identity & Access
            Management. Passionate about protecting digital assets, implementing
            security controls and protecting sensitive data.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-emerald-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-emerald-500/50 text-emerald-500 py-3 px-6 rounded font-medium transtion-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-emerald-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

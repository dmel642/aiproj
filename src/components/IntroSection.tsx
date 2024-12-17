import { useEffect, useRef } from "react";

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div
        ref={sectionRef}
        className="container mx-auto px-6 transform opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-morphis-silver mb-8 text-center">
            Pioneering Self-Evolution in AI
          </h2>
          <p className="text-lg md:text-xl text-morphis-silver/80 leading-relaxed text-center">
            Morphis is a self-evolving AI platform that continuously redesigns, improves, and optimizes its architecture without human intervention. It leverages cutting-edge AI development tools, automated ML frameworks, and meta-learning strategies inspired by current advancements in AutoML, neural architecture search (NAS), and reinforcement learning (RL).
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-morphis-blue rounded-full animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
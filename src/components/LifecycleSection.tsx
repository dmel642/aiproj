import { Eye, Settings, Server, Rocket, RefreshCw } from "lucide-react";

const phases = [
  {
    title: "Observation Phase",
    icon: Eye,
    description:
      "Metrics like response time, accuracy, and computational cost are logged. The SME monitors all processes and triggers a recalibration request if any thresholds are exceeded.",
  },
  {
    title: "Redesign Phase",
    icon: Settings,
    description:
      "The MAM generates several new architectures using evolutionary strategies like mutation and crossover, inspired by evolutionary computation techniques.",
  },
  {
    title: "Training & Validation Phase",
    icon: Server,
    description:
      "Each proposed model undergoes intensive training using distributed cloud GPUs via Kubernetes clusters. Advanced AutoML techniques like Bayesian Optimization and grid search are applied.",
  },
  {
    title: "Deployment Phase",
    icon: Rocket,
    description:
      "The best-performing models are deployed in real-time environments. A/B testing and multi-agent reinforcement learning simulations ensure robustness.",
  },
  {
    title: "Feedback Loop",
    icon: RefreshCw,
    description:
      "Data from real-world performance continuously feeds back into the system. Underperforming models are deprecated or retrained, while high-performing models become templates for future generations.",
  },
];

const LifecycleSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.dropbox.com/scl/fi/2i93kxog0sxqaltvaqye0/background.mp4?rlkey=f8thu9xu7t8d2rf65v088zzh9&e=1&st=ej04vuye&dl=1"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-morphis-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-morphis-silver text-center mb-16">
          AI Lifecycle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {phases.slice(0, 3).map((phase, index) => (
            <div
              key={phase.title}
              className="bg-morphis-navy/50 backdrop-blur-sm p-6 rounded-lg border border-morphis-blue/20 
                         transform hover:scale-105 transition-all duration-300 
                         animate-fade-in"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-morphis-blue/10 rounded-lg">
                  <phase.icon
                    className="w-6 h-6 text-morphis-blue animate-float"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-morphis-silver">
                  {phase.title}
                </h3>
              </div>
              <p className="text-morphis-silver/80 leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {phases.slice(3).map((phase, index) => (
            <div
              key={phase.title}
              className="bg-morphis-navy/50 backdrop-blur-sm p-6 rounded-lg border border-morphis-blue/20 
                         transform hover:scale-105 transition-all duration-300 
                         animate-fade-in"
              style={{
                animationDelay: `${(index + 3) * 200}ms`,
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-morphis-blue/10 rounded-lg">
                  <phase.icon
                    className="w-6 h-6 text-morphis-blue animate-float"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-morphis-silver">
                  {phase.title}
                </h3>
              </div>
              <p className="text-morphis-silver/80 leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Factory, Server, ChartLine } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Projects = () => {
  console.log("Rendering Projects page");
  
  const projects = [
    {
      title: "Morphis Forge",
      tagline: "Where New Intelligences Are Forged",
      description: "An adaptive AI creation platform that builds highly specialized AIs on demand. Uses Morphis' evolving neural architecture system to design custom AI models tailored for specific tasks.",
      utilities: [
        "Instant AI Crafting: Build task-specific AIs with no human intervention",
        "Self-Adaptive Blueprints: Models that continuously learn and optimize",
        "Automated Expert Uploads: Auto-generates AI trained for your exact needs"
      ],
      icon: Factory,
      href: "/forge",
      isComingSoon: false
    },
    {
      title: "Morphis OS",
      tagline: "The Operating System Built by AI—for AI",
      description: "A fully autonomous operating system designed to manage large-scale AI environments. Optimizes resource allocation, multitasking, and AI-to-AI communication.",
      utilities: [
        "Self-Optimizing Core: Reconfigures for peak performance",
        "AI-Driven Process Management: Prioritizes critical processes",
        "Auto-Healing Framework: Repairs without human involvement"
      ],
      icon: Server,
      isComingSoon: true
    },
    {
      title: "Morphis Vision",
      tagline: "Seeing the Future Through Self-Evolving Intelligence",
      description: "An advanced predictive AI platform designed to anticipate future events, trends, and business outcomes through continuous self-learning and real-time data analysis.",
      utilities: [
        "Adaptive Forecasting Engine: Updates using live data",
        "Trend Anticipation: Detects emerging trends before they happen",
        "Strategic Scenario Simulation: Runs millions of what-if scenarios"
      ],
      icon: ChartLine,
      isComingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-morphis-dark">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-morphis-silver mb-12 text-center">
          Our Projects
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const CardWrapper = project.isComingSoon ? 'div' : Link;
            
            return (
              <CardWrapper
                key={project.title}
                to={project.href}
                className={cn(
                  "block transition-all duration-300 transform hover:scale-105",
                  !project.isComingSoon && "cursor-pointer"
                )}
              >
                <Card className={cn(
                  "h-full bg-morphis-navy border-morphis-blue/20 relative overflow-hidden group",
                  "animate-fade-in [animation-delay:var(--delay)]",
                  project.isComingSoon && "opacity-70"
                )}
                style={{ '--delay': `${index * 150}ms` } as any}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-12 h-12 text-morphis-blue" />
                      {project.isComingSoon && (
                        <span className="px-3 py-1 bg-morphis-pink/20 text-morphis-pink rounded-full text-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-morphis-silver mb-2">
                      {project.title}
                    </h2>
                    <p className="text-morphis-blue mb-4 font-medium">
                      {project.tagline}
                    </p>
                    <p className="text-morphis-silver/80 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto">
                      <h3 className="text-morphis-blue font-medium mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {project.utilities.map((utility, index) => (
                          <li 
                            key={index}
                            className="text-morphis-silver/70 text-sm"
                          >
                            • {utility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
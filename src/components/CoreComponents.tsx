import { useState } from "react";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Component {
  id: string;
  title: string;
  inspiration: string;
  summary: string;
  details: string;
}

const components: Component[] = [
  {
    id: "sme",
    title: "Self-Monitoring Engine (SME)",
    inspiration: "OpenAI's Triton and MLFlow",
    summary: "Advanced performance monitoring system that continuously evaluates and identifies optimization opportunities in real-time.",
    details: "Constantly evaluates Morphis' performance metrics, identifying bottlenecks in computation, reasoning, and decision-making processes. It uses automated logging and telemetry to collect internal system statistics in real time."
  },
  {
    id: "mam",
    title: "Meta-Architect Module (MAM)",
    inspiration: "Google's AutoML and OpenAI's GPT-4",
    summary: "Intelligent architecture designer that creates and validates new model structures through neural architecture search.",
    details: "Uses neural architecture search (NAS) and genetic algorithms to create new model architectures. It generates, tests, and validates new models using a simulated reinforcement environment."
  },
  {
    id: "rdp",
    title: "Recursive Development Pipeline (RDP)",
    inspiration: "Hugging Face's model hub and GitHub Copilot",
    summary: "Automated CI/CD pipeline for AI that validates and deploys architectural improvements.",
    details: "Acts as a CI/CD-like pipeline for AI. Every improvement or new model designed by the Meta-Architect is deployed into a staging environment. It runs extensive validation tests through simulated environments and real-world data inputs."
  },
  {
    id: "srk",
    title: "Self-Rewriting Kernel (SRK)",
    inspiration: "TensorFlow's Graph Rewrite API and PyTorch",
    summary: "Dynamic core system capable of modifying its algorithms and architecture in real-time.",
    details: "Allows Morphis to modify its core algorithms on the fly. It can restructure its computational graph, adjust hyperparameters, and replace outdated functions—all through programmatic self-editing processes."
  },
  {
    id: "ams",
    title: "Autonomous Model Synthesis (AMS)",
    inspiration: "Meta's DINO, AlphaZero's self-play",
    summary: "Self-improving system that uses competitive self-play to drive continuous evolution.",
    details: "This system conducts model synthesis through competitive self-play and automated testing environments. Competing AI agents challenge one another in task-specific benchmarks, forcing continuous learning and adaptation."
  }
];

const CoreComponents = () => {
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
    <section className="relative py-20 overflow-hidden bg-morphis-navy/50">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div
        ref={sectionRef}
        className="container mx-auto px-6 transform opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-morphis-silver mb-12 text-center">
            Core Components
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {components.map((component) => (
              <AccordionItem
                key={component.id}
                value={component.id}
                className="border border-morphis-blue/20 rounded-lg overflow-hidden backdrop-blur-sm hover:border-morphis-blue/40 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-morphis-blue mb-2">
                      {component.title}
                    </h3>
                    <p className="text-morphis-silver/80 text-sm">
                      Inspired by: {component.inspiration}
                    </p>
                    <p className="text-morphis-silver mt-2">
                      {component.summary}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="relative">
                    <div className="text-morphis-silver/70 leading-relaxed backdrop-blur-sm">
                      {component.details}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-morphis-navy/50 pointer-events-none" />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CoreComponents;
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Bot, ChartBar, Database, FileSearch, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const aiCategories = [
  {
    id: "analytics",
    name: "Analytics & Insights",
    icon: ChartBar,
    description: "Specialized in data analysis, pattern recognition, and business intelligence"
  },
  {
    id: "assistant",
    name: "Virtual Assistant",
    icon: Bot,
    description: "Conversational AI for customer service and task automation"
  },
  {
    id: "security",
    name: "Security & Monitoring",
    icon: Shield,
    description: "AI systems for threat detection and security monitoring"
  },
  {
    id: "research",
    name: "Research Assistant",
    icon: FileSearch,
    description: "Accelerate research with intelligent data processing and analysis"
  },
  {
    id: "cognitive",
    name: "Cognitive Processing",
    icon: Brain,
    description: "Advanced reasoning and decision-making capabilities"
  },
  {
    id: "data",
    name: "Data Processing",
    icon: Database,
    description: "Efficient handling and processing of large-scale datasets"
  }
];

const Forge = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!selectedCategory) {
      toast({
        title: "Selection Required",
        description: "Please select an AI category before generating",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    console.log("Generating AI for category:", selectedCategory);

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "AI Generated Successfully",
        description: "Your new AI agent is ready for deployment",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-morphis-dark">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-morphis-silver mb-2 text-center">
            Morphis Forge
          </h1>
          <p className="text-morphis-blue text-center mb-12">
            Select a category and forge your specialized AI agent
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {aiCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.id}
                  className={cn(
                    "p-4 cursor-pointer transition-all duration-300 hover:scale-105 bg-morphis-navy border-morphis-blue/20",
                    selectedCategory === category.id && "ring-2 ring-morphis-blue"
                  )}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-start space-x-4">
                    <Icon className="w-8 h-8 text-morphis-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-morphis-silver">
                        {category.name}
                      </h3>
                      <p className="text-sm text-morphis-silver/70">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleGenerate}
              disabled={!selectedCategory || isGenerating}
              className="bg-morphis-blue hover:bg-morphis-blue/90 text-morphis-dark font-semibold px-8 py-6"
            >
              {isGenerating ? (
                <>
                  <span className="animate-pulse">Generating AI Agent...</span>
                </>
              ) : (
                "Generate AI Agent"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forge;
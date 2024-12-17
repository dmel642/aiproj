import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Brain, Bot, ChartBar, Database, FileSearch, Shield } from "lucide-react";

export const aiCategories = [
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

interface CategorySelectionProps {
  selectedCategory: string | null;
  onSelectCategory: (id: string) => void;
}

export const CategorySelection = ({ selectedCategory, onSelectCategory }: CategorySelectionProps) => {
  return (
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
            onClick={() => onSelectCategory(category.id)}
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
  );
};
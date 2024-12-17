import { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CategorySelection } from "@/components/forge/CategorySelection";
import { ConfigurationForm } from "@/components/forge/ConfigurationForm";

const Forge = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [agentConfig, setAgentConfig] = useState({
    instructions: "",
    personality: "",
    allowFeedback: true
  });
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
    setShowConfig(true);
  };

  const handleConfigChange = (field: string, value: string | boolean) => {
    setAgentConfig(prev => ({ ...prev, [field]: value }));
  };

  const handlePublish = () => {
    if (!agentConfig.instructions) {
      toast({
        title: "Missing Information",
        description: "Instructions are required",
        variant: "destructive"
      });
      return;
    }

    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      toast({
        title: "Error",
        description: "System overloaded due to high usage. Please try again later.",
        variant: "destructive"
      });
    }, 5000);
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

          <CategorySelection 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {!showConfig ? (
            <div className="flex justify-center">
              <Button
                onClick={handleGenerate}
                disabled={!selectedCategory}
                className="bg-morphis-blue hover:bg-morphis-blue/90 text-morphis-dark font-semibold px-8 py-6"
              >
                Generate AI Agent
              </Button>
            </div>
          ) : (
            <ConfigurationForm
              config={agentConfig}
              isPublishing={isPublishing}
              onConfigChange={handleConfigChange}
              onPublish={handlePublish}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Forge;
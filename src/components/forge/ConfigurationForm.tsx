import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ConfigurationFormProps {
  config: {
    instructions: string;
    personality: string;
    allowFeedback: boolean;
  };
  isPublishing: boolean;
  onConfigChange: (field: string, value: string | boolean) => void;
  onPublish: () => void;
}

export const ConfigurationForm = ({
  config,
  isPublishing,
  onConfigChange,
  onPublish
}: ConfigurationFormProps) => {
  return (
    <Card className="p-6 bg-morphis-navy border-morphis-blue/20">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="instructions" className="text-morphis-silver">Instructions *</Label>
          <Textarea
            id="instructions"
            placeholder="Enter detailed instructions for your AI agent..."
            className="min-h-[100px] bg-morphis-dark/50 border-morphis-blue/20 text-morphis-silver"
            value={config.instructions}
            onChange={(e) => onConfigChange('instructions', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="personality" className="text-morphis-silver">Personality</Label>
          <Textarea
            id="personality"
            placeholder="Describe the personality traits of your AI agent..."
            className="min-h-[100px] bg-morphis-dark/50 border-morphis-blue/20 text-morphis-silver"
            value={config.personality}
            onChange={(e) => onConfigChange('personality', e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="allowFeedback"
            checked={config.allowFeedback}
            onCheckedChange={(checked) => onConfigChange('allowFeedback', checked as boolean)}
          />
          <Label htmlFor="allowFeedback" className="text-morphis-silver">
            Allow user feedback for self-modification
          </Label>
        </div>

        <Button
          onClick={onPublish}
          disabled={isPublishing || !config.instructions}
          className="w-full bg-morphis-blue hover:bg-morphis-blue/90 text-morphis-dark font-semibold"
        >
          {isPublishing ? "Publishing..." : "Publish Agent"}
        </Button>
      </div>
    </Card>
  );
};
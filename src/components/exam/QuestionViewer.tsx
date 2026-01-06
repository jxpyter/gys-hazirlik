import { ClientQuestion } from "@/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface QuestionViewerProps {
  question: ClientQuestion;
  selectedOption: string | undefined;
  onSelectOption: (value: string) => void;
  questionNumber: number;
}

export function QuestionViewer({ question, selectedOption, onSelectOption, questionNumber }: QuestionViewerProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm">
          {questionNumber}
        </span>
        <h3 className="text-lg font-medium text-slate-900 leading-relaxed">
          {question.text}
        </h3>
      </div>

      <Card className="border-slate-200">
        <CardContent className="pt-6">
          <RadioGroup value={selectedOption} onValueChange={onSelectOption} className="space-y-3">
            {(['A', 'B', 'C', 'D', 'E'] as const).map((opt) => (
                // Only render if option exists (E might be optional)
                question.options[opt] && (
                  <div key={opt} className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${selectedOption === opt ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
                    <RadioGroupItem value={opt} id={`option-${opt}`} className="text-blue-600" />
                    <Label htmlFor={`option-${opt}`} className="flex-1 cursor-pointer font-normal text-slate-700">
                      <span className="font-bold mr-2 text-slate-900">{opt})</span>
                      {question.options[opt]}
                    </Label>
                  </div>
                )
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}

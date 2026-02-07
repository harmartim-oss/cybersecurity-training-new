import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface KnowledgeCheckProps {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  hint?: string;
  onComplete?: (correct: boolean) => void;
}

export default function KnowledgeCheck({
  question,
  options,
  correct,
  explanation,
  hint,
  onComplete,
}: KnowledgeCheckProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isCorrect = selected === correct;

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
      if (onComplete) {
        onComplete(isCorrect);
      }
    }
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
    setShowHint(false);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{question}</h3>

        <div className="space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => !submitted && setSelected(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition ${
                selected === index
                  ? 'border-blue-500 bg-blue-100'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              } ${submitted ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
              disabled={submitted}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selected === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                  }`}
                >
                  {selected === index && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className="text-gray-700">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {!submitted && (
        <div className="flex gap-3">
          <Button
            onClick={handleSubmit}
            disabled={selected === null}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            Check Answer
          </Button>
          {hint && (
            <Button
              onClick={() => setShowHint(!showHint)}
              variant="outline"
              className="flex-1"
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </Button>
          )}
        </div>
      )}

      {showHint && hint && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800">{hint}</p>
        </div>
      )}

      {submitted && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex gap-3 mb-3">
            {isCorrect ? (
              <>
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <h4 className="font-semibold text-green-800">Correct!</h4>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <h4 className="font-semibold text-red-800">Incorrect</h4>
              </>
            )}
          </div>
          <p className={`text-sm mb-4 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {explanation}
          </p>
          <Button onClick={handleReset} variant="outline" className="w-full">
            Try Again
          </Button>
        </div>
      )}
    </Card>
  );
}

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

interface ScenarioOption {
  text: string;
  correct: boolean;
  feedback: string;
  explanation: string;
}

interface InteractiveScenarioProps {
  id: string;
  title: string;
  description: string;
  situation: string;
  options: ScenarioOption[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const InteractiveScenarioQuiz: React.FC<{ scenario: InteractiveScenarioProps }> = ({ scenario }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    setAnswered(true);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswered(false);
  };

  const difficultyColors = {
    beginner: 'bg-green-50 border-green-200',
    intermediate: 'bg-yellow-50 border-yellow-200',
    advanced: 'bg-red-50 border-red-200'
  };

  const difficultyBadgeColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  return (
    <div className="my-8">
      <Card className={`p-6 border-2 ${difficultyColors[scenario.difficulty]}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
            <p className="text-gray-700 mb-3">{scenario.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyBadgeColors[scenario.difficulty]}`}>
            {scenario.difficulty.charAt(0).toUpperCase() + scenario.difficulty.slice(1)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            Situation
          </h4>
          <p className="text-gray-700 whitespace-pre-wrap">{scenario.situation}</p>
        </div>

        <div className="space-y-3 mb-6">
          {scenario.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = option.correct;
            const showResult = answered && isSelected;

            let buttonClass = 'border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50';
            if (showResult) {
              buttonClass = isCorrect
                ? 'border-2 border-green-500 bg-green-50'
                : 'border-2 border-red-500 bg-red-50';
            }

            return (
              <button
                key={index}
                onClick={() => !answered && handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-lg transition-all ${buttonClass} ${answered ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    {showResult && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                    {!showResult && <div className="w-5 h-5 rounded-full border-2 border-gray-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{option.text}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {showFeedback && selectedAnswer !== null && (
          <div className={`p-4 rounded-lg mb-6 ${scenario.options[selectedAnswer].correct ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
            <div className="flex gap-3">
              {scenario.options[selectedAnswer].correct ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className={`font-semibold mb-2 ${scenario.options[selectedAnswer].correct ? 'text-green-900' : 'text-red-900'}`}>
                  {scenario.options[selectedAnswer].feedback}
                </p>
                <div className="flex gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700">{scenario.options[selectedAnswer].explanation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {answered && (
          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full"
          >
            Try Another Scenario
          </Button>
        )}
      </Card>
    </div>
  );
};

export default InteractiveScenarioQuiz;

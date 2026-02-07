import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, ChevronDown, ChevronUp, Lightbulb, MessageSquare } from 'lucide-react';

interface KnowledgeCheck {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface ReflectionPrompt {
  id: number;
  prompt: string;
  hint?: string;
}

interface InteractiveLearningProps {
  knowledgeChecks?: KnowledgeCheck[];
  reflectionPrompts?: ReflectionPrompt[];
}

export function KnowledgeCheckComponent({ check }: { check: KnowledgeCheck }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const isCorrect = selectedAnswer === check.correct;

  return (
    <Card className="mb-6 border-l-4 border-l-blue-500">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900">Knowledge Check</h4>
            <p className="text-sm text-gray-600">Test your understanding</p>
          </div>
        </div>

        <p className="text-gray-800 font-medium mb-4">{check.question}</p>

        <div className="space-y-2 mb-4">
          {check.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedAnswer(idx);
                setShowExplanation(true);
              }}
              className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                selectedAnswer === idx
                  ? idx === check.correct
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              } ${selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}`}
              disabled={selectedAnswer !== null}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  selectedAnswer === idx
                    ? idx === check.correct
                      ? 'border-green-500 bg-green-500'
                      : 'border-red-500 bg-red-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswer === idx && (
                    <span className="text-white text-sm">✓</span>
                  )}
                </div>
                <span className="text-gray-700">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className={`p-4 rounded-lg flex gap-3 items-start ${
            isCorrect
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`font-semibold ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                {isCorrect ? 'Correct!' : 'Not quite right'}
              </p>
              {!isCorrect && (
                <p className="text-red-800 text-sm mt-1">
                  The correct answer is: <span className="font-semibold">{check.options[check.correct]}</span>
                </p>
              )}
            </div>
          </div>
        )}

        {showExplanation && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Explanation:</span> {check.explanation}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}

export function ReflectionPromptComponent({ prompt }: { prompt: ReflectionPrompt }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userResponse, setUserResponse] = useState('');

  return (
    <Card className="mb-6 border-l-4 border-l-amber-500">
      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-start justify-between gap-3 text-left"
        >
          <div className="flex items-start gap-3 flex-1">
            <MessageSquare className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Reflection Prompt</h4>
              <p className="text-gray-700 mt-2">{prompt.prompt}</p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-amber-200">
            <textarea
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              placeholder="Write your thoughts here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              rows={4}
            />
            {prompt.hint && (
              <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-900">
                  <span className="font-semibold">Hint:</span> {prompt.hint}
                </p>
              </div>
            )}
            <Button
              onClick={() => {
                // Save reflection to localStorage
                const reflections = JSON.parse(localStorage.getItem('ocs_reflections') || '{}');
                reflections[`prompt_${prompt.id}`] = userResponse;
                localStorage.setItem('ocs_reflections', JSON.stringify(reflections));
              }}
              className="mt-3 bg-amber-600 hover:bg-amber-700 text-white"
            >
              Save Reflection
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export function InteractiveLearning({ knowledgeChecks, reflectionPrompts }: InteractiveLearningProps) {
  if (!knowledgeChecks && !reflectionPrompts) {
    return null;
  }

  return (
    <div className="my-8">
      {knowledgeChecks && knowledgeChecks.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Interactive Learning</h3>
          {knowledgeChecks.map((check) => (
            <KnowledgeCheckComponent key={check.id} check={check} />
          ))}
        </div>
      )}

      {reflectionPrompts && reflectionPrompts.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Reflection Prompts</h3>
          {reflectionPrompts.map((prompt) => (
            <ReflectionPromptComponent key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  );
}

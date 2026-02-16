import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lightbulb, Clock, BookOpen, MessageCircle } from 'lucide-react';

interface ExerciseProps {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  expectedOutcome: string;
  tips: string[];
  estimatedTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface ReflectionPromptProps {
  prompts: string[];
}

export const ExerciseCard: React.FC<{ exercise: ExerciseProps }> = ({ exercise }) => {
  const [completed, setCompleted] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const difficultyColors = {
    beginner: 'text-green-600 bg-green-50',
    intermediate: 'text-yellow-600 bg-yellow-50',
    advanced: 'text-red-600 bg-red-50'
  };

  return (
    <Card className="p-6 my-6 border-2 border-blue-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
          <p className="text-gray-700 mb-3">{exercise.description}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyColors[exercise.difficulty]}`}>
          {exercise.difficulty}
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <Clock className="w-4 h-4" />
        <span>Estimated time: {exercise.estimatedTime} minutes</span>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Instructions
          </h4>
          <ol className="space-y-2 ml-6">
            {exercise.instructions.map((instruction, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-semibold text-blue-600">{index + 1}.</span> {instruction}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-900 mb-2">Expected Outcome</h4>
          <p className="text-blue-800">{exercise.expectedOutcome}</p>
        </div>

        <div>
          <button
            onClick={() => setShowTips(!showTips)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
          >
            <Lightbulb className="w-5 h-5" />
            {showTips ? 'Hide Tips' : 'Show Tips'}
          </button>
          {showTips && (
            <ul className="mt-3 space-y-2 ml-6">
              {exercise.tips.map((tip, index) => (
                <li key={index} className="text-gray-700 flex gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Button
        onClick={() => setCompleted(!completed)}
        className={`w-full ${completed ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {completed ? (
          <>
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Exercise Completed
          </>
        ) : (
          'Mark as Completed'
        )}
      </Button>
    </Card>
  );
};

export const ReflectionPrompts: React.FC<ReflectionPromptProps> = ({ prompts }) => {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [responses, setResponses] = useState<{ [key: number]: string }>({});

  return (
    <Card className="p-6 my-6 border-2 border-purple-200 bg-purple-50">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <MessageCircle className="w-6 h-6 text-purple-600" />
        Reflection Prompts
      </h3>

      <p className="text-gray-700 mb-4">
        Take a moment to reflect on what you've learned. These prompts can help deepen your understanding.
      </p>

      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {prompts.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedPrompt(index)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedPrompt === index
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-600 border-2 border-purple-300 hover:bg-purple-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-900 text-lg mb-4">{prompts[selectedPrompt]}</p>
          <textarea
            value={responses[selectedPrompt] || ''}
            onChange={(e) => setResponses({ ...responses, [selectedPrompt]: e.target.value })}
            placeholder="Write your reflection here..."
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
            rows={5}
          />
          <p className="text-sm text-gray-500 mt-2">
            Your reflections are saved locally. Consider sharing insights with colleagues or mentors.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Prompt {selectedPrompt + 1} of {prompts.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedPrompt(Math.max(0, selectedPrompt - 1))}
              disabled={selectedPrompt === 0}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setSelectedPrompt(Math.min(prompts.length - 1, selectedPrompt + 1))}
              disabled={selectedPrompt === prompts.length - 1}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default { ExerciseCard, ReflectionPrompts };

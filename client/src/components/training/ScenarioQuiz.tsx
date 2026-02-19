import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  RotateCcw,
  Award,
  TrendingUp
} from 'lucide-react';

// ============================================================================
// SCENARIO QUIZ TYPES
// ============================================================================
export interface ScenarioChoice {
  id: string;
  text: string;
  feedback: string;
  isCorrect: boolean;
  points: number;
  nextScenarioId?: string;
}

export interface ScenarioStep {
  id: string;
  title: string;
  description: string;
  situation: string;
  choices: ScenarioChoice[];
  context?: string;
}

export interface ScenarioQuiz {
  id: string;
  title: string;
  description: string;
  moduleId: number;
  totalPoints: number;
  passingScore: number;
  scenarios: ScenarioStep[];
}

// ============================================================================
// SCENARIO QUIZ COMPONENT
// ============================================================================
interface ScenarioQuizProps {
  quiz: ScenarioQuiz;
  onComplete: (score: number, passed: boolean) => void;
}

export const ScenarioQuizComponent: React.FC<ScenarioQuizProps> = ({ quiz, onComplete }) => {
  const [currentScenarioId, setCurrentScenarioId] = useState<string>(quiz.scenarios[0].id);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completedScenarios, setCompletedScenarios] = useState<Set<string>>(new Set());
  const [quizComplete, setQuizComplete] = useState(false);

  const currentScenario = quiz.scenarios.find(s => s.id === currentScenarioId);
  const selectedChoice = currentScenario?.choices.find(c => c.id === selectedChoiceId);

  const handleChoiceSelect = (choiceId: string) => {
    setSelectedChoiceId(choiceId);
    setShowFeedback(true);
  };

  const handleNextScenario = () => {
    if (!selectedChoice) return;

    const newScore = score + selectedChoice.points;
    const newCompleted = new Set(completedScenarios);
    newCompleted.add(currentScenarioId);
    setCompletedScenarios(newCompleted);
    setScore(newScore);

    // Check if quiz is complete (all scenarios done or no next scenario)
    if (selectedChoice.nextScenarioId) {
      setCurrentScenarioId(selectedChoice.nextScenarioId);
      setSelectedChoiceId(null);
      setShowFeedback(false);
    } else {
      // Quiz complete
      const passed = newScore >= quiz.passingScore;
      setQuizComplete(true);
      onComplete(newScore, passed);
    }
  };

  const handleRestart = () => {
    setCurrentScenarioId(quiz.scenarios[0].id);
    setSelectedChoiceId(null);
    setShowFeedback(false);
    setScore(0);
    setCompletedScenarios(new Set());
    setQuizComplete(false);
  };

  const progressPercentage = (completedScenarios.size / quiz.scenarios.length) * 100;
  const passed = score >= quiz.passingScore;

  if (quizComplete) {
    return (
      <Card className="my-8 p-8 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-300">
        <div className="text-center">
          <div className="mb-6">
            {passed ? (
              <>
                <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-green-700 mb-2">Quiz Passed! 🎉</h2>
              </>
            ) : (
              <>
                <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-red-700 mb-2">Quiz Not Passed</h2>
              </>
            )}
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border-2 border-gray-300">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded">
                <p className="text-sm text-gray-600 mb-1">Your Score</p>
                <p className="text-3xl font-bold text-blue-600">{score}</p>
                <p className="text-xs text-gray-600">out of {quiz.totalPoints}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded">
                <p className="text-sm text-gray-600 mb-1">Passing Score</p>
                <p className="text-3xl font-bold text-amber-600">{quiz.passingScore}</p>
                <p className="text-xs text-gray-600">required</p>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div
                className={`h-3 rounded-full transition-all ${
                  passed ? 'bg-green-600' : 'bg-red-600'
                }`}
                style={{ width: `${(score / quiz.totalPoints) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              {Math.round((score / quiz.totalPoints) * 100)}% Correct
            </p>
          </div>

          <div className="space-y-3">
            {passed && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-800 font-semibold">
                  ✓ Excellent work! You've demonstrated a strong understanding of the module concepts.
                </p>
              </div>
            )}
            {!passed && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-semibold mb-2">
                  Review the module content and try again to improve your score.
                </p>
                <p className="text-sm text-red-700">
                  Focus on the areas where you made mistakes to strengthen your understanding.
                </p>
              </div>
            )}
          </div>

          <Button
            onClick={handleRestart}
            className="mt-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Quiz
          </Button>
        </div>
      </Card>
    );
  }

  if (!currentScenario) {
    return <div>Scenario not found</div>;
  }

  return (
    <Card className="my-8 p-8 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-300">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{quiz.title}</h2>
        <p className="text-gray-700 mb-4">{quiz.description}</p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm font-semibold text-gray-700">
              {completedScenarios.size + (showFeedback ? 1 : 0)} / {quiz.scenarios.length} Scenarios
            </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-600 to-teal-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Scenario */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-gray-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{currentScenario.title}</h3>
        {currentScenario.context && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-sm text-blue-900 font-semibold">Context:</p>
            <p className="text-sm text-blue-800 mt-1">{currentScenario.context}</p>
          </div>
        )}
        <p className="text-gray-700 mb-4">{currentScenario.description}</p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <p className="text-sm text-amber-900 font-semibold mb-1">Situation:</p>
          <p className="text-gray-800">{currentScenario.situation}</p>
        </div>
      </div>

      {/* Choices */}
      <div className="space-y-3 mb-6">
        <p className="font-semibold text-gray-900">What should you do?</p>
        {currentScenario.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleChoiceSelect(choice.id)}
            disabled={showFeedback && selectedChoiceId !== choice.id}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              selectedChoiceId === choice.id
                ? choice.isCorrect
                  ? 'bg-green-50 border-green-500 shadow-lg'
                  : 'bg-red-50 border-red-500 shadow-lg'
                : 'bg-white border-gray-300 hover:border-blue-500 hover:shadow-md'
            } ${showFeedback && selectedChoiceId !== choice.id ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{choice.text}</p>
              </div>
              {selectedChoiceId === choice.id && (
                <div className="flex-shrink-0 mt-1">
                  {choice.isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  )}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && selectedChoice && (
        <div
          className={`p-4 rounded-lg border-l-4 mb-6 ${
            selectedChoice.isCorrect
              ? 'bg-green-50 border-green-500'
              : 'bg-red-50 border-red-500'
          }`}
        >
          <p className={`font-semibold mb-2 ${selectedChoice.isCorrect ? 'text-green-900' : 'text-red-900'}`}>
            {selectedChoice.isCorrect ? '✓ Correct!' : '✗ Not quite right'}
          </p>
          <p className={selectedChoice.isCorrect ? 'text-green-800' : 'text-red-800'}>
            {selectedChoice.feedback}
          </p>
          {selectedChoice.points > 0 && (
            <p className="text-sm font-semibold mt-2 text-gray-700">
              +{selectedChoice.points} points
            </p>
          )}
        </div>
      )}

      {/* Score Display */}
      <div className="bg-white rounded-lg p-4 mb-6 border-2 border-gray-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-gray-900">Current Score:</span>
        </div>
        <span className="text-2xl font-bold text-blue-600">{score} / {quiz.totalPoints}</span>
      </div>

      {/* Navigation */}
      {showFeedback && (
        <Button
          onClick={handleNextScenario}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          {selectedChoice?.nextScenarioId ? 'Next Scenario' : 'Complete Quiz'}
          <ChevronRight className="w-5 h-5" />
        </Button>
      )}
    </Card>
  );
};

export default ScenarioQuizComponent;

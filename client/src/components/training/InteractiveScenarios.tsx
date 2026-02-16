import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  RotateCcw,
  Award,
  TrendingUp
} from 'lucide-react';

// ============================================================================
// INTERACTIVE DECISION TREE COMPONENT
// ============================================================================
interface DecisionNode {
  id: string;
  title: string;
  description: string;
  question?: string;
  options?: {
    text: string;
    nextNodeId: string;
    isCorrect?: boolean;
    feedback?: string;
  }[];
  result?: {
    title: string;
    description: string;
    score: number;
    icon: string;
    recommendations: string[];
  };
}

interface DecisionTreeProps {
  title: string;
  description: string;
  nodes: DecisionNode[];
  startNodeId: string;
}

export const InteractiveDecisionTree: React.FC<DecisionTreeProps> = ({
  title,
  description,
  nodes,
  startNodeId
}) => {
  const [currentNodeId, setCurrentNodeId] = useState(startNodeId);
  const [selectedPath, setSelectedPath] = useState<string[]>([startNodeId]);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentNode = nodes.find(n => n.id === currentNodeId);

  const handleOptionClick = (nextNodeId: string, isCorrect?: boolean, feedback?: string) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    setSelectedPath([...selectedPath, nextNodeId]);
    setCurrentNodeId(nextNodeId);

    const nextNode = nodes.find(n => n.id === nextNodeId);
    if (nextNode?.result) {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentNodeId(startNodeId);
    setSelectedPath([startNodeId]);
    setScore(0);
    setIsComplete(false);
  };

  if (!currentNode) {
    return <div>Decision tree node not found</div>;
  }

  return (
    <Card className="my-6 border-2 border-blue-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-100">{description}</p>
      </div>

      <div className="p-8 bg-white">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm font-bold text-blue-600">{Math.round((selectedPath.length / nodes.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.round((selectedPath.length / nodes.length) * 100)}%` }}
            />
          </div>
        </div>

        {/* Current Node */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border-2 border-blue-200 mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">{currentNode.title}</h4>
            <p className="text-gray-700 mb-4">{currentNode.description}</p>

            {currentNode.question && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-900">{currentNode.question}</p>
              </div>
            )}
          </div>

          {/* Options or Result */}
          {currentNode.options && !isComplete ? (
            <div className="space-y-3">
              {currentNode.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option.nextNodeId, option.isCorrect, option.feedback)}
                  className="w-full text-left p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 group-hover:text-blue-600">{option.text}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          ) : currentNode.result ? (
            <div className="space-y-6">
              {/* Result Card */}
              <div className={`p-8 rounded-lg border-2 ${
                currentNode.result.score >= 70
                  ? 'bg-green-50 border-green-300'
                  : currentNode.result.score >= 40
                  ? 'bg-amber-50 border-amber-300'
                  : 'bg-red-50 border-red-300'
              }`}>
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{currentNode.result.icon}</div>
                  <div className="flex-1">
                    <h5 className="text-2xl font-bold text-gray-900 mb-2">{currentNode.result.title}</h5>
                    <p className="text-gray-700 mb-4">{currentNode.result.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="bg-white px-6 py-3 rounded-lg border-2 border-gray-300">
                        <p className="text-sm text-gray-600">Score</p>
                        <p className="text-3xl font-bold text-blue-600">{currentNode.result.score}%</p>
                      </div>
                      <div className="bg-white px-6 py-3 rounded-lg border-2 border-gray-300">
                        <p className="text-sm text-gray-600">Points</p>
                        <p className="text-3xl font-bold text-green-600">+{score}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h6 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Recommendations
                </h6>
                <ul className="space-y-2">
                  {currentNode.result.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-blue-800">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reset Button */}
              <Button
                onClick={handleReset}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 font-bold flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Try Again
              </Button>
            </div>
          ) : null}
        </div>

        {/* Score Display */}
        {!isComplete && (
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-semibold text-gray-700">Current Score</span>
            <span className="text-2xl font-bold text-blue-600">{score} pts</span>
          </div>
        )}
      </div>
    </Card>
  );
};

// ============================================================================
// SCENARIO-BASED LEARNING COMPONENT
// ============================================================================
interface ScenarioStep {
  id: string;
  title: string;
  description: string;
  actions: {
    text: string;
    isCorrect: boolean;
    feedback: string;
    explanation: string;
  }[];
}

interface ScenarioProps {
  title: string;
  context: string;
  icon: string;
  steps: ScenarioStep[];
}

export const InteractiveScenario: React.FC<ScenarioProps> = ({
  title,
  context,
  icon,
  steps
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(new Array(steps.length).fill(false));
  const [selectedActions, setSelectedActions] = useState<{ [key: string]: number }>({});
  const [showFeedback, setShowFeedback] = useState<{ [key: string]: boolean }>({});

  const currentStep = steps[currentStepIndex];
  const currentStepId = currentStep.id;

  const handleActionClick = (actionIndex: number) => {
    const action = currentStep.actions[actionIndex];
    setSelectedActions({ ...selectedActions, [currentStepId]: actionIndex });
    setShowFeedback({ ...showFeedback, [currentStepId]: true });

    if (action.isCorrect) {
      const newCompleted = [...completedSteps];
      newCompleted[currentStepIndex] = true;
      setCompletedSteps(newCompleted);
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const completionPercentage = (completedSteps.filter(Boolean).length / steps.length) * 100;
  const isScenarioComplete = completedSteps.every(Boolean);

  return (
    <Card className="my-6 border-2 border-purple-200 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="text-4xl">{icon}</span>
          {title}
        </h3>
        <p className="text-purple-100">{context}</p>
      </div>

      <div className="p-8 bg-white">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-700">Scenario Progress</span>
            <span className="text-sm font-bold text-purple-600">{Math.round(completionPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex gap-2 mb-8">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStepIndex(idx)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                idx === currentStepIndex
                  ? 'bg-purple-600 text-white shadow-lg'
                  : completedSteps[idx]
                  ? 'bg-green-100 text-green-700 border-2 border-green-300'
                  : 'bg-gray-100 text-gray-600 border-2 border-gray-300'
              }`}
            >
              {completedSteps[idx] && <CheckCircle2 className="w-4 h-4 inline mr-1" />}
              Step {idx + 1}
            </button>
          ))}
        </div>

        {/* Current Step */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200 mb-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-3">{currentStep.title}</h4>
          <p className="text-gray-700 mb-6">{currentStep.description}</p>

          {/* Actions */}
          <div className="space-y-3 mb-6">
            {currentStep.actions.map((action, idx) => {
              const isSelected = selectedActions[currentStepId] === idx;
              const hasShownFeedback = showFeedback[currentStepId];

              return (
                <div key={idx}>
                  <button
                    onClick={() => handleActionClick(idx)}
                    disabled={hasShownFeedback}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? action.isCorrect
                          ? 'bg-green-50 border-green-400'
                          : 'bg-red-50 border-red-400'
                        : 'bg-white border-gray-300 hover:border-purple-400'
                    } disabled:opacity-75`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{action.text}</span>
                      {isSelected && (
                        <span className={action.isCorrect ? '✅' : '❌'}>
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Feedback */}
                  {isSelected && hasShownFeedback && (
                    <div className={`mt-2 p-4 rounded-lg border-l-4 ${
                      action.isCorrect
                        ? 'bg-green-50 border-l-green-500'
                        : 'bg-red-50 border-l-red-500'
                    }`}>
                      <p className={`font-semibold mb-2 ${
                        action.isCorrect ? 'text-green-900' : 'text-red-900'
                      }`}>
                        {action.isCorrect ? '✓ Correct!' : '✗ Not quite right'}
                      </p>
                      <p className={action.isCorrect ? 'text-green-800' : 'text-red-800'}>
                        {action.feedback}
                      </p>
                      <p className={`text-sm mt-2 ${action.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        <strong>Why:</strong> {action.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mb-6">
          <Button
            onClick={handlePreviousStep}
            disabled={currentStepIndex === 0}
            variant="outline"
            className="flex-1"
          >
            Previous Step
          </Button>
          <Button
            onClick={handleNextStep}
            disabled={currentStepIndex === steps.length - 1 || !completedSteps[currentStepIndex]}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
          >
            Next Step
          </Button>
        </div>

        {/* Completion Message */}
        {isScenarioComplete && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h5 className="text-xl font-bold text-green-900 mb-2">Scenario Complete!</h5>
                <p className="text-green-800 mb-4">
                  Excellent work! You've successfully completed all steps of this scenario.
                </p>
                <p className="text-green-700 font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  +50 points earned
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default {
  InteractiveDecisionTree,
  InteractiveScenario
};

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Play, Pause, Volume2, VolumeX, Sparkles, Zap, Target, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

// ============================================================================
// ANIMATED LEARNING OBJECTIVE CARD
// ============================================================================
interface AnimatedObjectiveProps {
  objectives: string[];
}

export const AnimatedObjectives: React.FC<AnimatedObjectiveProps> = ({ objectives }) => {
  const [completedObjectives, setCompletedObjectives] = useState<Set<number>>(new Set());

  const toggleObjective = (index: number) => {
    const newCompleted = new Set(completedObjectives);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedObjectives(newCompleted);
  };

  return (
    <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 mb-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-blue-600 text-white rounded-lg animate-pulse">
          <Target className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Learning Objectives</h2>
        <span className="ml-auto text-sm font-semibold text-blue-600 bg-white px-3 py-1 rounded-full">
          {completedObjectives.size}/{objectives.length}
        </span>
      </div>

      <div className="space-y-3">
        {objectives.map((objective, idx) => (
          <button
            key={idx}
            onClick={() => toggleObjective(idx)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-102 ${
              completedObjectives.has(idx)
                ? 'bg-green-100 border-green-400 shadow-md'
                : 'bg-white border-gray-300 hover:border-blue-400'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`mt-1 transition-all duration-300 ${completedObjectives.has(idx) ? 'scale-110' : 'scale-100'}`}>
                {completedObjectives.has(idx) ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : (
                  <div className="w-6 h-6 border-2 border-gray-400 rounded-full" />
                )}
              </div>
              <span className={`font-medium ${completedObjectives.has(idx) ? 'text-green-700 line-through' : 'text-gray-700'}`}>
                {objective}
              </span>
            </div>
          </button>
        ))}
      </div>

      {completedObjectives.size === objectives.length && (
        <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-600 rounded flex items-center gap-2 animate-bounce">
          <Sparkles className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-semibold">All objectives mastered! Ready to continue.</span>
        </div>
      )}
    </Card>
  );
};

// ============================================================================
// INTERACTIVE KEY POINTS CAROUSEL
// ============================================================================
interface InteractiveKeyPointsProps {
  keyPoints: string[];
}

export const InteractiveKeyPoints: React.FC<InteractiveKeyPointsProps> = ({ keyPoints }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keyPoints.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, keyPoints.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + keyPoints.length) % keyPoints.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % keyPoints.length);
    setIsAutoPlay(false);
  };

  return (
    <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-6 mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-600" />
          Key Points
        </h2>
        <Button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          variant="outline"
          className="flex items-center gap-2"
        >
          {isAutoPlay ? (
            <>
              <Pause className="w-4 h-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Auto-Play
            </>
          )}
        </Button>
      </div>

      {/* Main Content */}
      <div className="mb-6 min-h-32 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="text-6xl mb-4">📌</div>
          <p className="text-xl font-semibold text-gray-900 mb-2">
            Key Point {currentIndex + 1} of {keyPoints.length}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            {keyPoints[currentIndex]}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Button
          onClick={goToPrevious}
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2"
        >
          ← Previous
        </Button>

        {/* Dots */}
        <div className="flex gap-2 justify-center flex-1">
          {keyPoints.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlay(false);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-amber-600 w-8'
                  : 'bg-amber-300 w-3 hover:bg-amber-400'
              }`}
              aria-label={`Go to key point ${idx + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={goToNext}
          className="flex-1 flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700"
        >
          Next →
        </Button>
      </div>
    </Card>
  );
};

// ============================================================================
// EXPANDABLE CONTENT SECTIONS
// ============================================================================
interface ExpandableContentProps {
  sections: Array<{
    title: string;
    content: string;
    icon?: string;
  }>;
}

export const ExpandableContent: React.FC<ExpandableContentProps> = ({ sections }) => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="space-y-4 mb-6">
      {sections.map((section, idx) => (
        <Card
          key={idx}
          className={`border-2 transition-all duration-300 overflow-hidden ${
            expandedSections.has(idx)
              ? 'border-blue-400 shadow-lg'
              : 'border-gray-300 hover:border-blue-300'
          }`}
        >
          <button
            onClick={() => toggleSection(idx)}
            className="w-full p-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-left flex-1">
              {section.icon && <span className="text-2xl">{section.icon}</span>}
              <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
            </div>
            {expandedSections.has(idx) ? (
              <ChevronUp className="w-6 h-6 text-blue-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400" />
            )}
          </button>

          {expandedSections.has(idx) && (
            <div className="px-4 pb-4 border-t-2 border-gray-200 pt-4 animate-expand-in">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{section.content}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

// ============================================================================
// INTERACTIVE QUIZ PREVIEW
// ============================================================================
interface QuizPreviewProps {
  question: string;
  options: string[];
  onAnswer: (selectedIndex: number) => void;
  showFeedback?: boolean;
  correctAnswer?: number;
}

export const InteractiveQuizPreview: React.FC<QuizPreviewProps> = ({
  question,
  options,
  onAnswer,
  showFeedback = false,
  correctAnswer
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedAnswer(index);
    onAnswer(index);
  };

  return (
    <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 p-6 mb-6 shadow-lg">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-purple-600" />
        Quick Check
      </h3>

      <p className="text-gray-700 font-medium mb-4">{question}</p>

      <div className="space-y-3">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 transform hover:scale-102 ${
              selectedAnswer === idx
                ? showFeedback
                  ? idx === correctAnswer
                    ? 'bg-green-100 border-green-500 shadow-md'
                    : 'bg-red-100 border-red-500 shadow-md'
                  : 'bg-blue-100 border-blue-500 shadow-md'
                : 'bg-white border-gray-300 hover:border-purple-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold ${
                selectedAnswer === idx
                  ? showFeedback
                    ? idx === correctAnswer
                      ? 'bg-green-500 border-green-600 text-white'
                      : 'bg-red-500 border-red-600 text-white'
                    : 'bg-blue-500 border-blue-600 text-white'
                  : 'border-gray-400'
              }`}>
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="font-medium text-gray-700">{option}</span>
              {showFeedback && selectedAnswer === idx && (
                idx === correctAnswer ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                )
              )}
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
};

// ============================================================================
// PROGRESS TRACKER
// ============================================================================
interface ProgressTrackerProps {
  currentLesson: number;
  totalLessons: number;
  completedLessons: number;
  currentModule: string;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  currentLesson,
  totalLessons,
  completedLessons,
  currentModule
}) => {
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <Card className="border-2 border-teal-300 bg-gradient-to-r from-teal-50 to-cyan-50 p-4 mb-6 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-gray-900">{currentModule} Progress</h3>
        <span className="text-sm font-semibold text-teal-700">
          {completedLessons}/{totalLessons} lessons
        </span>
      </div>

      <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden shadow-sm">
        <div
          className="bg-gradient-to-r from-teal-500 to-cyan-500 h-full transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
        <span>Lesson {currentLesson} of {totalLessons}</span>
        <span className="font-semibold text-teal-700">{Math.round(progressPercentage)}%</span>
      </div>
    </Card>
  );
};

// ============================================================================
// ANIMATED STATS CARD
// ============================================================================
interface AnimatedStatsProps {
  stats: Array<{
    label: string;
    value: string | number;
    icon: React.ReactNode;
    color: 'blue' | 'teal' | 'green' | 'amber' | 'purple';
  }>;
}

export const AnimatedStats: React.FC<AnimatedStatsProps> = ({ stats }) => {
  const colorMap = {
    blue: 'from-blue-50 to-cyan-50 border-blue-300',
    teal: 'from-teal-50 to-emerald-50 border-teal-300',
    green: 'from-green-50 to-emerald-50 border-green-300',
    amber: 'from-amber-50 to-orange-50 border-amber-300',
    purple: 'from-purple-50 to-pink-50 border-purple-300'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          className={`border-2 bg-gradient-to-br ${colorMap[stat.color]} p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform`}
        >
          <div className="flex items-start justify-between mb-2">
            <div className="text-3xl">{stat.icon}</div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

// ============================================================================
// CSS ANIMATIONS
// ============================================================================
const animationStyles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes expand-in {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 1000px;
    }
  }

  @keyframes scale-up {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }

  .animate-expand-in {
    animation: expand-in 0.3s ease-out;
  }

  .animate-scale-up {
    animation: scale-up 0.3s ease-out;
  }

  .hover\\:scale-102:hover {
    transform: scale(1.02);
  }
`;

export const AnimationStyles = () => (
  <style>{animationStyles}</style>
);

export default {
  AnimatedObjectives,
  InteractiveKeyPoints,
  ExpandableContent,
  InteractiveQuizPreview,
  ProgressTracker,
  AnimatedStats,
  AnimationStyles
};

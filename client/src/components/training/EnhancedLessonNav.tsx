import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  CheckCircle2,
  Clock,
  Zap,
  BookOpen,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface LessonNavItem {
  id: number;
  title: string;
  isCompleted: boolean;
  isCurrent: boolean;
  duration: string;
  index: number;
  isLocked?: boolean;
}

interface EnhancedNavProps {
  currentLesson: LessonNavItem;
  previousLesson?: LessonNavItem;
  nextLesson?: LessonNavItem;
  onPrevious: () => void;
  onNext: () => void;
  totalLessons: number;
  currentIndex: number;
  moduleName: string;
}

export function EnhancedLessonNavigation({
  currentLesson,
  previousLesson,
  nextLesson,
  onPrevious,
  onNext,
  totalLessons,
  currentIndex,
  moduleName
}: EnhancedNavProps) {
  const progressPercentage = ((currentIndex + 1) / totalLessons) * 100;

  return (
    <div className="space-y-6">
      {/* Navigation Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Previous Lesson Card */}
        {previousLesson ? (
          <button
            onClick={onPrevious}
            className="group text-left transition-all duration-300 hover:scale-105"
          >
            <Card className="h-full border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3 text-blue-600 group-hover:text-blue-700 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Previous</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {previousLesson.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-3 h-3" />
                  <span>{previousLesson.duration}</span>
                </div>
                {previousLesson.isCompleted && (
                  <div className="mt-3 flex items-center gap-1 text-green-600 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Completed</span>
                  </div>
                )}
              </div>
            </Card>
          </button>
        ) : (
          <div className="opacity-50">
            <Card className="h-full border-2 border-gray-200 bg-gray-50">
              <div className="p-4 text-center">
                <Lock className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">First Lesson</p>
              </div>
            </Card>
          </div>
        )}

        {/* Current Lesson Card */}
        <Card className="h-full border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-teal-50 shadow-lg">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3 text-blue-600">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Current</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
              {currentLesson.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Clock className="w-3 h-3" />
              <span>{currentLesson.duration}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-teal-500 h-full transition-all duration-500"
                style={{ width: '100%' }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-2">In Progress</p>
          </div>
        </Card>

        {/* Next Lesson Card */}
        {nextLesson ? (
          <button
            onClick={onNext}
            className="group text-left transition-all duration-300 hover:scale-105"
          >
            <Card className="h-full border-2 border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3 text-teal-600 group-hover:text-teal-700 transition-colors">
                  <span className="text-xs font-semibold uppercase tracking-wide">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                  {nextLesson.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-3 h-3" />
                  <span>{nextLesson.duration}</span>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  Lesson {nextLesson.index + 1} of {totalLessons}
                </div>
              </div>
            </Card>
          </button>
        ) : (
          <div className="opacity-50">
            <Card className="h-full border-2 border-gray-200 bg-gray-50">
              <div className="p-4 text-center">
                <BookOpen className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Take Quiz</p>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-200">
        <Button
          onClick={onPrevious}
          disabled={!previousLesson}
          variant="outline"
          className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        <div className="text-center">
          <p className="text-sm font-semibold text-gray-900">
            Lesson {currentIndex + 1} of {totalLessons}
          </p>
          <p className="text-xs text-gray-600">{Math.round(progressPercentage)}% Complete</p>
        </div>

        <Button
          onClick={onNext}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="hidden sm:inline">{nextLesson ? 'Next' : 'Quiz'}</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export function LessonProgressBar({ current, total, moduleName }: { current: number; total: number; moduleName: string }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-gray-900">{moduleName}</span>
        </div>
        <span className="text-sm font-bold text-blue-600">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-sm">
        <div
          className="bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 h-full transition-all duration-700 ease-out shadow-lg rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-600">
        {current + 1} of {total} lessons completed
      </p>
    </div>
  );
}

export function LessonBreadcrumb({ 
  moduleName, 
  lessonTitle, 
  currentIndex, 
  totalLessons,
  onModuleClick 
}: { 
  moduleName: string;
  lessonTitle: string;
  currentIndex: number;
  totalLessons: number;
  onModuleClick: () => void;
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={onModuleClick}
        className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
      >
        {moduleName}
      </button>
      <span className="text-gray-400">/</span>
      <span className="text-gray-600">{lessonTitle}</span>
      <span className="text-gray-400 ml-auto">
        Lesson {currentIndex + 1} of {totalLessons}
      </span>
    </div>
  );
}

export function LessonNavigationKeyboard({ onPrevious, onNext, canGoPrevious, canGoNext }: { onPrevious: () => void; onNext: () => void; canGoPrevious: boolean; canGoNext: boolean }) {
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && canGoPrevious) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && canGoNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onPrevious, onNext, canGoPrevious, canGoNext]);

  return (
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-xs pointer-events-none">
      <p>← → Arrow keys to navigate</p>
    </div>
  );
}

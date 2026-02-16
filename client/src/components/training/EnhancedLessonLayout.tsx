import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Target,
  Zap,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ArrowUp,
  TrendingUp,
  Award,
  Lightbulb
} from 'lucide-react';

// ============================================================================
// ENHANCED LESSON HEADER
// ============================================================================
interface LessonHeaderProps {
  title: string;
  duration: string;
  moduleTitle: string;
  lessonNumber: number;
  totalLessons: number;
  isCompleted: boolean;
  progressPercentage: number;
}

export const EnhancedLessonHeader: React.FC<LessonHeaderProps> = ({
  title,
  duration,
  moduleTitle,
  lessonNumber,
  totalLessons,
  isCompleted,
  progressPercentage
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
      <div className="max-w-5xl mx-auto px-4 py-4">
        {/* Top Row: Navigation and Status */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-blue-50"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          {isCompleted && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg border-2 border-green-300 animate-pulse">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">Completed</span>
            </div>
          )}
        </div>

        {/* Breadcrumb and Progress Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold text-blue-600">{moduleTitle}</span>
            <span className="text-gray-400">/</span>
            <span>Lesson {lessonNumber} of {totalLessons}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="font-medium">{duration}</span>
            </div>
            <span className="text-sm font-bold text-blue-600 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {Math.round(progressPercentage)}%
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-sm">
          <div
            className="bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 h-full transition-all duration-700 ease-out shadow-lg"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </header>
  );
};

// ============================================================================
// ENHANCED LESSON HERO SECTION
// ============================================================================
interface LessonHeroProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  animateIn?: boolean;
}

export const EnhancedLessonHero: React.FC<LessonHeroProps> = ({
  title,
  subtitle,
  icon,
  animateIn = true
}) => {
  return (
    <div className={`mb-8 transition-all duration-700 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            {icon && <div className="text-4xl">{icon}</div>}
            <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-gray-600 text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ENHANCED METADATA CARDS
// ============================================================================
interface MetadataCardsProps {
  duration: string;
  objectives: number;
  keyPoints: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export const EnhancedMetadataCards: React.FC<MetadataCardsProps> = ({
  duration,
  objectives,
  keyPoints,
  difficulty = 'intermediate'
}) => {
  const difficultyColors = {
    beginner: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', label: 'Beginner' },
    intermediate: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-700', label: 'Intermediate' },
    advanced: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700', label: 'Advanced' }
  };

  const diffColor = difficultyColors[difficulty];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Clock className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Duration</p>
          <p className="font-semibold text-gray-900">{duration}</p>
        </div>
      </Card>

      <Card className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-gray-200 hover:shadow-lg hover:border-teal-300 transition-all duration-300">
        <div className="p-3 bg-teal-50 rounded-lg">
          <Target className="w-5 h-5 text-teal-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Objectives</p>
          <p className="font-semibold text-gray-900">{objectives} topics</p>
        </div>
      </Card>

      <Card className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-gray-200 hover:shadow-lg hover:border-amber-300 transition-all duration-300">
        <div className="p-3 bg-amber-50 rounded-lg">
          <Lightbulb className="w-5 h-5 text-amber-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Key Points</p>
          <p className="font-semibold text-gray-900">{keyPoints} points</p>
        </div>
      </Card>

      <Card className={`flex items-center gap-3 ${diffColor.bg} p-4 rounded-lg border-2 ${diffColor.border} hover:shadow-lg transition-all duration-300`}>
        <div className={`p-3 ${diffColor.bg} rounded-lg`}>
          <Award className="w-5 h-5" style={{ color: diffColor.text.split('-')[1] === 'green' ? '#16a34a' : diffColor.text.split('-')[1] === 'amber' ? '#d97706' : '#dc2626' }} />
        </div>
        <div>
          <p className={`text-sm ${diffColor.text}`}>Difficulty</p>
          <p className={`font-semibold ${diffColor.text}`}>{diffColor.label}</p>
        </div>
      </Card>
    </div>
  );
};

// ============================================================================
// ENHANCED CONTENT SECTION
// ============================================================================
interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: 'blue' | 'teal' | 'purple' | 'green' | 'amber';
}

export const EnhancedContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  icon,
  color = 'blue'
}) => {
  const colorMap = {
    blue: { border: 'border-l-blue-500', bg: 'bg-blue-50', header: 'bg-blue-100' },
    teal: { border: 'border-l-teal-500', bg: 'bg-teal-50', header: 'bg-teal-100' },
    purple: { border: 'border-l-purple-500', bg: 'bg-purple-50', header: 'bg-purple-100' },
    green: { border: 'border-l-green-500', bg: 'bg-green-50', header: 'bg-green-100' },
    amber: { border: 'border-l-amber-500', bg: 'bg-amber-50', header: 'bg-amber-100' }
  };

  const colors = colorMap[color];

  return (
    <Card className={`mb-8 border-l-4 ${colors.border} ${colors.bg} hover:shadow-lg transition-shadow duration-300`}>
      <div className={`${colors.header} px-6 py-4 border-b-2 border-gray-200 flex items-center gap-3`}>
        {icon && <div className="text-2xl">{icon}</div>}
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="p-6">
        {children}
      </div>
    </Card>
  );
};

// ============================================================================
// ENHANCED NAVIGATION BUTTONS
// ============================================================================
interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  previousLabel?: string;
  nextLabel?: string;
  isPreviousDisabled?: boolean;
  isNextDisabled?: boolean;
  nextIsQuiz?: boolean;
}

export const EnhancedNavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  previousLabel = 'Previous Lesson',
  nextLabel = 'Next Lesson',
  isPreviousDisabled = false,
  isNextDisabled = false,
  nextIsQuiz = false
}) => {
  return (
    <div className="flex gap-4 mt-12 pt-8 border-t-2 border-gray-200">
      <Button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        variant="outline"
        className="flex-1 flex items-center justify-center gap-2 py-6 text-lg font-semibold hover:bg-blue-50 disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5" />
        {previousLabel}
      </Button>

      <Button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`flex-1 flex items-center justify-center gap-2 py-6 text-lg font-semibold ${
          nextIsQuiz
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700'
        } text-white disabled:opacity-50`}
      >
        {nextLabel}
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

// ============================================================================
// SCROLL TO TOP BUTTON
// ============================================================================
interface ScrollToTopProps {
  isVisible: boolean;
  onClick: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopProps> = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce z-40"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// ============================================================================
// LESSON COMPLETION SECTION
// ============================================================================
interface CompletionSectionProps {
  isCompleted: boolean;
  onMarkComplete: () => void;
  pointsEarned: number;
  certificateAvailable?: boolean;
}

export const EnhancedCompletionSection: React.FC<CompletionSectionProps> = ({
  isCompleted,
  onMarkComplete,
  pointsEarned,
  certificateAvailable = false
}) => {
  return (
    <Card className="my-8 border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
            Lesson Completion
          </h3>
          <p className="text-green-800 mb-4">
            {isCompleted
              ? 'Great job! You have completed this lesson.'
              : 'Mark this lesson as complete to earn points and track your progress.'}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white px-4 py-2 rounded-lg border-2 border-green-300">
              <p className="text-sm text-gray-600">Points Earned</p>
              <p className="text-2xl font-bold text-green-600">+{pointsEarned}</p>
            </div>
            {certificateAvailable && (
              <div className="bg-white px-4 py-2 rounded-lg border-2 border-amber-300">
                <p className="text-sm text-gray-600">Certificate</p>
                <p className="text-lg font-bold text-amber-600">Available</p>
              </div>
            )}
          </div>
        </div>
        {!isCompleted && (
          <Button
            onClick={onMarkComplete}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-bold text-lg"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Mark as Completed
          </Button>
        )}
      </div>
    </Card>
  );
};

// ============================================================================
// LESSON CONTENT WRAPPER
// ============================================================================
interface EnhancedLessonContentProps {
  children: React.ReactNode;
  className?: string;
}

export const EnhancedLessonContent: React.FC<EnhancedLessonContentProps> = ({
  children,
  className = ''
}) => {
  return (
    <main className={`max-w-5xl mx-auto px-4 py-8 ${className}`}>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </main>
  );
};

export default {
  EnhancedLessonHeader,
  EnhancedLessonHero,
  EnhancedMetadataCards,
  EnhancedContentSection,
  EnhancedNavigationButtons,
  ScrollToTopButton,
  EnhancedCompletionSection,
  EnhancedLessonContent
};

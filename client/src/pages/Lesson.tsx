import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { modules } from '@/data/lessonContent';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  BookOpen,
  AlertCircle,
  Lightbulb,
  Target,
  ArrowUp
} from 'lucide-react';

interface LessonParams {
  moduleId: string;
  lessonId: string;
}

export default function LessonPage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [params, setParams] = useState<LessonParams | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState<any>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/\/lesson\/(\d+)\/(\d+)/);
    if (match) {
      setParams({ moduleId: match[1], lessonId: match[2] });
    }

    const savedProgress = localStorage.getItem('ocs_progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll visibility for "scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!params) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin mb-4">
            <BookOpen className="w-12 h-12 text-blue-600" />
          </div>
          <p className="text-gray-600 font-medium">Loading lesson...</p>
        </div>
      </div>
    );
  }

  const moduleId = parseInt(params.moduleId);
  const lessonId = parseInt(params.lessonId);
  const module = modules.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const lessonKey = `${moduleId}-${lessonId}`;

  if (!module || !lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <div className="p-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Lesson Not Found</h1>
            <p className="text-gray-600 mb-6">We couldn't find the lesson you're looking for.</p>
            <Button onClick={() => setLocation('/dashboard')} className="w-full">
              Back to Dashboard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const handleMarkComplete = () => {
    const currentProgress = progress || {
      completedLessons: [],
      completedQuizzes: [],
      achievements: [],
      points: 0,
      streak: 0,
      lastActivity: null
    };

    if (!currentProgress.completedLessons.includes(lessonKey)) {
      currentProgress.completedLessons.push(lessonKey);
      currentProgress.points += 10;
      currentProgress.lastActivity = new Date().toISOString();
    }

    localStorage.setItem('ocs_progress', JSON.stringify(currentProgress));
    setIsCompleted(true);
    setProgress(currentProgress);
  };

  const handleNextLesson = () => {
    const currentLessonIndex = module.lessons.findIndex(l => l.id === lessonId);
    if (currentLessonIndex < module.lessons.length - 1) {
      const nextLesson = module.lessons[currentLessonIndex + 1];
      setLocation(`/lesson/${moduleId}/${nextLesson.id}`);
    } else {
      setLocation(`/quiz/${moduleId}`);
    }
  };

  const handlePreviousLesson = () => {
    const currentLessonIndex = module.lessons.findIndex(l => l.id === lessonId);
    if (currentLessonIndex > 0) {
      const prevLesson = module.lessons[currentLessonIndex - 1];
      setLocation(`/lesson/${moduleId}/${prevLesson.id}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLessonCompleted = progress?.completedLessons.includes(lessonKey);
  const currentLessonIndex = module.lessons.findIndex(l => l.id === lessonId);
  const totalLessons = module.lessons.length;
  const progressPercentage = ((currentLessonIndex + 1) / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="outline" 
              onClick={() => setLocation('/dashboard')}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            {isLessonCompleted && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Completed</span>
              </div>
            )}
          </div>

          {/* Breadcrumb and Progress */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{module.title}</span>
              <span className="text-gray-400">/</span>
              <span>Lesson {currentLessonIndex + 1} of {totalLessons}</span>
            </div>
            <span className="text-sm font-medium text-blue-600">{Math.round(progressPercentage)}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-teal-500 h-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Lesson Hero Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
              <p className="text-gray-600 text-lg">Master key concepts in this lesson</p>
            </div>
          </div>

          {/* Lesson Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold text-gray-900">{lesson.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <Target className="w-5 h-5 text-teal-600" />
              <div>
                <p className="text-sm text-gray-600">Learning Objectives</p>
                <p className="font-semibold text-gray-900">{lesson.learningObjectives.length} topics</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <div>
                <p className="text-sm text-gray-600">Key Points</p>
                <p className="font-semibold text-gray-900">{lesson.keyPoints.length} points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <Card className="mb-8 border-l-4 border-l-blue-500">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Learning Objectives</h2>
            </div>
            <p className="text-gray-600 mb-4">By the end of this lesson, you will be able to:</p>
            <ul className="space-y-3">
              {lesson.learningObjectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 pt-0.5">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Main Content */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-strong:font-semibold">
              <ReactMarkdown
                components={{
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3" {...props} />,
                  p: ({node, ...props}) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4" {...props} />,
                  code: ({node, ...props}) => <code className="bg-gray-100 text-red-600 px-2 py-1 rounded font-mono text-sm" {...props} />,
                }}
              >
                {lesson.content}
              </ReactMarkdown>
            </div>
          </div>
        </Card>

        {/* Key Points */}
        <Card className="mb-8 border-l-4 border-l-amber-500">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">Key Points to Remember</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.keyPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <span className="flex-shrink-0 text-amber-600 font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Completion Section */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
          <div className="p-8 text-center">
            {isLessonCompleted ? (
              <div>
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Lesson Completed! 🎉</h3>
                <p className="text-gray-600 mb-6">Great job! You've earned 10 points for completing this lesson.</p>
              </div>
            ) : (
              <div>
                <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Complete This Lesson?</h3>
                <p className="text-gray-600 mb-6">Mark this lesson as complete to earn 10 points and track your progress.</p>
                <Button 
                  onClick={handleMarkComplete}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Mark Lesson as Complete
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4 justify-between mb-12">
          <Button 
            variant="outline"
            onClick={handlePreviousLesson}
            disabled={currentLessonIndex === 0}
            className="flex-1 py-3 text-base font-semibold"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous Lesson
          </Button>

          <Button 
            onClick={handleNextLesson}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold"
          >
            {currentLessonIndex === totalLessons - 1
              ? 'Take Quiz'
              : 'Next Lesson'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

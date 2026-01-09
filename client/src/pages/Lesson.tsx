import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { modules } from '@/data/lessonContent';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

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
  }, []);

  if (!params) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading lesson...</p>
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson Not Found</h1>
          <Button onClick={() => setLocation('/dashboard')}>Back to Dashboard</Button>
        </div>
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

  const isLessonCompleted = progress?.completedLessons.includes(lessonKey);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setLocation('/dashboard')}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <p className="text-sm text-gray-600">{module.title}</p>
              <h1 className="text-xl font-bold text-gray-900">{lesson.title}</h1>
            </div>
          </div>
          {isLessonCompleted && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">Completed</span>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Lesson Content */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Duration: {lesson.duration}</p>
                <h2 className="text-3xl font-bold text-gray-900">{lesson.title}</h2>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">Learning Objectives</h3>
              <ul className="space-y-2">
                {lesson.learningObjectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-blue-800">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="prose prose-sm max-w-none mb-8">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>

            {/* Key Points */}
            <div className="mb-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-3">Key Points to Remember</h3>
              <ul className="space-y-2">
                {lesson.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-amber-800">
                    <span className="text-amber-600 font-bold mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Completion Button */}
            {!isLessonCompleted && (
              <Button 
                onClick={handleMarkComplete}
                className="w-full mb-6 bg-green-600 hover:bg-green-700 text-white py-3"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Mark Lesson as Complete
              </Button>
            )}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
          <Button 
            variant="outline"
            onClick={handlePreviousLesson}
            disabled={module.lessons.findIndex(l => l.id === lessonId) === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous Lesson
          </Button>

          <Button 
            onClick={handleNextLesson}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {module.lessons.findIndex(l => l.id === lessonId) === module.lessons.length - 1
              ? 'Take Quiz'
              : 'Next Lesson'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
}

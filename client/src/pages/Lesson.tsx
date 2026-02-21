import { useState, useEffect } from 'react';
import { useLocation, useRoute } from 'wouter';
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
  ArrowUp,
  Zap,
  Award,
  Trophy,
  TrendingUp
} from 'lucide-react';
import { getVisualLessonContent } from '@/data/visualLessonData';
import {
  ComparisonTable,
  Timeline,
  ProcessFlow,
  InfoBox,
  WarningBox,
  TipBox,
  StatisticsGrid,
  ExpandableSection,
  LearningObjectivesVisual,
  KeyPointsVisual,
  SectionDivider
} from '@/components/training/VisualEnhancedComponents';
import {
  VideoPlayer,
  Infographic,
  ImageGallery,
  DownloadableResources
} from '@/components/training/MultimediaIntegration';
import {
  CIATriadDiagram,
  PrivacyLawFrameworkDiagram,
  ThreatMatrixDiagram,
  DataGovernanceLifecycleDiagram,
  AIEthicsPrinciplesDiagram
} from '@/components/training/InteractiveDiagrams';
import { LessonStudyMaterials } from '@/components/training/LessonStudyMaterials';
import {
  AnimatedObjectives,
  InteractiveKeyPoints,
  ExpandableContent,
  ProgressTracker,
  AnimatedStats,
  AnimationStyles
} from '@/components/training/InteractiveLessonElements';

export default function LessonPage() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute('/lesson/:moduleId/:lessonId');
  const { user } = useAuth();
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState<any>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('ocs_progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Trigger animation
    setTimeout(() => setAnimateIn(true), 100);
  }, []);

  // Handle scroll visibility for "scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!match || !params) {
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
    console.error(`Lesson not found: Module ${moduleId}, Lesson ${lessonId}`);
    console.error('Available modules:', modules.map(m => ({ id: m.id, lessons: m.lessons.map(l => l.id) })));
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <div className="p-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Lesson Not Found</h1>
            <p className="text-gray-600 mb-2">We couldn't find the lesson you're looking for.</p>
            <p className="text-sm text-gray-500 mb-6">Module: {moduleId}, Lesson: {lessonId}</p>
            <Button onClick={() => setLocation('/dashboard')} className="w-full">
              Back to Dashboard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Additional safety checks for lesson properties
  if (!lesson.learningObjectives || !Array.isArray(lesson.learningObjectives)) {
    console.error('Missing or invalid learningObjectives for lesson:', lessonId);
    lesson.learningObjectives = [];
  }

  if (!lesson.keyPoints || !Array.isArray(lesson.keyPoints)) {
    console.error('Missing or invalid keyPoints for lesson:', lessonId);
    lesson.keyPoints = [];
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
      // Last lesson - go to quiz
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
              className="flex items-center gap-2 hover:bg-blue-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            {isLessonCompleted && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200 animate-pulse">
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
            <span className="text-sm font-medium text-blue-600 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {Math.round(progressPercentage)}%
            </span>
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

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Lesson Hero Section */}
        <div className={`mb-8 transition-all duration-700 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {lesson.title}
              </h1>
              <p className="text-gray-600 text-lg flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Master key concepts in this lesson
              </p>
            </div>
          </div>

          {/* Lesson Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold text-gray-900">{lesson.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg hover:border-teal-300 transition-all duration-300">
              <div className="p-3 bg-teal-50 rounded-lg">
                <Target className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Learning Objectives</p>
                <p className="font-semibold text-gray-900">{lesson.learningObjectives.length} topics</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg hover:border-amber-300 transition-all duration-300">
              <div className="p-3 bg-amber-50 rounded-lg">
                <Lightbulb className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Key Points</p>
                <p className="font-semibold text-gray-900">{lesson.keyPoints.length} points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Learning Objectives */}
        <AnimatedObjectives objectives={lesson.learningObjectives || []} />

        {/* Interactive Key Points Carousel */}
        <InteractiveKeyPoints keyPoints={lesson.keyPoints || []} />

        {/* Progress Tracker */}
        <ProgressTracker
          currentLesson={currentLessonIndex + 1}
          totalLessons={totalLessons}
          completedLessons={progress?.completedLessons.length || 0}
          currentModule={module.title}
        />

        {/* Main Content */}
        <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-8 bg-gradient-to-br from-white to-blue-50">
            <div className="prose prose-lg max-w-none 
              prose-headings:text-gray-900 prose-headings:font-bold 
              prose-p:text-gray-700 prose-p:leading-relaxed 
              prose-li:text-gray-700 
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic
            ">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>
          </div>
        </Card>

        {/* Visual Content - Infographics, Videos, Timelines */}
        {(() => {
          const visualContent = getVisualLessonContent(moduleId, lessonId);
          if (!visualContent) return null;

          return (
            <>
              {/* Infographics Section */}
              {visualContent.infographics && visualContent.infographics.length > 0 && (
                <>
                  <SectionDivider title="Visual Learning Materials" />
                  {visualContent.infographics.map((infographic) => (
                    <Infographic
                      key={infographic.id}
                      title={infographic.title}
                      description={infographic.description}
                      imageUrl={infographic.imageUrl}
                      altText={infographic.altText}
                      caption={infographic.caption}
                    />
                  ))}
                </>
              )}



              {/* Timeline Section */}
              {visualContent.timelines && visualContent.timelines.length > 0 && (
                <>
                  <SectionDivider title="Historical Context" />
                  <Timeline
                    items={visualContent.timelines.map((item) => ({
                      year: item.year,
                      title: item.title,
                      description: item.description,
                      icon: item.icon
                    }))}
                    title="Timeline"
                  />
                </>
              )}

              {/* Process Flow Section */}
              {visualContent.processFlows && visualContent.processFlows.length > 0 && (
                <>
                  <SectionDivider title="Process Overview" />
                  <ProcessFlow
                    steps={visualContent.processFlows.map((step) => ({
                      number: step.number,
                      title: step.title,
                      description: step.description,
                      icon: step.icon
                    }))}
                    title="Step-by-Step Process"
                  />
                </>
              )}

              {/* Comparison Tables Section */}
              {visualContent.comparisonTables && visualContent.comparisonTables.length > 0 && (
                <>
                  <SectionDivider title="Best Practices" />
                  <ComparisonTable
                    items={visualContent.comparisonTables}
                    title="Best Practices vs Common Mistakes"
                  />
                </>
              )}

              {/* Statistics Section */}
              {visualContent.statistics && visualContent.statistics.length > 0 && (
                <>
                  <SectionDivider title="Key Statistics" />
                  <StatisticsGrid
                    stats={visualContent.statistics}
                    title="Important Metrics"
                  />
                </>
              )}

              {/* Study Materials Section */}
              <SectionDivider title="Study Materials" />
              <LessonStudyMaterials lessonId={lessonId} className="mb-8" />

              {/* Resources Section */}
              {visualContent.resources && visualContent.resources.length > 0 && (
                <>
                  <SectionDivider title="Downloadable Resources" />
                  <DownloadableResources
                    title="Additional Resources"
                    resources={visualContent.resources}
                  />
                </>
              )}
            </>
          );
        })()}



        {/* Completion Button */}
        {!isLessonCompleted && (
          <Card className="mb-8 bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finished this lesson?</h3>
              <p className="text-gray-600 mb-4">Mark this lesson as complete to earn points and track your progress.</p>
              <Button 
                onClick={handleMarkComplete}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Mark as Complete
              </Button>
            </div>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Button 
            onClick={handlePreviousLesson}
            disabled={currentLessonIndex === 0}
            variant="outline"
            className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50 transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Lesson</span>
            <span className="sm:hidden">Previous</span>
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            <p className="font-semibold">Lesson {currentLessonIndex + 1} of {totalLessons}</p>
            <p className="text-xs">{Math.round(progressPercentage)}% Complete</p>
          </div>

          <Button 
            onClick={handleNextLesson}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="hidden sm:inline">
              {currentLessonIndex === totalLessons - 1 ? 'Take Quiz' : 'Next Lesson'}
            </span>
            <span className="sm:hidden">
              {currentLessonIndex === totalLessons - 1 ? 'Quiz' : 'Next'}
            </span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

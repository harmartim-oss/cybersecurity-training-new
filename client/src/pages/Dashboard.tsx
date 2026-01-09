import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
}

interface Progress {
  completedLessons: string[];
  completedQuizzes: number[];
  achievements: string[];
  points: number;
  streak: number;
  lastActivity: string | null;
}

const MODULES: Module[] = [
  {
    id: 1,
    title: "Ontario's Privacy Landscape",
    description: "Understanding FIPPA, MFIPPA, and PIPEDA legislation",
    icon: "🛡️",
    color: "blue",
    lessons: [
      { id: 1, title: "Introduction to Privacy Legislation", duration: "15 min" },
      { id: 2, title: "FIPPA Deep Dive", duration: "20 min" },
      { id: 3, title: "MFIPPA for Municipalities", duration: "18 min" },
      { id: 4, title: "PIPEDA for Small Business", duration: "22 min" },
      { id: 5, title: "Privacy Rights & Obligations", duration: "19 min" },
      { id: 6, title: "Data Breach Notification", duration: "16 min" },
      { id: 7, title: "Compliance Frameworks", duration: "21 min" },
      { id: 8, title: "Real-World Case Studies", duration: "25 min" }
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals",
    description: "Essential cybersecurity practices and threat awareness",
    icon: "🔒",
    color: "red",
    lessons: [
      { id: 1, title: "Threat Landscape Overview", duration: "16 min" },
      { id: 2, title: "Password Security & MFA", duration: "14 min" },
      { id: 3, title: "Phishing & Social Engineering", duration: "19 min" },
      { id: 4, title: "Incident Response Planning", duration: "25 min" },
      { id: 5, title: "Network Security Basics", duration: "20 min" },
      { id: 6, title: "Malware & Ransomware", duration: "18 min" },
      { id: 7, title: "Endpoint Protection", duration: "17 min" },
      { id: 8, title: "Security Awareness Training", duration: "22 min" },
      { id: 9, title: "Vulnerability Management", duration: "23 min" },
      { id: 10, title: "Incident Detection", duration: "21 min" },
      { id: 11, title: "Forensics Basics", duration: "24 min" },
      { id: 12, title: "Compliance & Auditing", duration: "19 min" }
    ]
  },
  {
    id: 3,
    title: "AI & Data Governance",
    description: "Ethical AI implementation and data management practices",
    icon: "🧠",
    color: "purple",
    lessons: [
      { id: 1, title: "AI Ethics Framework", duration: "17 min" },
      { id: 2, title: "Data Classification & Handling", duration: "21 min" },
      { id: 3, title: "Algorithmic Bias Prevention", duration: "23 min" },
      { id: 4, title: "AI Governance Implementation", duration: "26 min" },
      { id: 5, title: "Responsible AI Principles", duration: "20 min" },
      { id: 6, title: "Data Privacy in AI Systems", duration: "22 min" }
    ]
  },
  {
    id: 4,
    title: "Data Management Excellence",
    description: "Best practices for data handling and lifecycle management",
    icon: "📊",
    color: "green",
    lessons: [
      { id: 1, title: "Data Lifecycle Management", duration: "18 min" },
      { id: 2, title: "Data Quality & Integrity", duration: "19 min" },
      { id: 3, title: "Retention & Disposal", duration: "17 min" },
      { id: 4, title: "Data Minimization", duration: "16 min" },
      { id: 5, title: "Backup & Recovery", duration: "21 min" },
      { id: 6, title: "Data Governance Policies", duration: "23 min" },
      { id: 7, title: "Vendor Management", duration: "20 min" },
      { id: 8, title: "Data Audit & Compliance", duration: "22 min" }
    ]
  }
];

const ACHIEVEMENTS = {
  FIRST_LESSON: { id: 'first_lesson', name: 'Getting Started', description: 'Complete your first lesson', points: 10, icon: '🎯' },
  MODULE_COMPLETE: { id: 'module_complete', name: 'Module Master', description: 'Complete an entire module', points: 50, icon: '🏆' },
  QUIZ_PERFECT: { id: 'quiz_perfect', name: 'Perfect Score', description: 'Get 100% on a quiz', points: 25, icon: '⭐' },
  STREAK_3: { id: 'streak_3', name: 'Learning Streak', description: 'Complete 3 lessons in a row', points: 30, icon: '🔥' },
  KNOWLEDGE_SEEKER: { id: 'knowledge_seeker', name: 'Knowledge Seeker', description: 'Complete all modules', points: 100, icon: '🎓' }
};

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem('ocs_progress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      completedQuizzes: [],
      achievements: [],
      points: 0,
      streak: 0,
      lastActivity: null
    };
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    logout();
    setLocation('/auth');
  };

  const totalLessons = MODULES.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = progress.completedLessons.length;
  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <h1 className="text-2xl font-bold text-gray-900">Ontario CyberSafe</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <span className="font-semibold text-gray-900">{progress.points} pts</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-600">{user?.organization}</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-gray-600">Continue your cybersecurity training journey</p>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Overall Progress</h3>
              <span className="text-gray-600">{completedLessons} of {totalLessons} lessons completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <p className="text-gray-600 mt-2">{Math.round(overallProgress)}% complete</p>
          </div>
        </Card>

        {/* Achievements */}
        {progress.achievements.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="flex flex-wrap gap-4">
              {progress.achievements.slice(-3).map(achievementId => {
                const achievement = Object.values(ACHIEVEMENTS).find(a => a.id === achievementId);
                if (!achievement) return null;
                return (
                  <Card key={achievementId} className="p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <p className="font-semibold text-gray-900 text-sm">{achievement.name}</p>
                      <p className="text-xs text-gray-600">{achievement.points} pts</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Modules Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Training Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODULES.map((module) => {
              const moduleProgress = module.lessons.filter(lesson => 
                progress.completedLessons.includes(`${module.id}-${lesson.id}`)
              ).length;
              const modulePercentage = module.lessons.length > 0 ? (moduleProgress / module.lessons.length) * 100 : 0;

              return (
                <Card key={module.id} className="hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{module.icon}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        modulePercentage === 100 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {modulePercentage === 100 ? "Complete" : `${Math.round(modulePercentage)}%`}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${modulePercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 mb-4">
                      {moduleProgress} of {module.lessons.length} lessons
                    </p>
                    <Button className="w-full" variant="default">
                      {modulePercentage > 0 ? "Continue" : "Start"} Module
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">📖</div>
            <p className="text-3xl font-bold text-gray-900">{completedLessons}</p>
            <p className="text-sm text-gray-600">Lessons Completed</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-3xl font-bold text-gray-900">{progress.points}</p>
            <p className="text-sm text-gray-600">Points Earned</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">🎖️</div>
            <p className="text-3xl font-bold text-gray-900">{progress.achievements.length}</p>
            <p className="text-sm text-gray-600">Achievements</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">🔥</div>
            <p className="text-3xl font-bold text-gray-900">{progress.streak}</p>
            <p className="text-sm text-gray-600">Current Streak</p>
          </Card>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

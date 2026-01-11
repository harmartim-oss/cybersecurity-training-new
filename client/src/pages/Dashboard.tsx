import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { modules } from '@/data/lessonContent';
import { Award, BookOpen, Trophy, TrendingUp } from 'lucide-react';

interface Progress {
  completedLessons: string[];
  completedQuizzes: number[];
  achievements: string[];
  points: number;
  streak: number;
  lastActivity: string | null;
}

const ACHIEVEMENTS = [
  { id: 'first_lesson', name: 'First Step', description: 'Complete your first lesson', icon: '🎯' },
  { id: 'module_master', name: 'Module Master', description: 'Complete all lessons in a module', icon: '🏆' },
  { id: 'quiz_ace', name: 'Quiz Ace', description: 'Score 100% on a quiz', icon: '⭐' },
  { id: 'streak_7', name: 'On Fire', description: 'Maintain a 7-day streak', icon: '🔥' },
  { id: 'all_modules', name: 'Cybersecurity Expert', description: 'Complete all modules', icon: '👑' },
  { id: 'certified', name: 'Certified Professional', description: 'Earn your first certificate', icon: '📜' },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [progress, setProgress] = useState<Progress>({
    completedLessons: [],
    completedQuizzes: [],
    achievements: [],
    points: 0,
    streak: 0,
    lastActivity: null
  });

  useEffect(() => {
    const saved = localStorage.getItem('ocs_progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completionPercentage = totalLessons > 0 ? (progress.completedLessons.length / totalLessons) * 100 : 0;

  const handleLogout = () => {
    logout();
    setLocation('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <h1 className="text-2xl font-bold text-gray-900">Ontario CyberSafe</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setLocation('/')}>
              🏠 Home
            </Button>
            <Button variant="outline" onClick={() => setLocation('/profile')}>
              My Profile
            </Button>
            <Button variant="outline" onClick={() => setLocation('/certificates')}>
              Certificates
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-gray-600">Continue your cybersecurity training journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Lessons Completed</p>
                <p className="text-3xl font-bold text-blue-600">{progress.completedLessons.length}</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-300" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Points Earned</p>
                <p className="text-3xl font-bold text-green-600">{progress.points}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-300" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Achievements</p>
                <p className="text-3xl font-bold text-purple-600">{progress.achievements.length}</p>
              </div>
              <Award className="w-8 h-8 text-purple-300" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Current Streak</p>
                <p className="text-3xl font-bold text-orange-600">{progress.streak}</p>
              </div>
              <Trophy className="w-8 h-8 text-orange-300" />
            </div>
          </Card>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Overall Progress</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-900">Completion Rate</span>
            <span className="text-gray-600">{Math.round(completionPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-600 to-teal-600 h-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {progress.completedLessons.length} of {totalLessons} lessons completed
          </p>
        </Card>

        {/* Modules Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => {
              const completed = progress.completedLessons.filter(
                lesson => lesson.startsWith(`${module.id}-`)
              ).length;
              const completionPercentage = (completed / module.lessons.length) * 100;
              const firstLesson = module.lessons[0];

              return (
                <Card key={module.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-3xl mb-2">{module.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{module.lessons.length} lessons</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{Math.round(completionPercentage)}%</div>
                      <p className="text-xs text-gray-600">Complete</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-4">
                    <div
                      className="bg-blue-600 h-full transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {completed} of {module.lessons.length} lessons completed
                  </p>
                  <Button
                    onClick={() => setLocation(`/lesson/${module.id}/${firstLesson.id}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {completed > 0 ? 'Continue Learning' : 'Start Learning'}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((achievement) => {
              const earned = progress.achievements.includes(achievement.id);
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg text-center transition-all ${
                    earned
                      ? 'bg-yellow-50 border-2 border-yellow-300'
                      : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <p className="font-semibold text-gray-900 text-sm">{achievement.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </main>
    </div>
  );
}

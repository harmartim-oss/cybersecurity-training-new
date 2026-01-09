import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

interface Progress {
  completedLessons: string[];
  completedQuizzes: number[];
  achievements: string[];
  points: number;
  streak: number;
  lastActivity: string | null;
}

const MODULES = [
  {
    id: 1,
    title: "Ontario's Privacy Landscape",
    icon: "🛡️",
    lessons: 8
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals",
    icon: "🔒",
    lessons: 12
  },
  {
    id: 3,
    title: "AI & Data Governance",
    icon: "🧠",
    lessons: 6
  },
  {
    id: 4,
    title: "Data Management Excellence",
    icon: "📊",
    lessons: 8
  }
];

export default function ProfilePage() {
  const { user, logout, updateProfile } = useAuth();
  const [, setLocation] = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    organization: user?.organization || ''
  });
  const [progress] = useState<Progress>(() => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    setLocation('/auth');
  };

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons, 0);
  const completionPercentage = totalLessons > 0 ? (progress.completedLessons.length / totalLessons) * 100 : 0;

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
            <Button variant="outline" onClick={() => setLocation('/dashboard')}>
              Back to Dashboard
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h2>
                <p className="text-gray-600">Manage your account and track your progress</p>
              </div>
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleSaveProfile}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Full Name</p>
                  <p className="text-lg font-semibold text-gray-900">{user?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email Address</p>
                  <p className="text-lg font-semibold text-gray-900">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Organization</p>
                  <p className="text-lg font-semibold text-gray-900">{user?.organization}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Member Since</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Progress Summary */}
        <Card className="mb-8">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{progress.completedLessons.length}</div>
                <p className="text-gray-600">Lessons Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{progress.points}</div>
                <p className="text-gray-600">Points Earned</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{progress.achievements.length}</div>
                <p className="text-gray-600">Achievements</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{progress.streak}</div>
                <p className="text-gray-600">Current Streak</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Overall Completion</span>
                <span className="text-gray-600">{Math.round(completionPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-blue-600 h-full transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {progress.completedLessons.length} of {totalLessons} lessons completed
              </p>
            </div>
          </div>
        </Card>

        {/* Module Progress */}
        <Card className="mb-8">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Module Progress</h3>
            <div className="space-y-6">
              {MODULES.map((module) => {
                const completed = progress.completedLessons.filter(
                  lesson => lesson.startsWith(`${module.id}-`)
                ).length;
                const percentage = (completed / module.lessons) * 100;

                return (
                  <div key={module.id}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{module.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900">{module.title}</p>
                          <p className="text-sm text-gray-600">{completed} of {module.lessons} lessons</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{Math.round(percentage)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Account Settings */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Email Address</p>
                  <p className="text-sm text-gray-600">Your login email</p>
                </div>
                <p className="text-gray-900">{user?.email}</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Password</p>
                  <p className="text-sm text-gray-600">Change your password</p>
                </div>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Data Export</p>
                  <p className="text-sm text-gray-600">Download your learning data</p>
                </div>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <p className="font-semibold text-red-900">Delete Account</p>
                  <p className="text-sm text-red-700">Permanently delete your account and data</p>
                </div>
                <Button variant="destructive" disabled>
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

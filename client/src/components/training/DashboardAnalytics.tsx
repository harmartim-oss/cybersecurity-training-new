import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import {
  TrendingUp,
  Award,
  Clock,
  Target,
  Zap,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Activity,
  BarChart3,
  PieChart as PieChartIcon,
  Flame
} from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================
export interface StudentProgress {
  completedLessons: string[];
  completedQuizzes: string[];
  achievements: string[];
  points: number;
  streak: number;
  lastActivity: string | null;
}

export interface AnalyticsData {
  totalLessons: number;
  completedLessons: number;
  totalQuizzes: number;
  completedQuizzes: number;
  averageScore: number;
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  totalTimeSpent: number; // in minutes
  lastActivityDate: string | null;
}

// ============================================================================
// PROGRESS OVERVIEW CARD
// ============================================================================
interface ProgressOverviewProps {
  progress: StudentProgress;
  totalLessons: number;
  totalQuizzes: number;
}

export const ProgressOverview: React.FC<ProgressOverviewProps> = ({
  progress,
  totalLessons,
  totalQuizzes
}) => {
  const lessonCompletion = Math.round((progress.completedLessons.length / totalLessons) * 100);
  const quizCompletion = Math.round((progress.completedQuizzes.length / totalQuizzes) * 100);
  const overallCompletion = Math.round(
    ((progress.completedLessons.length + progress.completedQuizzes.length) /
      (totalLessons + totalQuizzes)) *
      100
  );

  return (
    <Card className="mb-6 border-2 border-blue-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Your Learning Progress</h2>
        <p className="text-blue-100">Track your journey through the certification program</p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Overall Progress */}
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-3">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="8"
                strokeDasharray={`${(overallCompletion / 100) * 251.2} 251.2`}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{overallCompletion}%</p>
                <p className="text-xs text-gray-600">Overall</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">Program Completion</p>
        </div>

        {/* Lessons Progress */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Lessons</p>
              <p className="text-2xl font-bold text-gray-900">
                {progress.completedLessons.length}/{totalLessons}
              </p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${lessonCompletion}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-1">{lessonCompletion}% Complete</p>
        </div>

        {/* Quizzes Progress */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Target className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Quizzes</p>
              <p className="text-2xl font-bold text-gray-900">
                {progress.completedQuizzes.length}/{totalQuizzes}
              </p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${quizCompletion}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-1">{quizCompletion}% Complete</p>
        </div>

        {/* Points & Streak */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-lg border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <p className="text-xs font-semibold text-amber-900">Points</p>
            </div>
            <p className="text-2xl font-bold text-amber-700">{progress.points}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-red-600" />
              <p className="text-xs font-semibold text-red-900">Streak</p>
            </div>
            <p className="text-2xl font-bold text-red-700">{progress.streak}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// ANALYTICS CHARTS
// ============================================================================
interface AnalyticsChartsProps {
  analytics: AnalyticsData;
  modulePerformance: { module: string; score: number }[];
}

export const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({
  analytics,
  modulePerformance
}) => {
  // Prepare data for charts
  const completionData = [
    {
      name: 'Lessons',
      completed: analytics.completedLessons,
      remaining: analytics.totalLessons - analytics.completedLessons
    },
    {
      name: 'Quizzes',
      completed: analytics.completedQuizzes,
      remaining: analytics.totalQuizzes - analytics.completedQuizzes
    }
  ];

  const performanceData = [
    { name: 'Completed', value: analytics.completedLessons + analytics.completedQuizzes },
    { name: 'Remaining', value: (analytics.totalLessons + analytics.totalQuizzes) - (analytics.completedLessons + analytics.completedQuizzes) }
  ];

  const COLORS = ['#3b82f6', '#e5e7eb'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Completion Chart */}
      <Card className="border-2 border-blue-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 border-b-2 border-blue-200">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900">Completion Status</h3>
          </div>
        </div>
        <div className="p-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={completionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="completed" fill="#3b82f6" name="Completed" radius={[8, 8, 0, 0]} />
              <Bar dataKey="remaining" fill="#d1d5db" name="Remaining" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Performance Pie Chart */}
      <Card className="border-2 border-teal-200 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 border-b-2 border-teal-200">
          <div className="flex items-center gap-2">
            <PieChartIcon className="w-5 h-5 text-teal-600" />
            <h3 className="font-bold text-gray-900">Overall Progress</h3>
          </div>
        </div>
        <div className="p-4">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Module Performance */}
      <Card className="border-2 border-purple-200 overflow-hidden lg:col-span-2">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 border-b-2 border-purple-200">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-gray-900">Module Performance</h3>
          </div>
        </div>
        <div className="p-4">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={modulePerformance}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="module" stroke="#6b7280" />
              <PolarRadiusAxis stroke="#6b7280" />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

// ============================================================================
// STATISTICS CARDS
// ============================================================================
interface StatisticsCardsProps {
  analytics: AnalyticsData;
}

export const StatisticsCards: React.FC<StatisticsCardsProps> = ({ analytics }) => {
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const stats = [
    {
      icon: BookOpen,
      label: 'Total Lessons',
      value: analytics.totalLessons,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Target,
      label: 'Quizzes Completed',
      value: analytics.completedQuizzes,
      color: 'teal',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      icon: Award,
      label: 'Average Score',
      value: `${analytics.averageScore}%`,
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      icon: Clock,
      label: 'Time Invested',
      value: formatTime(analytics.totalTimeSpent),
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Flame,
      label: 'Current Streak',
      value: `${analytics.currentStreak} days`,
      color: 'red',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Zap,
      label: 'Total Points',
      value: analytics.totalPoints,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        const colorClasses: { [key: string]: string } = {
          blue: 'text-blue-600',
          teal: 'text-teal-600',
          amber: 'text-amber-600',
          purple: 'text-purple-600',
          red: 'text-red-600',
          yellow: 'text-yellow-600'
        };

        return (
          <Card key={idx} className={`border-2 ${stat.borderColor} ${stat.bgColor} overflow-hidden`}>
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 bg-white rounded-lg border-2 ${stat.borderColor}`}>
                  <Icon className={`w-6 h-6 ${colorClasses[stat.color]}`} />
                </div>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

// ============================================================================
// RECENT ACTIVITY
// ============================================================================
interface ActivityItem {
  id: string;
  type: 'lesson' | 'quiz' | 'achievement';
  title: string;
  description: string;
  timestamp: string;
  icon: React.ReactNode;
  color: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <Card className="border-2 border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b-2 border-gray-200">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-gray-600" />
          <h3 className="font-bold text-gray-900">Recent Activity</h3>
        </div>
      </div>

      <div className="p-4">
        {activities.length === 0 ? (
          <div className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600">No recent activity yet. Start learning!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                <div className={`p-3 rounded-lg ${activity.color} flex-shrink-0`}>
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default {
  ProgressOverview,
  AnalyticsCharts,
  StatisticsCards,
  RecentActivity
};

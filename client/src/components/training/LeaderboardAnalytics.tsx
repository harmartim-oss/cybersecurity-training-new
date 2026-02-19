import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, TrendingUp, Users, Zap, BarChart3, Calendar } from 'lucide-react';

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  badgesEarned: number;
  modulesCompleted: number;
  completionPercentage: number;
  lastActive: string;
}

export interface AnalyticsData {
  totalLearners: number;
  averageScore: number;
  averageTimeSpent: number;
  completionRate: number;
  topBadges: Array<{ name: string; count: number; icon: string }>;
  moduleStats: Array<{ name: string; completionRate: number; avgScore: number }>;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  userRank?: number;
}

interface AnalyticsDashboardProps {
  data: AnalyticsData;
  userStats?: {
    points: number;
    badgesEarned: number;
    timeSpent: number;
    rank: number;
  };
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ entries, userRank }) => {
  const [filterBy, setFilterBy] = useState<'points' | 'badges' | 'modules'>('points');

  const sortedEntries = [...entries].sort((a, b) => {
    switch (filterBy) {
      case 'badges':
        return b.badgesEarned - a.badgesEarned;
      case 'modules':
        return b.modulesCompleted - a.modulesCompleted;
      default:
        return b.points - a.points;
    }
  });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Leaderboard</h2>
        </div>
        <p className="text-gray-600">See how you rank against other learners</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <Button
          onClick={() => setFilterBy('points')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            filterBy === 'points'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          By Points
        </Button>
        <Button
          onClick={() => setFilterBy('badges')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            filterBy === 'badges'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          By Badges
        </Button>
        <Button
          onClick={() => setFilterBy('modules')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            filterBy === 'modules'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          By Modules
        </Button>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-3 px-4 font-bold text-gray-900">Rank</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900">Learner</th>
              <th className="text-center py-3 px-4 font-bold text-gray-900">Points</th>
              <th className="text-center py-3 px-4 font-bold text-gray-900">Badges</th>
              <th className="text-center py-3 px-4 font-bold text-gray-900">Modules</th>
              <th className="text-center py-3 px-4 font-bold text-gray-900">Progress</th>
            </tr>
          </thead>
          <tbody>
            {sortedEntries.map((entry, index) => (
              <tr
                key={entry.rank}
                className={`border-b border-gray-200 transition-all ${
                  entry.rank === userRank
                    ? 'bg-blue-50 font-semibold'
                    : index < 3
                    ? 'hover:bg-gray-50'
                    : 'hover:bg-gray-50'
                }`}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {index === 0 && <span className="text-2xl">🥇</span>}
                    {index === 1 && <span className="text-2xl">🥈</span>}
                    {index === 2 && <span className="text-2xl">🥉</span>}
                    {index > 2 && (
                      <span className="text-gray-600 font-bold">#{entry.rank}</span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <p className="font-semibold text-gray-900">{entry.name}</p>
                    <p className="text-xs text-gray-600">
                      Last active: {new Date(entry.lastActive).toLocaleDateString()}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full inline-block font-bold">
                    {entry.points}
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full inline-block font-bold">
                    {entry.badgesEarned}
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full inline-block font-bold">
                    {entry.modulesCompleted}/4
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mx-auto overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-full"
                      style={{ width: `${entry.completionPercentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{Math.round(entry.completionPercentage)}%</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ data, userStats }) => {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Platform Analytics</h2>
        </div>
        <p className="text-gray-600">Overview of learning platform statistics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Learners</p>
              <p className="text-3xl font-bold text-blue-600">{data.totalLearners}</p>
            </div>
            <Users className="w-8 h-8 text-blue-300" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Score</p>
              <p className="text-3xl font-bold text-green-600">{data.averageScore.toFixed(1)}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-300" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Completion Rate</p>
              <p className="text-3xl font-bold text-purple-600">{data.completionRate.toFixed(1)}%</p>
            </div>
            <Zap className="w-8 h-8 text-purple-300" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Time</p>
              <p className="text-3xl font-bold text-orange-600">{data.averageTimeSpent.toFixed(1)}h</p>
            </div>
            <Calendar className="w-8 h-8 text-orange-300" />
          </div>
        </Card>
      </div>

      {/* User Stats */}
      {userStats && (
        <Card className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Your Rank</p>
              <p className="text-3xl font-bold text-indigo-600">#{userStats.rank}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Your Points</p>
              <p className="text-3xl font-bold text-blue-600">{userStats.points}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Badges Earned</p>
              <p className="text-3xl font-bold text-purple-600">{userStats.badgesEarned}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Time Invested</p>
              <p className="text-3xl font-bold text-green-600">{userStats.timeSpent}h</p>
            </div>
          </div>
        </Card>
      )}

      {/* Module Statistics */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Module Performance</h3>
        <div className="space-y-4">
          {data.moduleStats.map((module, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-900">{module.name}</p>
                <div className="flex gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-600">Completion</p>
                    <p className="font-bold text-blue-600">{module.completionRate.toFixed(1)}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">Avg Score</p>
                    <p className="font-bold text-green-600">{module.avgScore.toFixed(1)}%</p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 to-teal-600 h-full"
                  style={{ width: `${module.completionRate}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Badges */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Most Earned Badges</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.topBadges.map((badge, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-lg text-center border-2 border-yellow-200">
              <p className="text-3xl mb-2">{badge.icon}</p>
              <p className="font-semibold text-gray-900 text-sm mb-1">{badge.name}</p>
              <p className="text-2xl font-bold text-yellow-600">{badge.count}</p>
              <p className="text-xs text-gray-600">earned</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

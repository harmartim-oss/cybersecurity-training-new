import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Award, 
  Zap, 
  Trophy, 
  Star, 
  Flame, 
  Target,
  BookOpen,
  Brain,
  Lock,
  Unlock
} from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  unlockedAt?: string;
  progress?: number;
  requirement: string;
}

interface ProgressTracker {
  label: string;
  current: number;
  total: number;
  color: string;
}

export function AchievementBadgeComponent({ badge, isUnlocked }: { badge: Badge; isUnlocked: boolean }) {
  return (
    <div className={`relative group transition-all duration-300 ${isUnlocked ? 'scale-100 opacity-100' : 'scale-95 opacity-60'}`}>
      <Card className={`p-4 text-center border-2 ${
        isUnlocked 
          ? `${badge.color} shadow-lg hover:shadow-xl` 
          : 'border-gray-300 bg-gray-50'
      } transition-all duration-300 hover:scale-105`}>
        <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl transition-all duration-300 ${
          isUnlocked 
            ? `${badge.color} shadow-lg` 
            : 'bg-gray-200 text-gray-400'
        }`}>
          {badge.icon}
        </div>
        <h4 className="font-bold text-gray-900 text-sm mb-1">{badge.name}</h4>
        <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
        {!isUnlocked && (
          <p className="text-xs text-gray-500 italic">{badge.requirement}</p>
        )}
        {isUnlocked && badge.unlockedAt && (
          <p className="text-xs text-gray-500">Unlocked on {new Date(badge.unlockedAt).toLocaleDateString()}</p>
        )}
      </Card>
      
      {!isUnlocked && badge.progress !== undefined && (
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border-2 border-gray-300">
          <div className="text-xs font-bold text-gray-700">{badge.progress}%</div>
        </div>
      )}
    </div>
  );
}

export function AchievementGalleryComponent({ badges, unlockedBadgeIds }: { badges: Badge[]; unlockedBadgeIds: string[] }) {
  const unlockedCount = unlockedBadgeIds.length;
  const totalCount = badges.length;
  const completionPercentage = (unlockedCount / totalCount) * 100;

  return (
    <Card className="mb-8 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Trophy className="w-7 h-7 text-amber-600" />
              Achievements
            </h2>
            <span className="text-sm font-bold text-amber-600">{unlockedCount}/{totalCount}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-500 to-yellow-500 h-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">{Math.round(completionPercentage)}% Complete</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map(badge => (
            <AchievementBadgeComponent 
              key={badge.id}
              badge={badge}
              isUnlocked={unlockedBadgeIds.includes(badge.id)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ProgressTrackerComponent({ trackers }: { trackers: ProgressTracker[] }) {
  return (
    <Card className="mb-6 border-2 border-blue-200 bg-blue-50">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          Learning Progress
        </h3>
        <div className="space-y-6">
          {trackers.map((tracker, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-900">{tracker.label}</p>
                <span className="text-sm font-bold text-gray-600">{tracker.current}/{tracker.total}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`${tracker.color} h-full transition-all duration-500 rounded-full`}
                  style={{ width: `${(tracker.current / tracker.total) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-1">{Math.round((tracker.current / tracker.total) * 100)}% Complete</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function StreakTrackerComponent({ currentStreak, bestStreak, lastActivityDate }: { currentStreak: number; bestStreak: number; lastActivityDate?: string }) {
  const isOnFire = currentStreak >= 5;

  return (
    <Card className="mb-6 border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Flame className={`w-6 h-6 ${isOnFire ? 'text-red-600 animate-pulse' : 'text-gray-400'}`} />
          Learning Streak
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border-2 border-red-200">
            <p className="text-sm text-gray-600 mb-1">Current Streak</p>
            <p className="text-4xl font-bold text-red-600">{currentStreak}</p>
            <p className="text-xs text-gray-500 mt-1">days in a row</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
            <p className="text-sm text-gray-600 mb-1">Best Streak</p>
            <p className="text-4xl font-bold text-orange-600">{bestStreak}</p>
            <p className="text-xs text-gray-500 mt-1">personal record</p>
          </div>
        </div>

        {isOnFire && (
          <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-600 rounded">
            <p className="text-sm font-bold text-red-900">🔥 You're on fire! Keep up the great work!</p>
          </div>
        )}

        {lastActivityDate && (
          <p className="text-xs text-gray-500 mt-4">Last activity: {new Date(lastActivityDate).toLocaleDateString()}</p>
        )}
      </div>
    </Card>
  );
}

export function LevelProgressComponent({ level, currentXP, nextLevelXP, totalXP }: { level: number; currentXP: number; nextLevelXP: number; totalXP: number }) {
  const xpToNextLevel = nextLevelXP - currentXP;
  const progressToNextLevel = (currentXP / nextLevelXP) * 100;
  const totalProgress = (totalXP / (nextLevelXP * 5)) * 100; // Assuming 5 levels total

  return (
    <Card className="mb-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Star className="w-6 h-6 text-purple-600" />
            Level {level}
          </h3>
          <span className="text-sm font-bold text-purple-600">{totalXP} Total XP</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Progress to Level {level + 1}</p>
            <span className="text-sm font-bold text-gray-600">{currentXP}/{nextLevelXP}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressToNextLevel}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">{xpToNextLevel} XP to next level</p>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map(lvl => (
            <div 
              key={lvl}
              className={`p-2 rounded-lg text-center transition-all ${
                lvl <= level 
                  ? 'bg-purple-500 text-white font-bold' 
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              <p className="text-sm">{lvl}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function MilestoneComponent({ milestones, completedMilestones }: { milestones: Array<{ id: string; name: string; description: string; icon: React.ReactNode }>; completedMilestones: string[] }) {
  return (
    <Card className="mb-6 border-2 border-teal-200 bg-teal-50">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-teal-600" />
          Milestones
        </h3>
        <div className="space-y-3">
          {milestones.map((milestone, idx) => {
            const isCompleted = completedMilestones.includes(milestone.id);
            return (
              <div 
                key={milestone.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isCompleted
                    ? 'bg-white border-teal-300 shadow-md'
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg text-xl ${
                    isCompleted ? 'bg-teal-100' : 'bg-gray-200'
                  }`}>
                    {milestone.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{milestone.name}</p>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                  {isCompleted && (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

import { CheckCircle2 } from 'lucide-react';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Zap, Shield, Brain, Award, Lock, Unlock } from 'lucide-react';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  unlocked: boolean;
  unlockedDate?: string;
  requirement: string;
  points: number;
}

interface BadgeSystemProps {
  badges: Badge[];
  onBadgeClick?: (badge: Badge) => void;
}

export const BadgeCard: React.FC<{ badge: Badge; onClick?: () => void }> = ({ badge, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer ${
        badge.unlocked
          ? `${badge.color} border-opacity-100 shadow-lg hover:shadow-xl transform hover:scale-105`
          : 'bg-gray-100 border-gray-300 border-opacity-50 opacity-60'
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`text-4xl mb-2 ${badge.unlocked ? '' : 'opacity-40'}`}>
          {badge.icon}
        </div>
        {!badge.unlocked && (
          <Lock className="absolute top-2 right-2 w-4 h-4 text-gray-400" />
        )}
        {badge.unlocked && (
          <Unlock className="absolute top-2 right-2 w-4 h-4 text-green-600" />
        )}
        <h3 className="font-bold text-sm mb-1">{badge.name}</h3>
        <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
        <div className="flex items-center gap-1 text-xs font-semibold">
          <Star className="w-3 h-3" />
          <span>{badge.points} pts</span>
        </div>
      </div>
    </div>
  );
};

export const BadgeCollection: React.FC<BadgeSystemProps> = ({ badges, onBadgeClick }) => {
  const unlockedCount = badges.filter(b => b.unlocked).length;
  const totalCount = badges.length;

  return (
    <div className="w-full">
      {/* Header Stats */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Achievement Badges</h2>
            <p className="text-gray-600">Unlock badges by completing modules and achieving high scores</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Badges Earned</p>
            <p className="text-3xl font-bold text-blue-600">
              {unlockedCount}/{totalCount}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-500"
            style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {badges.map(badge => (
          <BadgeCard
            key={badge.id}
            badge={badge}
            onClick={() => onBadgeClick?.(badge)}
          />
        ))}
      </div>
    </div>
  );
};

export const BadgeModal: React.FC<{
  badge: Badge | null;
  onClose: () => void;
}> = ({ badge, onClose }) => {
  if (!badge) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full p-8 bg-white">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4 flex justify-center">{badge.icon}</div>
          {badge.unlocked && (
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
              ✓ Unlocked
            </div>
          )}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{badge.name}</h2>
          <p className="text-gray-600 mb-4">{badge.description}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Requirement:</span>
          </p>
          <p className="text-gray-800">{badge.requirement}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600 mb-1">Points</p>
            <p className="text-2xl font-bold text-blue-600">{badge.points}</p>
          </div>
          <div className="bg-purple-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600 mb-1">Status</p>
            <p className="text-lg font-bold text-purple-600">
              {badge.unlocked ? '🔓 Active' : '🔒 Locked'}
            </p>
          </div>
        </div>

        {badge.unlocked && badge.unlockedDate && (
          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded mb-6">
            <p className="text-sm text-green-800">
              <span className="font-semibold">Unlocked:</span> {new Date(badge.unlockedDate).toLocaleDateString()}
            </p>
          </div>
        )}

        <Button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg font-semibold"
        >
          Close
        </Button>
      </Card>
    </div>
  );
};

export const BadgeNotification: React.FC<{
  badge: Badge;
  visible: boolean;
  onClose: () => void;
}> = ({ badge, visible, onClose }) => {
  React.useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce">
      <Card className="p-4 bg-gradient-to-r from-yellow-400 to-orange-400 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{badge.icon}</div>
          <div>
            <p className="font-bold text-gray-900">Badge Unlocked! 🎉</p>
            <p className="text-sm text-gray-800">{badge.name}</p>
            <p className="text-xs text-gray-700 mt-1">+{badge.points} points</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

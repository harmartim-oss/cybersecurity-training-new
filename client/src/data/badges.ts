import { Badge } from '@/components/training/BadgeSystem';

export const BADGES: Badge[] = [
  // Module Completion Badges
  {
    id: 'privacy_master',
    name: 'Privacy Guardian',
    description: 'Complete Ontario Privacy Laws module',
    icon: '🛡️',
    color: 'bg-blue-100',
    unlocked: false,
    requirement: 'Complete Module 1: Ontario Privacy Laws with 70%+ score',
    points: 100,
  },
  {
    id: 'security_champion',
    name: 'Security Champion',
    description: 'Complete Cybersecurity Fundamentals module',
    icon: '🔐',
    color: 'bg-red-100',
    unlocked: false,
    requirement: 'Complete Module 2: Cybersecurity Fundamentals with 70%+ score',
    points: 100,
  },
  {
    id: 'ai_ethics_expert',
    name: 'AI Ethics Expert',
    description: 'Complete AI Governance & Ethics module',
    icon: '🤖',
    color: 'bg-purple-100',
    unlocked: false,
    requirement: 'Complete Module 3: AI Governance & Ethics with 70%+ score',
    points: 100,
  },
  {
    id: 'data_steward',
    name: 'Data Steward',
    description: 'Complete Data Management Excellence module',
    icon: '📊',
    color: 'bg-green-100',
    unlocked: false,
    requirement: 'Complete Module 4: Data Management Excellence with 70%+ score',
    points: 100,
  },

  // High Score Badges
  {
    id: 'perfect_scorer',
    name: 'Perfect Scorer',
    description: 'Score 100% on any module quiz',
    icon: '⭐',
    color: 'bg-yellow-100',
    unlocked: false,
    requirement: 'Achieve a perfect 100% score on any module assessment',
    points: 150,
  },
  {
    id: 'excellence_achiever',
    name: 'Excellence Achiever',
    description: 'Score 90%+ on all module quizzes',
    icon: '🏆',
    color: 'bg-amber-100',
    unlocked: false,
    requirement: 'Achieve 90% or higher on all 4 module assessments',
    points: 200,
  },

  // Completion Badges
  {
    id: 'course_master',
    name: 'Course Master',
    description: 'Complete all 4 modules',
    icon: '👑',
    color: 'bg-indigo-100',
    unlocked: false,
    requirement: 'Successfully complete all 4 modules with passing scores',
    points: 250,
  },
  {
    id: 'certified_professional',
    name: 'Certified Professional',
    description: 'Earn your certification',
    icon: '📜',
    color: 'bg-emerald-100',
    unlocked: false,
    requirement: 'Complete all modules and pass final assessment with 75%+',
    points: 300,
  },

  // Engagement Badges
  {
    id: 'quick_learner',
    name: 'Quick Learner',
    description: 'Complete a module in under 2 hours',
    icon: '⚡',
    color: 'bg-cyan-100',
    unlocked: false,
    requirement: 'Complete any module in less than 2 hours',
    points: 75,
  },
  {
    id: 'dedicated_learner',
    name: 'Dedicated Learner',
    description: 'Spend 10+ hours on the platform',
    icon: '📚',
    color: 'bg-pink-100',
    unlocked: false,
    requirement: 'Accumulate 10 or more hours of learning time',
    points: 125,
  },
  {
    id: 'consistency_champion',
    name: 'Consistency Champion',
    description: 'Learn 5 days in a row',
    icon: '🔥',
    color: 'bg-orange-100',
    unlocked: false,
    requirement: 'Access the platform on 5 consecutive days',
    points: 100,
  },

  // Knowledge Badges
  {
    id: 'privacy_law_expert',
    name: 'Privacy Law Expert',
    description: 'Score 85%+ on Privacy Laws quiz',
    icon: '⚖️',
    color: 'bg-slate-100',
    unlocked: false,
    requirement: 'Score 85% or higher on Module 1 assessment',
    points: 75,
  },
  {
    id: 'threat_analyst',
    name: 'Threat Analyst',
    description: 'Score 85%+ on Cybersecurity quiz',
    icon: '🎯',
    color: 'bg-red-100',
    unlocked: false,
    requirement: 'Score 85% or higher on Module 2 assessment',
    points: 75,
  },
];

export interface AchievementProgress {
  badges: Badge[];
  totalPoints: number;
  unlockedCount: number;
  lastUnlockedDate?: string;
}

export interface UserAchievements {
  userId: string;
  achievements: AchievementProgress;
  moduleScores: Record<number, number>;
  totalTimeSpent: number;
  consecutiveDays: number;
  lastActivityDate?: string;
}

export const checkBadgeUnlocks = (
  userId: string,
  moduleId: number,
  score: number,
  currentBadges: Badge[],
  moduleScores: Record<number, number>,
  totalTimeSpent: number,
  consecutiveDays: number
): { newBadges: Badge[]; unlockedBadges: Badge[] } => {
  const newBadges = [...currentBadges];
  const unlockedBadges: Badge[] = [];

  // Module completion badges
  if (score >= 70) {
    const moduleBadgeIds = {
      1: 'privacy_master',
      2: 'security_champion',
      3: 'ai_ethics_expert',
      4: 'data_steward',
    };

    const badgeId = moduleBadgeIds[moduleId as keyof typeof moduleBadgeIds];
    if (badgeId) {
      const badge = newBadges.find(b => b.id === badgeId);
      if (badge && !badge.unlocked) {
        badge.unlocked = true;
        badge.unlockedDate = new Date().toISOString();
        unlockedBadges.push(badge);
      }
    }
  }

  // Perfect scorer badge
  if (score === 100) {
    const badge = newBadges.find(b => b.id === 'perfect_scorer');
    if (badge && !badge.unlocked) {
      badge.unlocked = true;
      badge.unlockedDate = new Date().toISOString();
      unlockedBadges.push(badge);
    }
  }

  // High score badges for specific modules
  if (score >= 85) {
    const highScoreBadgeIds = {
      1: 'privacy_law_expert',
      2: 'threat_analyst',
    };

    const badgeId = highScoreBadgeIds[moduleId as keyof typeof highScoreBadgeIds];
    if (badgeId) {
      const badge = newBadges.find(b => b.id === badgeId);
      if (badge && !badge.unlocked) {
        badge.unlocked = true;
        badge.unlockedDate = new Date().toISOString();
        unlockedBadges.push(badge);
      }
    }
  }

  // Excellence achiever badge (90%+ on all modules)
  const allModulesScored = Object.keys(moduleScores).length === 4;
  if (allModulesScored && Object.values(moduleScores).every(s => s >= 90)) {
    const badge = newBadges.find(b => b.id === 'excellence_achiever');
    if (badge && !badge.unlocked) {
      badge.unlocked = true;
      badge.unlockedDate = new Date().toISOString();
      unlockedBadges.push(badge);
    }
  }

  // Course master badge (all modules completed)
  if (allModulesScored && Object.values(moduleScores).every(s => s >= 70)) {
    const badge = newBadges.find(b => b.id === 'course_master');
    if (badge && !badge.unlocked) {
      badge.unlocked = true;
      badge.unlockedDate = new Date().toISOString();
      unlockedBadges.push(badge);
    }
  }

  // Consistency champion badge (5+ consecutive days)
  if (consecutiveDays >= 5) {
    const badge = newBadges.find(b => b.id === 'consistency_champion');
    if (badge && !badge.unlocked) {
      badge.unlocked = true;
      badge.unlockedDate = new Date().toISOString();
      unlockedBadges.push(badge);
    }
  }

  // Dedicated learner badge (10+ hours)
  if (totalTimeSpent >= 10) {
    const badge = newBadges.find(b => b.id === 'dedicated_learner');
    if (badge && !badge.unlocked) {
      badge.unlocked = true;
      badge.unlockedDate = new Date().toISOString();
      unlockedBadges.push(badge);
    }
  }

  return { newBadges, unlockedBadges };
};

export const calculateTotalPoints = (badges: Badge[]): number => {
  return badges.reduce((total, badge) => (badge.unlocked ? total + badge.points : total), 0);
};

export const getAchievementLevel = (points: number): string => {
  if (points >= 2000) return 'Legendary';
  if (points >= 1500) return 'Master';
  if (points >= 1000) return 'Expert';
  if (points >= 500) return 'Advanced';
  if (points >= 250) return 'Intermediate';
  if (points >= 100) return 'Beginner';
  return 'Novice';
};

export const getNextMilestone = (points: number): { level: string; pointsNeeded: number } => {
  const milestones = [100, 250, 500, 1000, 1500, 2000];
  const nextMilestone = milestones.find(m => m > points);
  
  if (!nextMilestone) {
    return { level: 'Legendary', pointsNeeded: 0 };
  }

  return {
    level: getAchievementLevel(nextMilestone),
    pointsNeeded: nextMilestone - points,
  };
};

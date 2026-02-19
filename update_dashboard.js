const fs = require('fs');
const filePath = './client/src/pages/Dashboard.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Add imports
const importLine = "import { Award, BookOpen, Trophy, TrendingUp } from 'lucide-react';";
if (!content.includes('BadgeCollection')) {
  const insertPoint = content.indexOf(importLine) + importLine.length;
  const newImports = `\nimport { BadgeCollection, BadgeModal } from '@/components/training/BadgeSystem';
import { BADGES, checkBadgeUnlocks, calculateTotalPoints, getAchievementLevel, getNextMilestone } from '@/data/badges';
import type { Badge } from '@/components/training/BadgeSystem';`;
  content = content.substring(0, insertPoint) + newImports + content.substring(insertPoint);
}

// Update Progress interface
content = content.replace(
  `interface Progress {
  completedLessons: string[];
  completedQuizzes: number[];
  achievements: string[];
  points: number;
  streak: number;
  lastActivity: string | null;
}`,
  `interface Progress {
  completedLessons: string[];
  completedQuizzes: number[];
  achievements: string[];
  points: number;
  streak: number;
  lastActivity: string | null;
  badges: Badge[];
  moduleScores: Record<number, number>;
  totalTimeSpent: number;
  consecutiveDays: number;
}`
);

// Update useState
content = content.replace(
  `const [progress, setProgress] = useState<Progress>({
    completedLessons: [],
    completedQuizzes: [],
    achievements: [],
    points: 0,
    streak: 0,
    lastActivity: null
  });`,
  `const [progress, setProgress] = useState<Progress>({
    completedLessons: [],
    completedQuizzes: [],
    achievements: [],
    points: 0,
    streak: 0,
    lastActivity: null,
    badges: BADGES,
    moduleScores: {},
    totalTimeSpent: 0,
    consecutiveDays: 0
  });
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);`
);

// Update useEffect
content = content.replace(
  `useEffect(() => {
    const saved = localStorage.getItem('ocs_progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);`,
  `useEffect(() => {
    const saved = localStorage.getItem('ocs_progress');
    if (saved) {
      const savedProgress = JSON.parse(saved);
      setProgress({
        ...savedProgress,
        badges: savedProgress.badges || BADGES,
        moduleScores: savedProgress.moduleScores || {},
        totalTimeSpent: savedProgress.totalTimeSpent || 0,
        consecutiveDays: savedProgress.consecutiveDays || 0
      });
    }
  }, []);`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated Dashboard imports and state');

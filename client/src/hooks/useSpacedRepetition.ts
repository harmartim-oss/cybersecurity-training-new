import { useState, useEffect } from 'react';

/**
 * Spaced Repetition Hook
 * Implements the SM-2 algorithm for optimal learning intervals
 */

export interface ReviewItem {
  id: string;
  lessonId: number;
  lastReviewDate: Date;
  nextReviewDate: Date;
  easeFactor: number;
  interval: number;
  repetitions: number;
  quality: number;
}

export interface SpacedRepetitionStats {
  dueForReview: ReviewItem[];
  learningItems: ReviewItem[];
  masteredItems: ReviewItem[];
  totalItems: number;
  reviewProgress: number;
}

const SM2_INITIAL_EASINESS = 2.5;
const SM2_INITIAL_INTERVAL = 1;

const calculateNextReview = (
  quality: number,
  previousEaseFactor: number,
  previousInterval: number,
  previousRepetitions: number
) => {
  let easeFactor = previousEaseFactor;
  let interval = previousInterval;
  let repetitions = previousRepetitions;

  easeFactor = Math.max(
    1.3,
    previousEaseFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  );

  if (quality < 3) {
    interval = SM2_INITIAL_INTERVAL;
    repetitions = 0;
  } else {
    repetitions += 1;
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 3;
    } else {
      interval = Math.round(previousInterval * easeFactor);
    }
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);

  return { nextDate, easeFactor, interval, repetitions };
};

export const useSpacedRepetition = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [stats, setStats] = useState<SpacedRepetitionStats>({
    dueForReview: [],
    learningItems: [],
    masteredItems: [],
    totalItems: 0,
    reviewProgress: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem('spacedRepetitionReviews');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setReviews(parsed.map((item: any) => ({
          ...item,
          lastReviewDate: new Date(item.lastReviewDate),
          nextReviewDate: new Date(item.nextReviewDate),
        })));
      } catch (error) {
        console.error('Error loading spaced repetition data:', error);
      }
    }
  }, []);

  useEffect(() => {
    const now = new Date();
    const dueForReview = reviews.filter(item => item.nextReviewDate <= now);
    const learningItems = reviews.filter(
      item => item.nextReviewDate > now && item.repetitions < 5
    );
    const masteredItems = reviews.filter(item => item.repetitions >= 5);

    const reviewProgress = reviews.length > 0
      ? Math.round((masteredItems.length / reviews.length) * 100)
      : 0;

    setStats({
      dueForReview,
      learningItems,
      masteredItems,
      totalItems: reviews.length,
      reviewProgress,
    });

    localStorage.setItem('spacedRepetitionReviews', JSON.stringify(reviews));
  }, [reviews]);

  const addLesson = (lessonId: number) => {
    const id = `lesson-${lessonId}`;
    if (!reviews.find(item => item.id === id)) {
      const newItem: ReviewItem = {
        id,
        lessonId,
        lastReviewDate: new Date(),
        nextReviewDate: new Date(),
        easeFactor: SM2_INITIAL_EASINESS,
        interval: SM2_INITIAL_INTERVAL,
        repetitions: 0,
        quality: 0,
      };
      setReviews([...reviews, newItem]);
    }
  };

  const recordReview = (lessonId: number, quality: number) => {
    const id = `lesson-${lessonId}`;
    setReviews(reviews.map(item => {
      if (item.id === id) {
        const { nextDate, easeFactor, interval, repetitions } = calculateNextReview(
          quality,
          item.easeFactor,
          item.interval,
          item.repetitions
        );
        return {
          ...item,
          lastReviewDate: new Date(),
          nextReviewDate: nextDate,
          easeFactor,
          interval,
          repetitions,
          quality,
        };
      }
      return item;
    }));
  };

  const getLessonsDueForReview = () => {
    return stats.dueForReview.map(item => item.lessonId);
  };

  const getProgress = (lessonId: number) => {
    const item = reviews.find(r => r.lessonId === lessonId);
    if (!item) return 0;
    return Math.min(100, (item.repetitions / 5) * 100);
  };

  return {
    reviews,
    stats,
    addLesson,
    recordReview,
    getLessonsDueForReview,
    getProgress,
  };
};

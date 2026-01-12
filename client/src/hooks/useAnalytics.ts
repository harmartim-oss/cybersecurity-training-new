import { useEffect } from 'react';
import { useLocation } from 'wouter';
import {
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackSectionView,
  trackScrollDepth,
} from '@/lib/analytics';

/**
 * Custom hook for analytics tracking
 * Automatically tracks page views and provides event tracking utilities
 */
export const useAnalytics = (pageName: string, pageTitle?: string) => {
  const [location] = useLocation();

  // Track page view on mount and location change
  useEffect(() => {
    trackPageView(location, pageTitle || pageName);
  }, [location, pageName, pageTitle]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Track at 25%, 50%, 75%, and 100%
      if (scrollPercentage >= 25 && scrollPercentage < 50) {
        trackScrollDepth(25);
      } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
        trackScrollDepth(50);
      } else if (scrollPercentage >= 75 && scrollPercentage < 100) {
        trackScrollDepth(75);
      } else if (scrollPercentage >= 100) {
        trackScrollDepth(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    trackEvent,
    trackButtonClick,
    trackSectionView,
  };
};

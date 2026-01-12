/**
 * Google Analytics Integration for Ontario CyberSafe Platform
 * 
 * This module provides utilities for tracking user behavior, events, and conversions
 * using Google Analytics 4 (GA4).
 * 
 * Setup Instructions:
 * 1. Create a Google Analytics 4 property at https://analytics.google.com
 * 2. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 3. Set the VITE_GA_MEASUREMENT_ID environment variable
 * 4. The analytics script will load automatically on page load
 */

// Initialize Google Analytics
export const initializeAnalytics = (measurementId: string) => {
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID not configured');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
    page_title: document.title,
  });

  // Store gtag globally
  (window as any).gtag = gtag;
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventData?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData || {});
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};

// Track CTA conversions
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 0,
  });
};

// Track sign-up
export const trackSignUp = (signUpMethod: string) => {
  trackEvent('sign_up', {
    method: signUpMethod,
  });
};

// Track login
export const trackLogin = (loginMethod: string) => {
  trackEvent('login', {
    method: loginMethod,
  });
};

// Track lesson completion
export const trackLessonCompletion = (
  moduleId: string,
  lessonId: string,
  lessonTitle: string
) => {
  trackEvent('lesson_completed', {
    module_id: moduleId,
    lesson_id: lessonId,
    lesson_title: lessonTitle,
  });
};

// Track quiz completion
export const trackQuizCompletion = (
  moduleId: string,
  score: number,
  passed: boolean
) => {
  trackEvent('quiz_completed', {
    module_id: moduleId,
    score: score,
    passed: passed,
  });
};

// Track certificate generation
export const trackCertificateGenerated = (
  certificateId: string,
  moduleName: string
) => {
  trackEvent('certificate_generated', {
    certificate_id: certificateId,
    module_name: moduleName,
  });
};

// Track engagement metrics
export const trackEngagement = (
  engagementType: string,
  duration?: number
) => {
  trackEvent('engagement', {
    engagement_type: engagementType,
    duration_seconds: duration || 0,
  });
};

// Track scroll depth
export const trackScrollDepth = (scrollPercentage: number) => {
  trackEvent('scroll_depth', {
    scroll_percentage: scrollPercentage,
  });
};

// Track form submission
export const trackFormSubmission = (formName: string, formStatus: string) => {
  trackEvent('form_submission', {
    form_name: formName,
    form_status: formStatus,
  });
};

// Track error
export const trackError = (errorType: string, errorMessage: string) => {
  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage,
  });
};

// Set user properties
export const setUserProperties = (userId: string, userProperties: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', {
      user_id: userId,
      ...userProperties,
    });
  }
};

// Track user tier
export const trackUserTier = (tier: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'user_tier', {
      tier: tier,
    });
  }
};

// Track pricing page interaction
export const trackPricingInteraction = (pricingTier: string, action: string) => {
  trackEvent('pricing_interaction', {
    pricing_tier: pricingTier,
    action: action,
  });
};

// Track feature view
export const trackFeatureView = (featureName: string) => {
  trackEvent('feature_view', {
    feature_name: featureName,
  });
};

// Declare gtag type for window
declare global {
  interface Window {
    dataLayer: any[];
    gtag: any;
  }
}

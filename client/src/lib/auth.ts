/**
 * Authentication Utilities
 * Handles session management, token storage, and security
 */

export interface SessionData {
  userId: string;
  email: string;
  name: string;
  organization: string;
  loginTime: string;
  expiresAt: string;
}

const SESSION_KEY = 'ocs_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Create a new session
 */
export const createSession = (userId: string, email: string, name: string, organization: string): SessionData => {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_DURATION);

  const session: SessionData = {
    userId,
    email,
    name,
    organization,
    loginTime: now.toISOString(),
    expiresAt: expiresAt.toISOString()
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
};

/**
 * Get current session
 */
export const getSession = (): SessionData | null => {
  try {
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (!sessionData) return null;

    const session: SessionData = JSON.parse(sessionData);
    
    // Check if session has expired
    if (new Date(session.expiresAt) < new Date()) {
      clearSession();
      return null;
    }

    return session;
  } catch (error) {
    console.error('Error retrieving session:', error);
    clearSession();
    return null;
  }
};

/**
 * Refresh session expiration
 */
export const refreshSession = (): SessionData | null => {
  const session = getSession();
  if (!session) return null;

  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_DURATION);

  const refreshedSession: SessionData = {
    ...session,
    expiresAt: expiresAt.toISOString()
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(refreshedSession));
  return refreshedSession;
};

/**
 * Clear session
 */
export const clearSession = (): void => {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem('ocs_current_user');
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return getSession() !== null;
};

/**
 * Get session duration remaining in minutes
 */
export const getSessionDurationRemaining = (): number => {
  const session = getSession();
  if (!session) return 0;

  const now = new Date();
  const expiresAt = new Date(session.expiresAt);
  const remaining = expiresAt.getTime() - now.getTime();

  return Math.max(0, Math.floor(remaining / 1000 / 60));
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 */
export const validatePasswordStrength = (password: string): {
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) {
    score++;
  } else {
    feedback.push('At least 8 characters');
  }

  if (/[A-Z]/.test(password)) {
    score++;
  } else {
    feedback.push('At least one uppercase letter');
  }

  if (/[a-z]/.test(password)) {
    score++;
  } else {
    feedback.push('At least one lowercase letter');
  }

  if (/[0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('At least one number');
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('At least one special character (optional)');
  }

  return { score, feedback };
};

/**
 * Generate a unique user ID
 */
export const generateUserId = (): string => {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Sanitize user input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 255);
};

/**
 * Get user's local timezone
 */
export const getUserTimezone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return 'Invalid date';
  }
};

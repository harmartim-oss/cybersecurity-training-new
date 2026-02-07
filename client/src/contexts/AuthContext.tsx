import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  organization: string;
  createdAt: string;
  updatedAt: string;
}

interface StoredUser {
  id: string;
  name: string;
  email: string;
  organization: string;
  passwordHash: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signup: (name: string, email: string, organization: string, password: string) => Promise<void>;
  signin: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  isAuthenticated: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

/**
 * Simple password hashing function for client-side storage
 * In production, use bcrypt on the backend
 */
const hashPassword = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return `hash_${Math.abs(hash)}_${password.length}`;
};

/**
 * Verify password against hash
 */
const verifyPassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};

/**
 * Validate email format
 */
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 */
const validatePassword = (password: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize user from localStorage on mount
  useEffect(() => {
    try {
      const currentUserEmail = localStorage.getItem('ocs_current_user');
      if (currentUserEmail) {
        const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
        const userData = users[currentUserEmail] as StoredUser | undefined;
        if (userData) {
          setUser({
            id: userData.id,
            name: userData.name,
            email: currentUserEmail,
            organization: userData.organization,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
          });
        }
      }
    } catch (err) {
      console.error('Error loading user from localStorage:', err);
      localStorage.removeItem('ocs_current_user');
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = async (
    name: string,
    email: string,
    organization: string,
    password: string
  ): Promise<void> => {
    setError(null);

    // Validation
    if (!name.trim()) {
      throw new Error('Full name is required');
    }
    if (!email.trim()) {
      throw new Error('Email is required');
    }
    if (!isValidEmail(email)) {
      throw new Error('Please enter a valid email address');
    }
    if (!organization.trim()) {
      throw new Error('Organization is required');
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      throw new Error(passwordValidation.errors[0]);
    }

    try {
      const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');

      if (users[email]) {
        throw new Error('An account with this email already exists. Please sign in instead.');
      }

      const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const now = new Date().toISOString();
      const passwordHash = hashPassword(password);

      const newUser: StoredUser = {
        id: userId,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        organization: organization.trim(),
        passwordHash,
        createdAt: now,
        updatedAt: now
      };

      users[email.toLowerCase().trim()] = newUser;
      localStorage.setItem('ocs_users', JSON.stringify(users));
      localStorage.setItem('ocs_current_user', email.toLowerCase().trim());

      setUser({
        id: userId,
        name: newUser.name,
        email: newUser.email,
        organization: newUser.organization,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create account';
      setError(errorMessage);
      throw err;
    }
  };

  const signin = async (email: string, password: string): Promise<void> => {
    setError(null);

    // Validation
    if (!email.trim()) {
      throw new Error('Email is required');
    }
    if (!isValidEmail(email)) {
      throw new Error('Please enter a valid email address');
    }
    if (!password) {
      throw new Error('Password is required');
    }

    try {
      const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
      const normalizedEmail = email.toLowerCase().trim();
      const userData = users[normalizedEmail] as StoredUser | undefined;

      if (!userData) {
        throw new Error('No account found with this email. Please sign up to create an account.');
      }

      if (!verifyPassword(password, userData.passwordHash)) {
        throw new Error('Incorrect password. Please try again.');
      }

      localStorage.setItem('ocs_current_user', normalizedEmail);
      setUser({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        organization: userData.organization,
        createdAt: userData.createdAt,
        updatedAt: userData.updatedAt
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign in';
      setError(errorMessage);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('ocs_current_user');
    setUser(null);
    setError(null);
  };

  const updateProfile = async (updates: Partial<User>): Promise<void> => {
    if (!user) {
      throw new Error('No user is currently logged in');
    }

    setError(null);

    try {
      const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
      const userData = users[user.email] as StoredUser | undefined;

      if (!userData) {
        throw new Error('User data not found');
      }

      const updatedUser: StoredUser = {
        ...userData,
        name: updates.name || userData.name,
        organization: updates.organization || userData.organization,
        updatedAt: new Date().toISOString()
      };

      users[user.email] = updatedUser;
      localStorage.setItem('ocs_users', JSON.stringify(users));

      setUser({
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        organization: updatedUser.organization,
        createdAt: updatedUser.createdAt,
        updatedAt: updatedUser.updatedAt
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update profile';
      setError(errorMessage);
      throw err;
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    signup,
    signin,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    error,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export interface User {
  name: string;
  email: string;
  organization: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signup: (name: string, email: string, organization: string, password: string) => void;
  signin: (email: string, password: string) => void;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize user from localStorage on mount
  useEffect(() => {
    const currentUserEmail = localStorage.getItem('ocs_current_user');
    if (currentUserEmail) {
      const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
      const userData = users[currentUserEmail];
      if (userData) {
        setUser({
          name: userData.name,
          email: currentUserEmail,
          organization: userData.organization,
          createdAt: userData.createdAt,
          updatedAt: userData.updatedAt
        });
      }
    }
    setLoading(false);
  }, []);

  const signup = (name: string, email: string, organization: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
    
    if (users[email]) {
      throw new Error('An account with this email already exists');
    }

    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }

    const newUser = {
      name,
      email,
      organization,
      password, // In production, this would be hashed
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    users[email] = newUser;
    localStorage.setItem('ocs_users', JSON.stringify(users));
    localStorage.setItem('ocs_current_user', email);
    
    setUser({
      name,
      email,
      organization,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt
    });
  };

  const signin = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
    const userData = users[email];

    if (!userData) {
      throw new Error('No account found with this email');
    }

    if (userData.password !== password) {
      throw new Error('Incorrect password');
    }

    localStorage.setItem('ocs_current_user', email);
    setUser({
      name: userData.name,
      email,
      organization: userData.organization,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt
    });
  };

  const logout = () => {
    localStorage.removeItem('ocs_current_user');
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!user) return;

    const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
    const updatedUser = {
      ...users[user.email],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    users[user.email] = updatedUser;
    localStorage.setItem('ocs_users', JSON.stringify(users));
    
    setUser({
      ...user,
      ...updates,
      updatedAt: updatedUser.updatedAt
    });
  };

  const value: AuthContextType = {
    user,
    loading,
    signup,
    signin,
    logout,
    updateProfile,
    isAuthenticated: !!user
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

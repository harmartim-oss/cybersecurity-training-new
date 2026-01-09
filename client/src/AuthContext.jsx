import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize user from localStorage on mount
  useEffect(() => {
    const currentUserEmail = localStorage.getItem('ocs_current_user');
    if (currentUserEmail) {
      const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
      const userData = users[currentUserEmail];
      if (userData) {
        setUser({
          ...userData,
          email: currentUserEmail
        });
      }
    }
    setLoading(false);
  }, []);

  const signup = (name, email, organization, password) => {
    const users = JSON.parse(localStorage.getItem('ocs_users') || '{}');
    
    if (users[email]) {
      throw new Error('An account with this email already exists');
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
    
    setUser(newUser);
    return newUser;
  };

  const signin = (email, password) => {
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
      ...userData,
      email
    });
    return userData;
  };

  const logout = () => {
    localStorage.removeItem('ocs_current_user');
    setUser(null);
  };

  const updateProfile = (updates) => {
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
      ...updatedUser,
      email: user.email
    });
    return updatedUser;
  };

  const value = {
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

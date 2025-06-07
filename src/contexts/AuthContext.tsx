import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: 'student' | 'teacher') => Promise<void>;
  signup: (name: string, email: string, password: string, role: 'student' | 'teacher') => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  // Mock login function (would connect to a real API in production)
  const login = async (email: string, password: string, role: 'student' | 'teacher') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, we'll just check if the email contains "@" and password length
    if (!email.includes('@') || password.length < 6) {
      throw new Error('Invalid credentials');
    }
    
    // Create a mock user
    const mockUser: User = {
      id: Math.random().toString(36).substring(2, 15),
      name: email.split('@')[0],
      email,
      role,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  // Mock signup function
  const signup = async (name: string, email: string, password: string, role: 'student' | 'teacher') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Validate inputs
    if (!name || !email.includes('@') || password.length < 6) {
      throw new Error('Invalid signup data');
    }
    
    // Create a mock user
    const mockUser: User = {
      id: Math.random().toString(36).substring(2, 15),
      name,
      email,
      role,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
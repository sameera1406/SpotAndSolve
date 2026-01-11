import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (user: User) => void;
  logout: () => void;
  setRole: (role: 'user' | 'admin') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    role: null,
  });

  const login = (user: User) => {
    setAuthState({
      isAuthenticated: true,
      user,
      role: user.role,
    });
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      role: null,
    });
  };

  const setRole = (role: 'user' | 'admin') => {
    setAuthState(prev => ({
      ...prev,
      role,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
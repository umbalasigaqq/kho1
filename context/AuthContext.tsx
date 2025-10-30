import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  name: string;
  initial: string;
}

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    // In a real app, this would involve a call to a Google Sign-In API.
    // Here, we'll just set a mock user.
    setUser({ name: 'User', initial: 'N' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

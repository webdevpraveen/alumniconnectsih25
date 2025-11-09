import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session with token validation
    const storedUser = localStorage.getItem('alumni-connect-user');
    const storedToken = localStorage.getItem('alumni-connect-token');
    const tokenExpiry = localStorage.getItem('alumni-connect-token-expiry');
    
    if (storedUser && storedToken && tokenExpiry) {
      const expiryDate = new Date(tokenExpiry);
      if (expiryDate > new Date()) {
        // Token is still valid
        setUser(JSON.parse(storedUser));
      } else {
        // Token expired, clear storage
        localStorage.removeItem('alumni-connect-user');
        localStorage.removeItem('alumni-connect-token');
        localStorage.removeItem('alumni-connect-token-expiry');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    
    // Simulate API call - replace with actual authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on role
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      role,
      isActive: true,
      createdAt: new Date(),
      lastLogin: new Date(),
    };

    // Generate mock JWT token
    const mockToken = `mock_jwt_${Math.random().toString(36).substr(2, 20)}`;
    const tokenExpiry = new Date();
    tokenExpiry.setHours(tokenExpiry.getHours() + 24); // Token expires in 24 hours

    setUser(mockUser);
    localStorage.setItem('alumni-connect-user', JSON.stringify(mockUser));
    localStorage.setItem('alumni-connect-token', mockToken);
    localStorage.setItem('alumni-connect-token-expiry', tokenExpiry.toISOString());
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('alumni-connect-user');
    localStorage.removeItem('alumni-connect-token');
    localStorage.removeItem('alumni-connect-token-expiry');
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
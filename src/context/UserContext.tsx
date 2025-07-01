import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../types';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;

  // Optional shortcut access
  telegramId?: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const contextValue: UserContextType = {
    user,
    setUser,
    telegramId: user?.telegramId, // convenience access
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to access the context
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

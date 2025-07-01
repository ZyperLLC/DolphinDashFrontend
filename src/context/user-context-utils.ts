import { createContext, useContext } from 'react';
import type { User } from '../types';

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  telegramId?: string;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

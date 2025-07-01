

import { useState, type ReactNode } from 'react';
import { UserContext, type UserContextType } from './user-context-utils';
import type { User } from '../types';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const contextValue: UserContextType = {
    user,
    setUser,
    telegramId: user?.telegramId,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

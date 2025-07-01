import { useState } from 'react';
import * as userApi from '../api/userApi';
import type { User } from '../types';

export function useRegisterUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (userData: Partial<User>) => {
    try {
      setLoading(true);
      setError(null);
      const data = await userApi.registerUser(userData); // must return User object
      setUser(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Registration failed');
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, user, loading, error };
}

export function useGetUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (telegramId: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await userApi.getUser(telegramId); // must return User object
      setUser(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to fetch user');
      }
    } finally {
      setLoading(false);
    }
  };

  return { fetchUser, user, loading, error };
}

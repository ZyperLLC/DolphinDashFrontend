import { useState } from 'react';
import { sendInvite } from '../api/userApi';
import { useUserContext } from '../context/user-context-utils';
import { toast } from 'react-toastify';

export const useInviteFriend = () => {
  const { telegramId } = useUserContext();
  const [loading, setLoading] = useState(false);

  const send = async (code: string) => {
    if (!telegramId) return toast.error('No user ID');
    try {
      setLoading(true);
      await sendInvite(telegramId, code);
      toast.success('Invite code saved!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to save invite');
    } finally {
      setLoading(false);
    }
  };

  return { send, loading };
};

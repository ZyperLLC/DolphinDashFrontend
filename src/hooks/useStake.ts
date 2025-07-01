import { useState } from 'react';
import { stakeNFT } from '../api/userApi';
import { useUserContext } from '../context/UserContext';
import { toast } from 'react-toastify';

export const useStakeNFT = () => {
  const { telegramId } = useUserContext();
  const [loading, setLoading] = useState(false);

  const stake = async (nftAddress: string) => {
    if (!telegramId) return toast.error('No user ID');
    try {
      setLoading(true);
      await stakeNFT(telegramId, nftAddress);
      toast.success('NFT successfully staked!');
    } catch (err) {
      console.error(err);
      toast.error('Error staking NFT');
    } finally {
      setLoading(false);
    }
  };

  return { stake, loading };
};

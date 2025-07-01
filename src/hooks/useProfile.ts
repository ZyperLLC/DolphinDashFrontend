
import { useEffect, useState } from 'react';
import { getGameHistory, getStakedNFTs, getUser } from '../api/userApi';
import { useUserContext } from '../context/user-context-utils';
import type { User, Bet, NFT } from '../types';

export const useProfile = () => {
  const { telegramId } = useUserContext(); // from updated context
  const [user, setUser] = useState<User | null>(null);
  const [bets, setBets] = useState<Bet[]>([]);
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!telegramId) return;

      try {
        const [userData, betsData, nftsData] = await Promise.all([
          getUser(telegramId),
          getGameHistory(telegramId),
          getStakedNFTs(telegramId),
        ]);

        setUser(userData);
        setBets(betsData);
        setNfts(nftsData);
      } catch (error) {
        console.error('Error loading profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [telegramId]);

  return { user, bets, nfts, loading };
};

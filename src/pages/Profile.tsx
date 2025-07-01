
import React from 'react';
import { useProfile } from '../hooks/useProfile';
import crownImg from '../assets/crown.jpg';
import dolphinImg from '../assets/dolphin.svg';
import type { Bet, NFT } from '../types';

const Profile: React.FC = () => {
  const { user, bets, nfts, loading } = useProfile();

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <img src={dolphinImg} alt="Dolphin Dash" style={styles.logo} />
      <h2 style={styles.title}>Step In The Game</h2>
      <p style={styles.subtitle}>
        Connect Your Wallet To Unlock Staking, Betting, And Daily Prizes.
      </p>

      <button style={styles.connectBtn}>
        {user?.walletAddress ? 'Wallet Connected' : 'Connect wallet'}
      </button>

      <section>
        <h3 style={styles.sectionTitle}>Staked NFT’s</h3>
        {nfts.length === 0 && <p>No NFTs staked.</p>}
        {nfts.map((nft: NFT, i: number) => (
          <div key={i} style={styles.card}>
            <img src={crownImg} alt="NFT" style={styles.cardImage} />
            <div>
              <h4>{nft.nftName}</h4>
              <p>Remaining time: {nft.remainingTime || 'N/A'}</p>
              <p>You’ll earn: {nft.earn || '2 TON'}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 style={styles.sectionTitle}>Game history</h3>
        {bets.length === 0 && <p>No games played yet.</p>}
        {bets.map((game: Bet, i: number) => (
          <div key={i} style={styles.card}>
            <img src={crownImg} alt="Bet" style={styles.cardImage} />
            <div>
              <h4>Bet #{game.betId}</h4>
              <p>Bet: {game.amountBet} TON</p>
              <p>Win: {game.amountWon} TON</p>
            </div>
            <span
              style={{
                ...styles.statusBadge,
                backgroundColor: game.hasWon ? '#4CAF50' : '#FF6B6B',
              }}
            >
              {game.hasWon ? 'Win' : 'Lose'}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 16,
    maxWidth: 480,
    margin: '0 auto',
    fontFamily: 'sans-serif',
    color: '#fff',
    backgroundColor: '#999',
    minHeight: '100vh',
  },
  loading: {
    padding: '20px',
    textAlign: 'center',
    fontSize: '18px',
  },
  logo: {
    width: 160,
    margin: '0 auto',
    display: 'block',
    marginBottom: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 16,
  },
  connectBtn: {
    display: 'block',
    margin: '0 auto 24px',
    padding: '10px 20px',
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
  },
  sectionTitle: {
    fontSize: 18,
    margin: '24px 0 12px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#888',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    position: 'relative',
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
  },
  statusBadge: {
    position: 'absolute',
    right: 12,
    top: 12,
    padding: '4px 12px',
    borderRadius: 8,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
};

export default Profile;

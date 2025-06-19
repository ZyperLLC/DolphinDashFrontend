// src/pages/Profile.tsx
import React from "react";
import crownImg from "../assets/crown.jpg"; // replace with your image path

const Profile: React.FC = () => {
  const stakedNFTs = [
    { name: "NFT NAME", time: "13d 3h 12m", earn: "2 TON" },
    { name: "NFT NAME", time: "7d 12h 34m", earn: "3.2 TON" },
  ];

  const gameHistory = [
    { day: "DAY 1", bet: "1 TON", win: "7 TON", result: "Win" },
    { day: "DAY 2", bet: "1 TON", win: "0 TON", result: "Lose" },
    { day: "DAY 3", bet: "4 TON", win: "28 TON", result: "Win" },
  ];

  return (
    <div style={styles.container}>
      <img src="/dolphin.svg" alt="Dolphin Dash" style={styles.logo} />

      <h2 style={styles.title}>Step In The Game</h2>
      <p style={styles.subtitle}>
        Connect Your Wallet To Unlock Staking, Betting, And Daily Prizes.
      </p>

      <button style={styles.connectBtn}>Connect wallet</button>

      <section>
        <h3 style={styles.sectionTitle}>Staked NFT’s</h3>
        {stakedNFTs.map((nft, i) => (
          <div key={i} style={styles.card}>
            <img src={crownImg} alt="NFT" style={styles.cardImage} />
            <div>
              <h4>NFT NAME</h4>
              <p>Remaining time: {nft.time}</p>
              <p>You’ll earn: {nft.earn}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 style={styles.sectionTitle}>Game history</h3>
        {gameHistory.map((game, i) => (
          <div key={i} style={styles.card}>
            <img src={crownImg} alt="NFT" style={styles.cardImage} />
            <div>
              <h4>{game.day}</h4>
              <p>Bet: {game.bet}</p>
              <p>Win: {game.win}</p>
            </div>
            <span
              style={{
                ...styles.statusBadge,
                backgroundColor:
                  game.result === "Win" ? "#4CAF50" : "#FF6B6B",
              }}
            >
              {game.result}
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
    margin: "0 auto",
    fontFamily: "sans-serif",
    color: "#fff",
    backgroundColor: "#999",
    minHeight: "100vh",
  },
  logo: {
    width: 160,
    margin: "0 auto",
    display: "block",
    marginBottom: 24,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 16,
  },
  connectBtn: {
    display: "block",
    margin: "0 auto 24px",
    padding: "10px 20px",
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
  },
  sectionTitle: {
    fontSize: 18,
    margin: "24px 0 12px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#888",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    position: "relative",
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
  },
  statusBadge: {
    position: "absolute",
    right: 12,
    top: 12,
    padding: "4px 12px",
    borderRadius: 8,
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
};

export default Profile;

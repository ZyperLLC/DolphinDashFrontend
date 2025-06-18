import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import topImage from "../assets/logodolphin.jpg";
import {
  Gamepad2,
  CreditCard,
  Smile,
  UserCircle2,
} from "lucide-react";

const Game: React.FC = () => {
  // State to track selected card index (only one selectable at a time)
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  // Simulates wallet connection
  const handleConnectWallet = () => {
    alert("Wallet connection flow triggered!");
  };

  // Handles NFT card selection
  const handleClick = (index: number) => {
    setSelected(index);
    alert(`You selected number ${index + 1}`);
  };

  // Styles defined inline using an object
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: 480,
      margin: "0 auto",
      padding: 16,
      fontFamily: "sans-serif",
      textAlign: "center",
    },
    banner: {
      width: "100%",
      marginBottom: 16,
    },
    walletButtonWrapper: {
      display: "flex",
      justifyContent: "center",
      margin: "12px 0",
    },
    walletButton: {
      background: "#007bff",
      color: "white",
      border: "none",
      padding: "10px 16px",
      borderRadius: 8,
      fontWeight: "bold",
      cursor: "pointer",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginTop: 16,
    },
    gridItem: {
      backgroundColor: "#f5f5f5",
      borderRadius: 12,
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: 18,
      cursor: "pointer",
      position: "relative",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      transition: "transform 0.2s ease",
    },
    selected: {
      backgroundColor: "#d1ecf1",
      border: "2px solid #17a2b8",
    },
    bottomNav: {
      display: "flex",
      justifyContent: "space-around",
      padding: "12px 0",
      borderTop: "1px solid #ccc",
      marginTop: 24,
    },
    navItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: 12,
      color: "#444",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Top Banner */}
      <img src={topImage} alt="Dolphin Dash" style={styles.banner} />

      {/* Heading */}
      <h2>Pick Your Fighter</h2>
      <p>
        Place TON Bets On One Or More NFTs. If Your Symbol Hits, You Win With A Multiplier!
      </p>

      {/* Wallet Connect Button */}
      <div style={styles.walletButtonWrapper}>
        <button style={styles.walletButton} onClick={handleConnectWallet}>
          Connect Wallet
        </button>
      </div>

      {/* Numbered NFT Grid (4x4 layout) */}
      <div style={styles.grid}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.gridItem,
              ...(selected === i ? styles.selected : {}),
            }}
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        <div
          style={{ ...styles.navItem }}
          onClick={() => navigate("/")}
        >
          <Gamepad2 size={20} />
          <span>Game</span>
        </div>
        <div style={styles.navItem} onClick={() => navigate("/stake")}>
          <CreditCard size={20} />
          <span>Stake</span>
        </div>
        <div style={styles.navItem} onClick={() => navigate("/friends")}>
          <Smile size={20} />
          <span>Friends</span>
        </div>
        <div
          style={styles.navItem}
          onClick={() => alert("Profile screen coming soon")}
        >
          <UserCircle2 size={20} />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Game;

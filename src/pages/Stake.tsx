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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Only one selected
  const [showPopup, setShowPopup] = useState(false); // Modal visibility
  const navigate = useNavigate();

  // Handle selecting one card at a time
  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    setShowPopup(true);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: 480,
      margin: "0 auto",
      padding: "16px 16px 80px",
      fontFamily: "sans-serif",
      textAlign: "center",
    },
    banner: {
      width: "100%",
      marginBottom: 16,
    },
    title: {
      marginTop: 12,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: "#666",
      marginBottom: 16,
    },
    nftCardContainer: {
      marginTop: 24,
    },
    nftTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12,
      marginTop: 12,
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
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "space-around",
      padding: "15px 0",
      borderTop: "1px solid #ccc",
      boxShadow: "0 -1px 6px rgba(0,0,0,0.1)",
    },
    navItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: 12,
      color: "#444",
      cursor: "pointer",
    },

    // Popup overlay
    popupOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    },

    // Popup box
    popupBox: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 24,
      width: "80%",
      maxWidth: 300,
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
    closeBtn: {
      marginTop: 20,
      padding: "8px 16px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* 🔵 Banner */}
      <img src={topImage} alt="Dolphin Dash" style={styles.banner} />

      {/* 🔹 Title and subtitle */}
      <h2 style={styles.title}>Stake It</h2>
      <p style={styles.subtitle}>
        Pick your NFT, lock it in staking, and watch the rewards roll in — even while you're offline.
      </p>

      {/* 🟩 NFT Selection Grid */}
      <div style={styles.nftCardContainer}>
        <h3 style={styles.nftTitle}>Your NFT</h3>
        <div style={styles.grid}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.gridItem,
                ...(selectedIndex === i ? styles.selected : {}),
              }}
              onClick={() => handleCardClick(i)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* 🪟 Popup Modal */}
      {showPopup && (
        <div style={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div style={styles.popupBox} onClick={(e) => e.stopPropagation()}>
            <h3>You've selected NFT #{selectedIndex! + 1}</h3>
            <p>This NFT will be staked. Are you sure?</p>
            <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🔻 Bottom Navigation Bar */}
      <div style={styles.bottomNav}>
        <div style={styles.navItem} onClick={() => navigate("/")}>
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

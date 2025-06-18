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
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleCopy = () => {
    if (inputValue.trim() !== "") {
      navigator.clipboard.writeText(inputValue);
      alert("Text copied to clipboard!");
    } else {
      alert("Input is empty. Please write something first.");
    }
  };

  const leaderboard = [
    { username: "@usernameusernameus...", reward: "3 123" },
    { username: "@usernameusernameus...", reward: "1 532 345" },
    { username: "@usernameusernameus...", reward: "22 432" },
    { username: "@usernameusernameus...", reward: "234 153" },
    { username: "@usernameusernameus...", reward: "23 421" },
  ];

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: 500,
      margin: "0 auto",
      paddingBottom: "80px", // for bottom nav spacing
      fontFamily: "sans-serif",
    },
    banner: {
      display: "block",
      margin: "20px auto 10px auto",
      width: "100%",
      maxWidth: 400,
      borderRadius: 12,
    },
    inviteCard: {
      textAlign: "center",
      margin: "20px",
    },
    input: {
      padding: "10px",
      width: "80%",
      maxWidth: "400px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      marginBottom: "10px",
    },
    copyBtn: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
    leaderboardContainer: {
      background: "#f0f0f0",
      padding: "20px",
      borderRadius: "12px",
      margin: "20px",
      color: "#000",
    },
    leaderboardHeader: {
      fontSize: "1.5rem",
      marginBottom: "15px",
      color: "#000",
      fontWeight: "bold",
    },
    leaderboardRowHeader: {
      background: "#ccc",
      borderRadius: "10px",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "bold",
    },
    leaderboardRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      fontSize: "14px",
    },
    bottomNav: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "12px 0",
      borderTop: "1px solid #ccc",
      boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
    },
    navItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "12px",
      color: "#444",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* 🔵 Top Banner */}
      <img src={topImage} alt="Dolphin Dash" style={styles.banner} />

      {/* 🟣 Invite a Friend */}
      <div style={styles.inviteCard}>
        <h2>Invite A Friend</h2>
        <h4 style={{ marginTop: "10px", fontWeight: "normal" }}>
          Connect Your Wallet to unlock Staking, Betting and Daily Prizes.
        </h4>

        <div style={{ marginTop: "15px" }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={styles.input}
            placeholder="Enter invite message"
          />
          <br />
          <button style={styles.copyBtn} onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>

      {/* 🏆 Leaderboard */}
      <div style={styles.leaderboardContainer}>
        <h2 style={styles.leaderboardHeader}>🏆 Friends Leaderboard</h2>

        <div style={styles.leaderboardRowHeader}>
          <span>User name</span>
          <span>Reward</span>
        </div>

        {leaderboard.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.leaderboardRow,
              borderBottom:
                index !== leaderboard.length - 1 ? "1px solid #ccc" : "none",
            }}
          >
            <span>{item.username}</span>
            <span>{item.reward}</span>
          </div>
        ))}
      </div>

      {/* 🔻 Bottom Navigation */}
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

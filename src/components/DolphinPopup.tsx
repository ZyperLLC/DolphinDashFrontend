import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

interface Props {
  onClose: () => void;
}

const DolphinPopup: React.FC<Props> = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        {/* Close (X) Button */}
        <button onClick={onClose} style={closeButtonStyle} aria-label="Close popup">
          &times;
        </button>

        {/* Title */}
        <h2 style={titleStyle}>🐬 Welcome to Dolphin Dash!</h2>

        {/* Formatted, Centered Content */}
        <ul style={listStyle}>
          <li>🌊 Legends are chosen daily in Dolphin Dash.</li>
          <li>🪙 Stake your Dolphins, fuel the tide with TON.</li>
          <li>🏆 One dolphin rises. Will it be yours?</li>
          <li>🔗 Connect your wallet to begin your journey.</li>
        </ul>

        {/* TON Connect Wallet Button */}
        <div style={walletButtonContainer}>
          <TonConnectButton />
        </div>
      </div>
    </div>
  );
};

// Styles
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const popupStyle: React.CSSProperties = {
  position: "relative",
  backgroundColor: "#fff",
  padding: "32px 24px",
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  maxWidth: "480px",
  width: "90%",
  lineHeight: "1.8",
  fontSize: "1rem",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "12px",
  right: "16px",
  background: "transparent",
  border: "none",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#333",
  cursor: "pointer",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.6rem",
  marginBottom: "20px",
};

const listStyle: React.CSSProperties = {
  listStyleType: "none",
  padding: 0,
  margin: "0 0 24px 0",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
};

const walletButtonContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default DolphinPopup;

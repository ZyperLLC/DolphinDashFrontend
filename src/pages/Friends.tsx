import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2, CreditCard, Smile, UserCircle2 } from "lucide-react";
import topImage from "../assets/logodolphin.jpg";
import { useInviteFriend } from "../hooks/useInvite";
import { useUserContext } from "../context/user-context-utils";
import { generateInviteLink, copyToClipboard, validateInviteCode } from "../utils/helpers";
import { toast } from "react-toastify";

const Invite: React.FC = () => {
  const navigate = useNavigate();
  const { telegramId } = useUserContext();
  const { send, loading } = useInviteFriend();
  const [inviteCode, setInviteCode] = useState("");

  const handleCopyLink = async () => {
  if (!telegramId) return toast.error("Connect wallet first");
  try {
    const link = generateInviteLink(telegramId);
    await copyToClipboard(link);
    toast.success("Invite link copied!");
  } catch {
    toast.error("Failed to copy link.");
  }
};


const handleSendCode = async () => {
  const validCode = validateInviteCode(inviteCode);
  if (!validCode) return toast.error("Enter a code first");
  await send(validCode);
  setInviteCode("");
};


  return (
    <div style={styles.container}>
      <img src={topImage} alt="Invite" style={styles.banner} />

      <h2>Invite A Friend</h2>
      <p style={styles.subtitle}>
        Use your invite link to earn rewards.
      </p>

      <div style={styles.inviteCard}>
        <button style={styles.copyBtn} onClick={handleCopyLink}>
          Copy Invite Link
        </button>
      </div>

      <div style={styles.inputSection}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter invite code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />
        <button
          style={styles.submitBtn}
          onClick={handleSendCode}
          disabled={loading}
        >
          {loading ? "Saving..." : "Submit Code"}
        </button>
      </div>

      <div style={styles.bottomNav}>
        <div onClick={() => navigate("/")}>
          <Gamepad2 size={20} /><span>Game</span>
        </div>
        <div onClick={() => navigate("/stake")}>
          <CreditCard size={20} /><span>Stake</span>
        </div>
        <div>
          <Smile size={20} /><span>Invite</span>
        </div>
        <div onClick={() => navigate("/profile")}>
          <UserCircle2 size={20} /><span>Profile</span>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: { padding: 16, maxWidth: 480, margin: "0 auto", textAlign: "center" },
  banner: { width: "100%", marginBottom: 16 },
  subtitle: { marginBottom: 24, color: "#555" },
  inviteCard: { marginBottom: 24 },
  copyBtn: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  inputSection: { display: "flex", justifyContent: "center", gap: 8, marginBottom: 40 },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  submitBtn: {
    padding: "10px 16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  bottomNav: {
    position: "fixed", bottom: 0, left: 0, right: 0,
    display: "flex", justifyContent: "space-around",
    padding: 12, backgroundColor: "#fff", borderTop: "1px solid #ccc"
  },
};

export default Invite;

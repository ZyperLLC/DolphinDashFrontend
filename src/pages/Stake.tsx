import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStakeNFT } from "../hooks/useStake";
import { useUserContext } from "../context/user-context-utils";
import { getStakedNFTs } from "../api/userApi";
import { toast } from "react-toastify";
import topImage from "../assets/logodolphin.jpg";
import { Gamepad2, CreditCard, Smile, UserCircle2 } from "lucide-react";

interface NFT {
  nftAddress: string;

}

const Stake: React.FC = () => {
  const navigate = useNavigate();
  const { stake, loading: stakeLoading } = useStakeNFT();
  const { telegramId } = useUserContext();
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  // Fetch available NFTs to stake
  useEffect(() => {
    if (!telegramId) return;
    (async () => {
      try {
        const data = await getStakedNFTs(telegramId);
        setNFTs(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load NFTs");
      }
    })();
  }, [telegramId]);

  const confirmStake = async () => {
    if (selected === null) return;
    const addr = nfts[selected].nftAddress;
    await stake(addr);
    setShowConfirm(false);
  };

  return (
    <div style={styles.container}>
      <img src={topImage} alt="banner" style={styles.banner} />
      <h2>Stake Your NFTs</h2>
      <p>Select an NFT to begin staking</p>

      {nfts.length === 0 ? (
        <p>No NFTs available to stake.</p>
      ) : (
        <div style={styles.grid}>
          {nfts.map((_nft, idx) => (
            <div
              key={idx}
              style={{
                ...styles.gridItem,
                ...(selected === idx ? styles.selected : {})
              }}
              onClick={() => {
                setSelected(idx);
                setShowConfirm(true);
              }}
            >
              #{idx + 1}
            </div>
          ))}
        </div>
      )}

      {showConfirm && selected !== null && (
        <div style={styles.popupOverlay} onClick={() => setShowConfirm(false)}>
          <div style={styles.popupBox} onClick={e => e.stopPropagation()}>
            <h3>Stake NFT #{selected + 1}?</h3>
            <button onClick={confirmStake} disabled={stakeLoading}>Yes</button>
            <button onClick={() => setShowConfirm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div style={styles.bottomNav}>
        <div onClick={() => navigate("/")}>
          <Gamepad2 size={20} />
          <span>Game</span>
        </div>
        <div>
          <CreditCard size={20} />
          <span>Stake</span>
        </div>
        <div onClick={() => navigate("/invite")}>
          <Smile size={20} />
          <span>Invite</span>
        </div>
        <div onClick={() => navigate("/profile")}>
          <UserCircle2 size={20} />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: { padding: 16, maxWidth: 480, margin: "0 auto", textAlign: "center" },
  banner: { width: "100%", marginBottom: 16 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 },
  gridItem: { padding: 16, backgroundColor: "#eee", borderRadius: 8, cursor: "pointer" },
  selected: { border: "2px solid #007bff" },
  popupOverlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
  },
  popupBox: {
    backgroundColor: "#fff", padding: 24, borderRadius: 8,
    display: "flex", flexDirection: "column", gap: 16
  },
  bottomNav: {
    position: "fixed", bottom: 0, left: 0, right: 0,
    display: "flex", justifyContent: "space-around", padding: 12,
    backgroundColor: "#fff", borderTop: "1px solid #ccc"
  }
};

export default Stake;

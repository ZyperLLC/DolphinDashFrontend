import { X } from 'lucide-react';
import popupImage from '../assets/popupbg.jpg';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useEffect } from 'react';

export default function WelcomePopup({ onClose }: { onClose: () => void }) {
  const [tonConnectUI] = useTonConnectUI();

  const handleConnectWallet = () => {
    tonConnectUI.openModal();

    // Wait a bit and move the modal to the end of the body
    setTimeout(() => {
      const modal = document.getElementById('ton-connect-modal');
      if (modal) {
        document.body.appendChild(modal); // move to end of <body>
        modal.style.zIndex = '99999';
        modal.style.position = 'fixed';
      }
    }, 50);
  };

  useEffect(() => {
    const modal = document.getElementById('ton-connect-modal');
    if (modal) {
      modal.style.zIndex = '99999';
      modal.style.position = 'fixed';
    }
  }, []);

  return (
    <div
      className="welcome-popup-image-bg"
      style={{ backgroundImage: `url(${popupImage})`, zIndex: 9990 }} // slightly reduced
    >
      <button className="close-btn" onClick={onClose}>
        <X size={22} />
      </button>
      <div className="popup-content">
        <h2>Welcome to Dolphin Dash!</h2>
        <ul>
          <li>🟣 In the world of Dolphin Dash, legends are chosen daily.</li>
          <li>🟣 Stake your dolphins, fuel the tide with TON, and test your luck in the arena.</li>
          <li>🟣 Connect your wallet. Your journey begins.</li>
        </ul>
        <button className="connect-wallet-btn" onClick={handleConnectWallet}>
          Connect wallet
        </button>
      </div>
    </div>
  );
}
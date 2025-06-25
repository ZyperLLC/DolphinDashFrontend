
import Navbar from './components/Navbar';
import { useTonConnectUI } from '@tonconnect/ui-react';

import background1 from './assets/background1.jpg';
import dolphin1 from './assets/dolphins/dolphin1.jpg';
import dolphin2 from './assets/dolphins/dolphin2.jpg';
import dolphin3 from './assets/dolphins/dolphin3.jpg';

import LogoDisplay from './components/LogoDisplay';
import ConnectWalletCard from './components/ConnectWalletCard';
import StakedNFTCard from './components/StakedNFTCard';
import GameHistoryCard from './components/GameHistoryCard';
import SectionBox from './components/SectionBox';

import './index.css';

export default function Profile() {
  const [tonConnectUI] = useTonConnectUI();

  const handleConnectWallet = () => {
    tonConnectUI.openModal();
  };

  return (
    <div
      className="page profile-page"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '120vh',
      }}
    >
      <LogoDisplay />
      <ConnectWalletCard onConnect={handleConnectWallet} />

      <SectionBox title="Staked NFT's">
        <StakedNFTCard image={dolphin2} name="NFT NAME" time="13d 3h 12m" reward="2 TON" />
        <StakedNFTCard image={dolphin1} name="NFT NAME" time="7d 12h 34m" reward="3.2 TON" />
      </SectionBox>

      <SectionBox title="Game History">
        <GameHistoryCard image={dolphin1} day="DAY 1" cost="1 TON" prize="7 TON" result="win" />
        <GameHistoryCard image={dolphin2} day="DAY 2" cost="1 TON" prize="0 TON" result="lose" />
        <GameHistoryCard image={dolphin3} day="DAY 3" cost="4 TON" prize="28 TON" result="win" />
      </SectionBox>

      <Navbar />
    </div>
  );
}
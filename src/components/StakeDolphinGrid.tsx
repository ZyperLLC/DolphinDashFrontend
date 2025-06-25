import card1 from '../assets/dolphins/dolphin1.jpg';
import card2 from '../assets/dolphins/dolphin2.jpg';
import card3 from '../assets/dolphins/dolphin3.jpg';

export default function DolphinGrid() {
  const dolphinCards = [
    card1, card2, card3,
    card2, card3, card1,
    card3, card1, card2
  ];

  return (
    <div className="staking-grid-card w-full max-w-4xl mx-auto flex-grow mb-4">
      <h2 className="card-title font-semibold text-lg sm:text-xl mb-8">
        Available for Staking
      </h2>

      <div className="dolphin-grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {dolphinCards.map((card, index) => (
          <img
            key={index}
            src={card}
            alt={`Dolphin ${index + 1}`}
            className="dolphin"
            onClick={() => alert(`Dolphin ${index + 1} clicked!`)}
          />
        ))}
      </div>
    </div>
  );
}

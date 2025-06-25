export default function DolphinGrid({ dolphins }: { dolphins: string[] }) {
    return (
      <>
        <h2 className="dolphin-header">Choose Your Dolphin</h2>
        <div className="dolphin-grid">
          {dolphins.map((d, i) => (
            <img
              key={i}
              src={d}
              alt={`Dolphin ${i + 1}`}
              className="dolphin"
              onClick={() => alert(`Dolphin ${i + 1} clicked!`)}
            />
          ))}
        </div>
      </>
    )
  }
  
import { Outlet, useNavigate } from "react-router-dom";
import { Gamepad2, Coins, Smile, User } from "lucide-react";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Outlet />
      <footer className="bottom-nav">
        <button onClick={() => navigate("/")}>
          <Gamepad2 size={24} />
          <span>Game</span>
        </button>
        <button onClick={() => navigate("/stake")}>
          <Coins size={24} />
          <span>Stake</span>
        </button>
        <button onClick={() => navigate("/friends")}>
          <Smile size={24} />
          <span>Friends</span>
        </button>
        <button onClick={() => navigate("/profile")}>
          <User size={24} />
          <span>Profile</span>
        </button>
      </footer>
    </div>
  );
};

export default Layout;

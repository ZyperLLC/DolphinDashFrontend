import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Game from "./pages/Game";
import Stake from "./pages/Stake";
import Friends from "./pages/Friends"; // ✅ New import
import Profile from "./pages/Profile";
import DolphinPopup from "./components/DolphinPopup";
import SplashScreen from "./components/SplashScreen";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Router>
          {showPopup && <DolphinPopup onClose={() => setShowPopup(false)} />}
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/stake" element={<Stake />} />
            <Route path="/friends" element={<Friends />} /> 
            <Route path="/friends" element={<Profile />} /> 
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;

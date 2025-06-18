import React from "react";
import splashImage from "../assets/logodolphin.jpg";

const SplashScreen: React.FC = () => {
  return (
    <div style={styles.container}>
      <img src={splashImage} alt="Dolphin Dash" style={styles.logo} />
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#999",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    boxSizing: "border-box" as const,
  },
  logo: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    objectFit: "contain" as const,
  },
};

export default SplashScreen;

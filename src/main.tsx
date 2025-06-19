import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Import TonConnect UI provider
import { TonConnectUIProvider } from "@tonconnect/ui-react";

// Manifest URL for TON connection — replace with your actual hosted JSON file
const manifestUrl = "https://yourdomain.com/tonconnect-manifest.json"; // ✅ Replace with real URL

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
  </StrictMode>
);

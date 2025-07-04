import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./context/UserContext";

// Use local dev manifest served from public/
const manifestUrl = "http://localhost:5173/tonconnect-manifest.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <App />
        <ToastContainer position="top-center" />
      </TonConnectUIProvider>
    </UserProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./context/UserContext";


createRoot(document.getElementById("root")!).render(
  <TonConnectUIProvider manifestUrl='https://jade-imperial-hawk-534.mypinata.cloud/ipfs/bafybeigkixu527m6rtupe3yimytsedkhroqve4bucaru6rrvkzw3ptcle4/'>
    <UserProvider>
        <StrictMode>
          <App />
        </StrictMode>
        <ToastContainer position="top-center" />
    </UserProvider>
  </TonConnectUIProvider>,


);

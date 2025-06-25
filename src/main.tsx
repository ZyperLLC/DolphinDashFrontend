import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

import App from './App';
import Home from './Home';
import Stake from './Stake';
import Profile from './Profile';
import Friend from './Friend';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://demo.tonconnect.dev/tonconnect-manifest.json">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friend />} />
        </Routes>
      </BrowserRouter>
    </TonConnectUIProvider>
  </React.StrictMode>
);

// tonConnectUI.ts
import { TonConnectUI } from '@tonconnect/ui';

export const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://<your-domain>/tonconnect-manifest.json', // Replace with your manifest URL
  buttonRootId: 'ton-connect-button', // DOM element where button is rendered
});

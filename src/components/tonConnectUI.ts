// tonConnectUI.ts
import { TonConnectUI } from '@tonconnect/ui';

export const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://gateway.pinata.cloud/ipfs/bafkreiam4tqqodcvzmm6x73mfyoe2sveji3nk5d6vkixkt7gvd35xd7iai', // Replace with your manifest URL
  buttonRootId: 'ton-connect-button', // DOM element where button is rendered
});

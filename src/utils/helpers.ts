/**
 * Generates an invite link with the user's Telegram ID as a referral parameter.
 * @param telegramId - The user's Telegram ID.
 * @returns The full invite link.
 */
export const generateInviteLink = (telegramId: string): string => {
  if (!telegramId) {
    throw new Error("Telegram ID is required to generate invite link.");
  }
  return `${window.location.origin}/?ref=${telegramId}`;
};

/**
 * Copies the provided text to clipboard.
 * @param text - The text to be copied.
 * @returns A promise that resolves when the text is copied.
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text);
};

/**
 * Trims and validates an invite code.
 * @param code - The raw invite code.
 * @returns The trimmed code if valid, otherwise null.
 */
export const validateInviteCode = (code: string): string | null => {
  const trimmed = code.trim();
  return trimmed.length > 0 ? trimmed : null;
};

/**
 * Truncates a long wallet or NFT address.
 * @param address - The full address.
 * @param length - Number of characters to keep at start and end.
 * @returns Truncated address string.
 */
export const truncateAddress = (address: string, length = 6): string => {
  if (!address) return "";
  return address.length > length * 2
    ? `${address.slice(0, length)}...${address.slice(-length)}`
    : address;
};

/**
 * Formats a TON amount nicely for display.
 * @param amount - The TON amount.
 * @returns Formatted string like "3.2 TON" or "1.2k TON"
 */
export const formatTonAmount = (amount: number): string => {
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(1)}k TON`;
  }
  return `${amount} TON`;
};

/**
 * Returns a badge color for game result.
 * @param result - The game result (e.g. "Win" or "Lose").
 * @returns A hex color string.
 */
export const getBadgeColor = (result: string): string => {
  return result === "Win" ? "#4CAF50" : "#FF6B6B";
};

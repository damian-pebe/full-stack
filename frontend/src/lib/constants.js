export const COLORS = {
  background: "#18181b",
  cardBg: "#1a1a23",
  cardBorder: "#1a1a23",
  cardShadow: "0 2px 8px rgba(24,24,27,0.12)",
  cardShadowHover: "0 6px 24px rgba(24,24,27,0.18)",
  text: "#f4f4f5",
  textSecondary: "#a1a1aa",
  accent: "#6366f1",
  accentHover: "#818cf8",
  border: "#1a1a23",
  error: "#ef4444",
  inputBg: "#232336",
  inputBorder: "#1a1a23",
  inputText: "#f4f4f5",
  inputPlaceholder: "#71717a",
  skeleton: "#27273a",
  skeletonHighlight: "#1a1a23",
  paginationBg: "#232336",
  paginationActive: "#6366f1",
  paginationInactive: "#a1a1aa",
  paginationDisabled: "#1a1a23",
};

export const API_CONFIG = {
  BASE_URL: "http://localhost:3001",
  ENDPOINTS: {
    ITEMS: "/api/items",
    ITEM_BY_ID: (id) => `/api/items/${id}`,
  },
};

export const LAYOUT = {
  MAX_WIDTH: "800px",
  SPACING: {
    XS: "4px",
    SM: "8px",
    MD: "16px",
    LG: "24px",
    XL: "32px",
  },
  BORDER_RADIUS: {
    SM: "6px",
    MD: "8px",
    LG: "12px",
  },
};

import { COLORS, LAYOUT } from "./constants";

export const itemsContainerStyles = {
  main: {
    maxWidth: LAYOUT.MAX_WIDTH,
    margin: "0 auto",
    padding: LAYOUT.SPACING.LG,
    display: "flex",
    flexDirection: "column",
    gap: LAYOUT.SPACING.XL,
    background: COLORS.background,
    minHeight: "100vh",
  },

  header: {
    textAlign: "center",
    marginBottom: LAYOUT.SPACING.MD,
  },

  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: LAYOUT.SPACING.MD,
  },

  searchWrapper: {
    width: "100%",
    maxWidth: "400px",
  },

  resultsInfo: {
    textAlign: "center",
    fontSize: "14px",
    color: COLORS.textSecondary,
    fontWeight: "500",
  },

  itemsList: {
    display: "flex",
    flexDirection: "column",
    gap: LAYOUT.SPACING.MD,
  },

  noItemsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "200px",
    backgroundColor: COLORS.cardBg,
    borderRadius: LAYOUT.BORDER_RADIUS.LG,
    border: `2px dashed ${COLORS.cardBorder}`,
  },

  noItemsContent: {
    textAlign: "center",
  },

  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: LAYOUT.SPACING.XL,
  },

  loadingOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(24,24,27,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },

  loadingCard: {
    padding: LAYOUT.SPACING.LG,
    backgroundColor: COLORS.cardBg,
    borderRadius: LAYOUT.BORDER_RADIUS.LG,
    boxShadow: COLORS.cardShadowHover,
  },
};

export const itemsTextStyles = {
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: LAYOUT.SPACING.SM,
    letterSpacing: "-1px",
  },

  subtitle: {
    fontSize: "16px",
    color: COLORS.textSecondary,
  },

  noItemsTitle: {
    color: COLORS.text,
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: LAYOUT.SPACING.SM,
  },

  noItemsSubtitle: {
    color: COLORS.textSecondary,
    fontSize: "14px",
  },

  loadingText: {
    fontSize: "18px",
    color: COLORS.text,
    fontWeight: "500",
  },

  errorText: {
    fontSize: "18px",
    color: COLORS.error,
    fontWeight: "500",
  },

  accentText: {
    color: COLORS.accent,
  },
};

export const itemCardStyles = {
  container: {
    padding: "20px",
    border: `1px solid ${COLORS.cardBorder}`,
    borderRadius: LAYOUT.BORDER_RADIUS.LG,
    backgroundColor: COLORS.cardBg,
    boxShadow: COLORS.cardShadow,
    transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
    cursor: "pointer",
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  nameLink: {
    color: COLORS.text,
    fontSize: "18px",
    fontWeight: "600",
    textDecoration: "none",
    flex: 1,
    transition: "color 0.7s",
  },

  chevronLink: {
    color: COLORS.accent,
    fontSize: "24px",
    fontWeight: "300",
    marginLeft: 16,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "color 0.3s, transform 0.3s",
  },
};

export const searchInputStyles = {
  width: "100%",
  fontSize: "16px",
  padding: "12px 16px",
  background: COLORS.inputBg,
  color: COLORS.inputText,
  border: `1px solid ${COLORS.inputBorder}`,
  borderRadius: LAYOUT.BORDER_RADIUS.MD,
  outline: "none",
  boxShadow: "none",
  transition: "border 0.7s",
};

export const skeletonCardStyles = {
  container: {
    padding: "20px",
    border: `1px solid ${COLORS.cardBorder}`,
    borderRadius: LAYOUT.BORDER_RADIUS.LG,
    backgroundColor: COLORS.cardBg,
    boxShadow: COLORS.cardShadow,
    display: "flex",
    alignItems: "center",
    gap: LAYOUT.SPACING.MD,
  },

  skeleton: {
    height: 20,
    background: COLORS.skeleton,
    borderRadius: LAYOUT.BORDER_RADIUS.SM,
  },

  titleSkeleton: {
    width: "60%",
  },

  priceSkeleton: {
    width: "100%",
  },

  categorySkeleton: {
    width: "100%",
  },
};

export const paginationStyles = {
  item: {
    backgroundColor: "transparent",
    borderRadius: LAYOUT.BORDER_RADIUS.SM,
    border: "none",
    fontWeight: 600,
    minWidth: 36,
    minHeight: 36,
    transition: "background-color 0.3s, color 0.3s",
    outline: "none",
  },

  active: {
    backgroundColor: COLORS.paginationActive,
    color: "#fff",
  },

  inactive: {
    color: COLORS.text,
  },

  ellipsis: {
    color: COLORS.paginationInactive,
  },

  navigation: {
    color: COLORS.text,
    fontWeight: "500",
    backgroundColor: COLORS.paginationBg,
    border: "none",
    borderRadius: LAYOUT.BORDER_RADIUS.SM,
    minWidth: 36,
    minHeight: 36,
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
  },

  disabled: {
    pointerEvents: "none",
    opacity: "0.5",
  },
};

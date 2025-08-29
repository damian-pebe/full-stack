import { COLORS, LAYOUT } from "./constants";

export const containerStyles = {
  page: {
    minHeight: "100vh",
    background: COLORS.background,
    padding: LAYOUT.SPACING.LG,
  },

  content: {
    maxWidth: LAYOUT.MAX_WIDTH,
    margin: "0 auto",
  },

  loading: {
    minHeight: "100vh",
    background: COLORS.background,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  error: {
    minHeight: "100vh",
    background: COLORS.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: LAYOUT.SPACING.MD,
  },
};

export const textStyles = {
  loading: {
    color: COLORS.text,
    fontSize: "18px",
  },

  error: {
    color: COLORS.error,
    fontSize: "18px",
  },

  title: {
    color: COLORS.text,
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: LAYOUT.SPACING.LG,
    letterSpacing: "-1px",
  },

  label: {
    color: COLORS.textSecondary,
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: LAYOUT.SPACING.XS,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  value: {
    color: COLORS.text,
    fontSize: "18px",
    fontWeight: "500",
  },

  price: {
    color: COLORS.accent,
    fontSize: "24px",
    fontWeight: "600",
  },

  description: {
    color: COLORS.text,
    fontSize: "16px",
    lineHeight: "1.6",
  },
};

export const componentStyles = {
  backButton: {
    container: {
      marginBottom: LAYOUT.SPACING.LG,
    },

    link: {
      color: COLORS.accent,
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      display: "inline-flex",
      alignItems: "center",
      gap: LAYOUT.SPACING.SM,
      transition: "color 0.3s",
    },
  },

  card: {
    background: COLORS.cardBg,
    border: `1px solid ${COLORS.cardBorder}`,
    borderRadius: LAYOUT.BORDER_RADIUS.LG,
    padding: LAYOUT.SPACING.XL,
    boxShadow: COLORS.cardShadow,
  },

  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    gap: LAYOUT.SPACING.MD,
  },

  errorLink: {
    color: COLORS.accent,
    textDecoration: "none",
    fontSize: "16px",
  },
};

export const hoverEffects = {
  backButton: {
    enter: (element) => {
      element.style.color = COLORS.accentHover;
    },
    leave: (element) => {
      element.style.color = COLORS.accent;
    },
  },
};

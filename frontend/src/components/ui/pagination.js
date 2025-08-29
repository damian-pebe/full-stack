import React from "react";
import { Button } from "./button";

// Dark mode color palette
const DARK_BG = "#18181b";
const DARK_BG_ACTIVE = "#27272a";
const DARK_BORDER = "#3b3b3b";
const DARK_TEXT = "#f4f4f5";
const DARK_TEXT_MUTED = "#a1a1aa";
const DARK_ACCENT = "#2563eb";
const DARK_ACCENT_BG = "#1e293b";
const DARK_ACCENT_FOCUSED = "#1d4ed8"; // A more focused/darker blue for hover/focus

const Pagination = ({ style, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    style={{
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      backgroundColor: DARK_BG,
      ...style,
    }}
    {...props}
  />
);

const PaginationContent = React.forwardRef(({ style, ...props }, ref) => (
  <ul
    ref={ref}
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "4px",
      backgroundColor: DARK_BG,
      ...style,
    }}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(({ style, ...props }, ref) => (
  <li ref={ref} style={{ ...style, backgroundColor: DARK_BG }} {...props} />
));
PaginationItem.displayName = "PaginationItem";

// Custom hook to handle hover/focus styles inline
function useHoverFocusStyle(baseStyle, hoverStyle, focusStyle) {
  const [isHovered, setHovered] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);

  const eventHandlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  };

  let style = { ...baseStyle };
  if (isHovered) style = { ...style, ...hoverStyle };
  if (isFocused) style = { ...style, ...focusStyle };
  return [style, eventHandlers];
}

const PaginationLink = ({ style, isActive, size = "icon", ...props }) => {
  // Define hover/focus styles for active and inactive states
  const baseStyle = {
    backgroundColor: isActive ? DARK_ACCENT : DARK_BG_ACTIVE,
    color: isActive ? "#fff" : DARK_TEXT,
    border: `1px solid ${isActive ? DARK_ACCENT : DARK_BORDER}`,
    ...(isActive && {
      fontWeight: 600,
    }),
    ...style,
    transition: "background 0.15s, color 0.15s, border 0.15s",
  };

  const hoverStyle = isActive
    ? {
        backgroundColor: DARK_ACCENT_FOCUSED,
        border: `1px solid ${DARK_ACCENT_FOCUSED}`,
        color: "#fff",
      }
    : {
        backgroundColor: "#232336",
        color: DARK_ACCENT,
        border: `1px solid ${DARK_ACCENT}`,
      };

  const focusStyle = isActive
    ? {
        backgroundColor: DARK_ACCENT_FOCUSED,
        border: `1px solid ${DARK_ACCENT_FOCUSED}`,
        color: "#fff",
        outline: `2px solid ${DARK_ACCENT_FOCUSED}`,
        outlineOffset: "2px",
      }
    : {
        backgroundColor: "#232336",
        color: DARK_ACCENT,
        border: `1px solid ${DARK_ACCENT}`,
        outline: `2px solid ${DARK_ACCENT}`,
        outlineOffset: "2px",
      };

  const [computedStyle, eventHandlers] = useHoverFocusStyle(
    baseStyle,
    hoverStyle,
    focusStyle
  );

  return (
    <Button
      aria-current={isActive ? "page" : undefined}
      variant={isActive ? "outline" : "ghost"}
      size={size}
      style={computedStyle}
      {...eventHandlers}
      {...props}
    />
  );
};
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ style, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    style={{
      gap: "4px",
      paddingLeft: "10px",
      backgroundColor: DARK_BG_ACTIVE,
      color: DARK_TEXT,
      ...style,
    }}
    {...props}
  >
    <span style={{ color: DARK_TEXT }} aria-hidden="true">
      ←
    </span>
    <span style={{ color: DARK_TEXT }}>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ style, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    style={{
      gap: "4px",
      paddingRight: "10px",
      backgroundColor: DARK_BG_ACTIVE,
      color: DARK_TEXT,
      ...style,
    }}
    {...props}
  >
    <span style={{ color: DARK_TEXT }}>Next</span>
    <span style={{ color: DARK_TEXT }} aria-hidden="true">
      →
    </span>
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ style, ...props }) => (
  <span
    aria-hidden
    style={{
      display: "flex",
      height: "36px",
      width: "36px",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: DARK_BG,
      color: DARK_TEXT_MUTED,
      ...style,
    }}
    {...props}
  >
    <span style={{ fontSize: "14px", color: DARK_TEXT_MUTED }}>…</span>
    <span
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: "0",
      }}
    >
      More pages
    </span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

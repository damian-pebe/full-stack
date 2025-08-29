import React from "react";

const buttonVariants = {
  default: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
  },
  destructive: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
  },
  outline: {
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    color: "#374151",
  },
  secondary: {
    backgroundColor: "#f3f4f6",
    color: "#374151",
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#374151",
    border: "none",
  },
  link: {
    backgroundColor: "transparent",
    color: "#3b82f6",
    border: "none",
    textDecoration: "underline",
  },
};

const buttonSizes = {
  default: {
    height: "40px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "8px",
    paddingBottom: "8px",
  },
  sm: {
    height: "36px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  lg: {
    height: "44px",
    paddingLeft: "32px",
    paddingRight: "32px",
  },
  icon: {
    height: "40px",
    width: "40px",
    padding: "0",
  },
};

const Button = React.forwardRef(
  (
    {
      style,
      variant = "default",
      size = "default",
      asChild = false,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";

    const defaultStyle = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      borderRadius: "6px",
      fontSize: "14px",
      fontWeight: "500",
      transition: "all 0.2s",
      cursor: "pointer",
      outline: "none",
      ...buttonVariants[variant],
      ...buttonSizes[size],
      ...style,
    };

    const handleMouseEnter = (e) => {
      if (variant === "default") {
        e.target.style.backgroundColor = "#2563eb";
      } else if (variant === "outline") {
        e.target.style.backgroundColor = "#f9fafb";
      } else if (variant === "ghost") {
        e.target.style.backgroundColor = "#f9fafb";
      }
      if (onMouseEnter) onMouseEnter(e);
    };

    const handleMouseLeave = (e) => {
      if (variant === "default") {
        e.target.style.backgroundColor = "#3b82f6";
      } else if (variant === "outline") {
        e.target.style.backgroundColor = "#ffffff";
      } else if (variant === "ghost") {
        e.target.style.backgroundColor = "transparent";
      }
      if (onMouseLeave) onMouseLeave(e);
    };

    return (
      <Comp
        style={defaultStyle}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

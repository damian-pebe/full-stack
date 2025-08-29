import React from "react";

const Input = React.forwardRef(({ style, type, ...props }, ref) => {
  const defaultStyle = {
    display: "flex",
    height: "40px",
    width: "100%",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "8px",
    paddingBottom: "8px",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s",
    ...style,
  };

  return (
    <input
      type={type}
      style={defaultStyle}
      ref={ref}
      onFocus={(e) => {
        e.target.style.borderColor = "#3b82f6";
        e.target.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.1)";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "#d1d5db";
        e.target.style.boxShadow = "none";
      }}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };

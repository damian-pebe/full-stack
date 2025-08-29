import React from "react";

function Skeleton({ style, ...props }) {
  const defaultStyle = {
    backgroundColor: "#d1d5db", // darker gray, but not black
    borderRadius: "8px",
    animation: "skeletonPulse 1.5s ease-in-out 0s infinite",
    ...style,
  };

  return (
    <>
      <style>
        {`
          @keyframes skeletonPulse {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
      <div data-slot="skeleton" style={defaultStyle} {...props} />
    </>
  );
}

export { Skeleton };

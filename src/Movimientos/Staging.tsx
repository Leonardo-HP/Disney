import React from "react";
import { AbsoluteFill } from "remotion";
 
const AMOUNT = 10;
 
export const Staging: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <AbsoluteFill>
      {new Array(AMOUNT).fill(true).map((_, i) => {
        return (
          <AbsoluteFill
            style={{
              rotate: (i / AMOUNT) * (2 * Math.PI) + "rad",
            }}
          >
            {children}
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};
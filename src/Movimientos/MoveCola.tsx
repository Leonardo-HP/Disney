import React from "react";
import {
  AbsoluteFill,
  interpolate,
 
  useCurrentFrame,

} from "remotion";
 
export const MoveCola: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const frame = useCurrentFrame();
 

 
  const r = interpolate(frame, [0, 100,200,300,400], [0,20,-20,20,0]);
 
  return (
    <AbsoluteFill
      style={{


transform:`skew(${r}deg)`,
translate:'50px'

      }}
    >
      {children}
    </AbsoluteFill>
  );
};
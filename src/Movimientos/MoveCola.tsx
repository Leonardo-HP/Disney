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
 

 
  const r = interpolate(frame, [0, 50,100,150,200,250,300], [0,20,-20,20,-20,0,0]);
 
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
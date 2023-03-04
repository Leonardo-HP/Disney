import React from "react";
import {
  AbsoluteFill,
  interpolate,
 
  useCurrentFrame,

} from "remotion";
 
export const MoveCarrito: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const frame = useCurrentFrame();
 
  const y = interpolate(frame, [0,20,35,36,60,80,90,100, 200], [1250,1000,1000,800,700,600,500,400, 0]);
 
  return (
    <AbsoluteFill
      style={{
        translate: ` ${y}px 530px`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
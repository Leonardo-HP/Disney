import React, { useDebugValue } from "react";
import {
  AbsoluteFill,
  interpolate,
 
  spring,
 
  useCurrentFrame,
  useVideoConfig,

} from "remotion";
 
export const MoveCarrito1: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {



  
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
 
 
  const down = spring({
    fps,
    frame,
    config: {
      damping: 50,
    },
    durationInFrames: 100,
  });
  

 


  const y = interpolate(down, [0, 1], [1250,650]);
 

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
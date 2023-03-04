import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
	interpolate,
	useCurrentFrame,
	spring,
} from 'remotion/.';

export const DotVerde: React.FC = () => {

	return (
	
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 14,
          width: 14,
          borderRadius: 14 / 2,
          backgroundColor: "green",
        }}
      />
    </AbsoluteFill>

	);
};

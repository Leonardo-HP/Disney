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
import { Baile } from '../Movimientos/Baile';
import { Entrada } from '../Movimientos/Entrada';
import {  Mirada1 } from '../Movimientos/Mirada1';
import { Parpadeo } from '../Movimientos/Parpadeo';

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		from: 0,
		to: 100,
		frame,
		fps,
		config: {
			mass: 10,
			stiffness: 20,
			damping: 100,
		},
	});
  

  return (
<div>
<Sequence durationInFrames={30}>
<Entrada/>
</Sequence>

<Sequence from={30} durationInFrames={30}>
<Mirada1/>
</Sequence>

<Sequence from={60} durationInFrames={20}>
<Parpadeo/>
</Sequence>

<Sequence from={80} durationInFrames={20}>
<Parpadeo/>
</Sequence>



<Sequence from={100} durationInFrames={70}>
<Baile/>
</Sequence>
</div>
	);
};
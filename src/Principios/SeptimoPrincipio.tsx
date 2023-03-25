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
import { Cola } from '../Movimientos/Cola';
import { CompCola } from '../Movimientos/CompCola';
import { Dot } from '../Movimientos/Dot';
import { Move } from '../Movimientos/Move';
import { Parpadeo } from '../Movimientos/Parpadeo';
import { Shrinking } from '../Movimientos/Shrinking';
import { Staging } from '../Movimientos/Staging';

export const SeptimoPrincipio: React.FC = () => {
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
		<div className="gato">
			<Sequence  durationInFrames={500}>
				<AbsoluteFill>
<CompCola/>
				</AbsoluteFill>
				</Sequence>

		</div>
	);
};

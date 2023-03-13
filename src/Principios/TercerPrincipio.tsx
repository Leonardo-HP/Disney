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
import { Dot } from '../Movimientos/Dot';
import { Move } from '../Movimientos/Move';
import { Parpadeo } from '../Movimientos/Parpadeo';
import { Shrinking } from '../Movimientos/Shrinking';
import { Staging } from '../Movimientos/Staging';

export const TercerPrincipio: React.FC = () => {
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
		<Sequence durationInFrames={20}>
				<AbsoluteFill
					style={{
						translate: '0 100px',
					}}
				>
					<Staging>
						<Move>
							<Shrinking>
								<Dot/>
							</Shrinking>
						</Move>
					</Staging>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={20} durationInFrames={20}>
				<AbsoluteFill
					style={{
						translate: '0 100px',
					}}
				>
					<Staging>
						<Move>
							<Shrinking>
								<Dot/>
							</Shrinking>
						</Move>
					</Staging>
				</AbsoluteFill>
			</Sequence>


			<Sequence durationInFrames={20}>
				<Parpadeo/>
			</Sequence>

			<Sequence from={20} durationInFrames={20}>
				<Parpadeo/>
			</Sequence>

			<Sequence from={40} durationInFrames={80}>
				<Baile/>
			</Sequence>

			<Sequence from={120} durationInFrames={20}>
				<Parpadeo/>
			</Sequence>

			<Sequence from={140} durationInFrames={80}>
				<Parpadeo/>
			</Sequence>

			<Sequence from={120} durationInFrames={100}>
			<AbsoluteFill
					style={{
						translate: '0 100px',
					}}
				>
					<Staging>
						<Move>
							<Shrinking>
								<Dot/>
							</Shrinking>
						</Move>
					</Staging>
				</AbsoluteFill>
				</Sequence>
				<Sequence from={140} durationInFrames={20}>
				<AbsoluteFill
					style={{
						translate: '0 100px',
					}}
				>
					<Staging>
						<Move>
							<Shrinking>
								<Dot/>
							</Shrinking>
						</Move>
					</Staging>
				</AbsoluteFill>
				</Sequence>

		</div>
	);
};

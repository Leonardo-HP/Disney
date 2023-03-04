import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
} from 'remotion/.';
import {PrimerPrincipio} from './Principios/PrimerPrincipio';
import {Intro} from './Principios/IntroQuintoPrincipio';
import {Fondo} from './Fondo';
import {SegundoPrincipio} from './Principios/SegundoPrincipio';
import {TercerPrincipio} from './Principios/TercerPrincipio';
import {Shrinking} from './Movimientos/Shrinking';
import {Dot} from './Movimientos/Dot';
import {Staging} from './Movimientos/Staging';
import {Move} from './Movimientos/Move';
import {Parpadeo} from './Movimientos/Parpadeo';
import {Baile} from './Movimientos/Baile';
export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div>
			<Fondo />

			<Sequence durationInFrames={170}>
				<Intro/>
			</Sequence>

			<Sequence from={170} durationInFrames={120}>
				<PrimerPrincipio/>
			</Sequence>

			<Sequence from={290} durationInFrames={300}>
				<SegundoPrincipio/>
			</Sequence>

			<Sequence from={590} durationInFrames={300}>
				<TercerPrincipio/>
			</Sequence>

			<Sequence from={1000} durationInFrames={20}>
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

			<Sequence from={1020} durationInFrames={20}>
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

			<Sequence from={900} durationInFrames={100}>
				<Baile/>
			</Sequence>

			<Sequence from={1000} durationInFrames={20}>
				<Parpadeo/>
			</Sequence>

			<Sequence from={1020} durationInFrames={20}>
				<Parpadeo/>
			</Sequence>

			<Sequence from={1040} durationInFrames={50}>
				<Baile/>
			</Sequence>
		</div>
	);
};

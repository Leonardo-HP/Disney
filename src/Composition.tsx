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
import { SextoPrincipio } from './Principios/SextoPrincipio';
import { SeptimoPrincipio } from './Principios/SeptimoPrincipio';
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

			<Sequence from={290} durationInFrames={250}>
				<SegundoPrincipio/>
			</Sequence>

			<Sequence from={540} durationInFrames={200}>
				<TercerPrincipio/>
			</Sequence>

			<Sequence from={740} durationInFrames={300}>
			 <SextoPrincipio/>
			</Sequence>

			<Sequence from={1040} durationInFrames={300}>
			 <SeptimoPrincipio/>
			</Sequence>


		</div>
	);
};

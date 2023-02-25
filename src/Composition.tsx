
import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
} from 'remotion/.';
import { PrimerPrincipio } from './Principios/PrimerPrincipio';
import { Intro } from './Principios/Intro';
import { Fondo } from './Fondo';
export const MyComposition = () => {

	const {fps, durationInFrames, width, height} = useVideoConfig();








	return(
<div>
<Fondo/>
<Sequence durationInFrames={200}>
<Intro/>
</Sequence>
<Sequence from={200} durationInFrames={100}>
<PrimerPrincipio/>
</Sequence>
<Sequence from={300} durationInFrames={100}>
<PrimerPrincipio/>
</Sequence>

</div>




	) 








};


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

export const MyComposition = () => {

	const {fps, durationInFrames, width, height} = useVideoConfig();








	return(
<div>

<PrimerPrincipio/>


</div>




	) 








};

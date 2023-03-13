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
import { Cola } from './Movimientos/Cola';
import { SeptimoPrincipio } from './Principios/SeptimoPrincipio';
import { CompCola } from './Movimientos/CompCola';
import { MoveCola } from './Movimientos/MoveCola';
export const Prueba = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div>
			<Fondo />
			
<MoveCola>
<CompCola/>
</MoveCola>

		</div>
	);
};

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
import {SextoPrincipio} from './Principios/SextoPrincipio';
import {Cola} from './Movimientos/Cola';
import {SeptimoPrincipio} from './Principios/SeptimoPrincipio';
import {CompCola} from './Movimientos/CompCola';
import {MoveCola} from './Movimientos/MoveCola';
import { Mirada2 } from './Movimientos/Mirada2';

export const Prueba: React.FC =() => {

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
	



	const tamañoCola = interpolate(frame, [5,20,30,40],[40,0,0,40], {extrapolateRight: 'clamp'} )


	return (
		<div>
			<Fondo />
<AbsoluteFill
style={{
	translate:  '300px 250px',
	transform: 'scale(.8)'
}}>
			<MoveCola>
				<CompCola/>
			</MoveCola>
			</AbsoluteFill>
			<Mirada2/>
		</div>
	);
};

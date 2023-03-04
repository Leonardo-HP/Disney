import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
} from 'remotion/.';
import {Shrinking} from './Movimientos/Shrinking';
import {Dot} from './Movimientos/Dot';
import {Background} from './Movimientos/FondoNegro';
import {Move} from './Movimientos/Move';
import {Staging} from './Movimientos/Staging';
import {SextoPrincipio} from './Principios/SextoPrincipio';
import {Cochecito} from './Movimientos/Cochecito';
import {MirandoCoche} from './Movimientos/MirandoCoche';
import {Portal} from './Movimientos/Portal';
import {Fondo} from './Fondo';
import {DotVerde} from './Movimientos/DotVerde';
import {MoveVerde} from './Movimientos/MoveVerde';
import {MoveCarrito} from './Movimientos/MoveCarrito';
export const MyComposition2 = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div>
			<Fondo />
			<Sequence durationInFrames={300}>
				<MirandoCoche />
			</Sequence>

         <MoveCarrito>
				<Cochecito/>
				</MoveCarrito>


			<Sequence from={2} durationInFrames={20}>
				<AbsoluteFill
					style={{
						translate: '610px 210px',
					}}
				>
					<Staging>
						<MoveVerde>
							<Shrinking>
								<DotVerde />
							</Shrinking>
						</MoveVerde>
					</Staging>
				</AbsoluteFill>
			</Sequence>
			<Portal />




<Sequence from={150} durationInFrames={120}>
<AbsoluteFill
					style={{
						translate: '-610px 210px',
					}}
				>
					<Staging>
						<MoveVerde>
							<Shrinking>
								<DotVerde />
							</Shrinking>
						</MoveVerde>
					</Staging>
				</AbsoluteFill>
<AbsoluteFill style={{
						translate: '-1240px -0px',
					}}>
						<Portal/>
					</AbsoluteFill>



					</Sequence>



		</div>
	);
};

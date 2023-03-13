import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
} from 'remotion/.';
import {Shrinking} from '../Movimientos/Shrinking';
import {Dot} from '../Movimientos/Dot';
import {Background} from '../Movimientos/FondoNegro';
import {Move} from '../Movimientos/Move';
import {Staging} from '../Movimientos/Staging';

import {Cochecito} from '../Movimientos/Cochecito';
import {MirandoCoche} from '../Movimientos/MirandoCoche';
import {Portal} from '../Movimientos/Portal';
import {Fondo} from '../Fondo';
import {DotVerde} from '../Movimientos/DotVerde';
import {MoveVerde} from '../Movimientos/MoveVerde';
import {MoveCarrito1} from '../Movimientos/MoveCarrito1';
import { MoveCarrito2 } from '../Movimientos/MoveCarrito2';
import { Cola } from '../Movimientos/Cola';






export const SextoPrincipio = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div>
			<Fondo />
			<Sequence durationInFrames={300}>
				<MirandoCoche />
			</Sequence>

<Sequence durationInFrames={115}>
<MoveCarrito1>
				<Cochecito/>
			</MoveCarrito1>



	</Sequence>		

<Sequence from={115}>
<MoveCarrito2>
				<Cochecito/>
			</MoveCarrito2>
</Sequence>


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
				<AbsoluteFill
					style={{
						translate: '-1240px -0px',
					}}
				>
					<Portal />
				</AbsoluteFill>
			</Sequence>
			
			
		</div>
	);
};

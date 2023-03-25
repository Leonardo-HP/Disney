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
	OffthreadVideo,
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
import {SeptimoPrincipio} from './Principios/SeptimoPrincipio';
import {BusquedaEnGoogle} from './Reddit/BusquedaEnGoogle/BusquedaEnGoogle';
import {FondoPapel} from './Reddit/FondoPapel';
import {FireFoxLogo} from './Reddit/FirefoxLogo/FireFoxLogo';
import {Carga} from './Reddit/Carga';

import {Greenscreen} from './Reddit/Wow';
import {RedditLogo} from './Reddit/RedditLogo';
import {Temblor} from './Reddit/Temblor';
import { EscalaDesaparece } from './Reddit/FirefoxLogo/EscalaDesaparece';
import { Triangulos } from './Reddit/RedditLogin.tsx/Triangulos';

export const CompositionReddit = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	const frame = useCurrentFrame();

	return (
		<AbsoluteFill>
		
 <Temblor>
			<FondoPapel />
			</Temblor>
			<Sequence from={50}>
				<EscalaDesaparece>
				<RedditLogo />
				</EscalaDesaparece>
			</Sequence>

			<Sequence from={220} durationInFrames={200}>
				<FireFoxLogo />
			</Sequence>

			<Sequence from={332} durationInFrames={50}>
				<Carga />
			</Sequence>

			<Sequence from={340} durationInFrames={500}>
				<BusquedaEnGoogle />
				</Sequence>
		
				<Sequence from={850}>
				<Triangulos/>
				</Sequence>
		




		<Sequence from={18}>
		
					<Audio
						src={staticFile('Superhero.mp3')}
					/>
					
		</Sequence>
		

		

		</AbsoluteFill>



		
	);
};

import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
  Video,
  interpolate,
  OffthreadVideo,
} from 'remotion/.';
import {PrimerPrincipio} from './Principios/PrimerPrincipio';
import {Intro} from './Principios/IntroQuintoPrincipio';
import {Fondo} from './Fondo';
import {SegundoPrincipio} from './Principios/SegundoPrincipio';

export const Anuncio = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div>

<OffthreadVideo volume={1} src={staticFile("Version3.4.mp3")} endAt={1360} />



      <OffthreadVideo volume={(f) =>
          interpolate(f, [0, 1333,1358], [0.05, 0.05,0], { extrapolateLeft: "clamp" })
        } src={staticFile('jazz.mp3')} />



		</div>
	);
};

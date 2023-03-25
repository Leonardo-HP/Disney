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
import {Cola} from './Cola';
import { ColaEndereza } from './ColaEndereza';

export const CompCola: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill style={{}}>

      <Sequence durationInFrames={100}>
				<ColaEndereza/>
			</Sequence>

			<Sequence from={100} durationInFrames={100}>
				<Cola/>
			</Sequence>

			<Sequence from={200} durationInFrames={100}>
				<AbsoluteFill
					style={{
						transform: `scaleX(-1)`,
						translate: `-880px -15px `,
					}}
				>
					<Cola/>
				</AbsoluteFill>
			</Sequence>




			<Sequence from={300} durationInFrames={100}>
        <AbsoluteFill
        	style={{
										translate: `0 -25px`,
					}}
				>
        
        
				<Cola/>
        </AbsoluteFill>
			</Sequence>

      <Sequence from={400} durationInFrames={150}>
				<AbsoluteFill
					style={{
						transform: `scaleX(-1)`,
						translate: `-880px -35px `,
					}}>
					<Cola/>
				</AbsoluteFill>
			</Sequence>




		</AbsoluteFill>
	);
};

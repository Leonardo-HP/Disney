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

export const ColaEndereza: React.FC = () => {
	const frame = useCurrentFrame();


	const width1 = interpolate(frame, [1, 100], [10, 200], {
		extrapolateRight: 'clamp',
	});


	const translate1 = interpolate(frame, [1, 100], [200,0], {
		extrapolateRight: 'clamp',
	});

	const redondo = interpolate(frame, [0,90, 100], [0,0,0], {
		extrapolateRight: 'clamp',
	});



	return (
		<AbsoluteFill>

			<AbsoluteFill>
				<div
					style={{
						width: `${width1}px`,
						height: `300px`,				
						border: '14px solid gray',
						borderRight: 0,
						translate: `${translate1}px 0px`,
						borderRadius:` 250px ${redondo}px 0px 250px`}}
				/>

			</AbsoluteFill>
		</AbsoluteFill>




















	);








};

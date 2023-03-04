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

export const Fondo: React.FC = () => {
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



	return (
		<div>
		<AbsoluteFill
			style={{
				height: '550px',
				background: 'linear-gradient(0deg, rgba(87,104,152,1) 0%, rgba(7,11,23,1) 100%)',
			}}
		/>
		<AbsoluteFill
		style={{
			top: '550px',
			height: '100px',
			background: 'linear-gradient(0deg, rgba(156,120,85,1) 0%, rgba(205,133,63,1) 100%)',
		}}
	/>	<AbsoluteFill
	style={{
		top: '650px',
		height: '70px',
		background:'#473632'
	}}
/>



	</div>
	);
};

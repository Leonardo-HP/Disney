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

export const Cola: React.FC = () => {
	const frame = useCurrentFrame();

	const height1 = interpolate(frame, [1, 50], [300, 0], {
		extrapolateRight: 'clamp',
	});

	const width1 = interpolate(frame, [1, 50], [200, 0], {
		extrapolateRight: 'clamp',
	});


	const translate1 = interpolate(frame, [1, 50], [0, 200], {
		extrapolateRight: 'clamp',
	});

	const scale1 = interpolate(frame, [0,41, 50], [1,1,0], {
		extrapolateRight: 'clamp',
	});
  const opacity1 = interpolate(frame, [0, 41, 50], [1, 1, 0], {
		extrapolateRight: 'clamp',
	});


	const height2 = interpolate(frame, [1, 50], [0, 300], {
		extrapolateRight: 'clamp',
	});

	const width2 = interpolate(frame, [1, 50], [0, 200], {
		extrapolateRight: 'clamp',
	});

	const translatey = interpolate(frame, [1, 50], [285, -10], {
		extrapolateRight: 'clamp',
	});
	const translatex = interpolate(frame, [1, 50], [200, 200], {
		extrapolateRight: 'clamp',
	});
  const scale2 = interpolate(frame, [0,9, 50], [0,1,1], {
		extrapolateRight: 'clamp',
	});

	const opacity2 = interpolate(frame, [0, 9, 50], [0, 1, 1], {
		extrapolateRight: 'clamp',
	});



	return (
		<AbsoluteFill>

			<AbsoluteFill>
				<div
					style={{
						width: `${width1}px`,
						height: `${height1}px`,
						borderBottomLeftRadius: '210px',
						borderTopLeftRadius: '210px',
						border: '14px solid gray',
						borderRight: 0,
						translate: `${translate1}px 0px`,
            opacity:`${opacity1}`,
            transform: `scale(${scale1})`,
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill>
				<div
					style={{
						width: `${width2}px`,
						height: `${height2}px`,
						borderBottomRightRadius: '210px',
						borderTopRightRadius: '210px',
						border: `14px solid gray`,
						borderLeft: 0,
						translate: `${translatex}px ${translatey}px`,
            opacity:`${opacity2}`,
            transform: `scale(${scale2})`,

					}}
				/>
			</AbsoluteFill>


			

		</AbsoluteFill>




















	);








};

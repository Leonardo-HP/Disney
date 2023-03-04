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

export const Cochecito: React.FC = () => {
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
		<AbsoluteFill>
			<div
				style={{
					translate: '50px 20px',
				}}
			>
				<div
					style={{
						translate: '20px 40px',
						height: 20,
						width: 80,
						borderRadius: ' 50% / 0 0 100% 100% ',
						backgroundColor: '#71797E',
					}}
				/>
				<div
					style={{
						translate: '10px 10px',
						height: 20,
						width: 100,
						borderRadius: ' 50% / 100% 100% 0 0',
						backgroundColor: 'grey',
					}}
				>
					<div
						style={{
							translate: '10px 4px',
							height: 5,
							width: 5,
							borderRadius: 14 / 2,
							backgroundColor: 'yellow',
						}}
					>
						<div
							style={{
								translate: '2px 0px',
								height: 5,
								width: 8,

								backgroundColor: '#A9A9A9',
							}}
						/>
					</div>
				</div>
				<div
					style={{
						translate: '35px -30px',
						height: 25,
						width: 50,
						borderRadius: ' 50% /100% 100% 0 0',
						backgroundColor: '#7CB9E8',
					}}
				>
					<div
						style={{
							translate: '22px 0px',
							height: 25,
							width: 5,

							backgroundColor: '#A9A9A9',
						}}
					/>
				</div>

				<div
					style={{
						translate: '70px -40px',
						height: 15,
						width: 25,

						backgroundColor: '#A9A9A9',
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};

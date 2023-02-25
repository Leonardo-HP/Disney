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

export const PrimerPrincipio: React.FC = () => {
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

	const mirada1 = interpolate(frame, [0, 30,65,75,78,85,86,90], [0, -2,   -2,1,   1,3  ,3,0  ], {
		extrapolateRight: 'clamp',
	});

	const mirada2 = interpolate(frame, [0, 30,65,75,78,85,86,90], [-2, -4,-4,2,2,4,4,-2], {
		extrapolateRight: 'clamp',
	});

	const mirada1pupila = interpolate(frame, [0, 30,65,75,78,85,86,90], [4, -5,-5,4,4,5,5,3], {
		extrapolateRight: 'clamp',
	});

	const rotacionOrejaDerecha = interpolate(frame, [0, 30,70,80,85,90,91,100], [0, 20,20,0,0,20,20,0], {
		extrapolateRight: 'clamp',
	});

	const rotacionOrejaIzquierda = interpolate(frame, [0, 30,70,80,85,90,91,100], [0, -20,-20,0,0,-20,-20,0], {
		extrapolateRight: 'clamp',
	});

	const parpadear = interpolate(frame, [0, 5, 6, 10,85,90,91,95], [40, 0, 0, 40,40,0,0,40], {
		extrapolateRight: 'clamp',
	});

	const parpadearTop = interpolate(frame, [0, 5, 6, 10,85,90,91,95], [60, 80, 80, 60,60,80,80,60], {
		extrapolateRight: 'clamp',
	});

	const wiggleWidht = interpolate(frame, [0, 30,   35,45,   61,70,  76,84,   87,90, 91, 95], [200, 220,    220,180,   180,220,   220,180,   180,220 , 220,200], {
		extrapolateRight: 'clamp',
	});

	const wiggleHeight = interpolate(frame, [0, 30,  35,45,   61,70,   75,85, 90,95 ], [210,180,   180,250,    250,210,   210,250, 180, 210], {
		extrapolateRight: 'clamp',
	});

	const wiggleTop = interpolate(frame,    [0, 30,    35,60,    75,90,    91,95], [0, 30,    30,-200,    -200,30    ,30,0], {
		extrapolateRight: 'clamp',
	});

	const wiggleLeft = interpolate(frame, [0, 30,  31,45,  60,75,  76,84,      85,90,     91,95], [0, -5,   -5,10,   10,-5,    -5,10,    10,-5,    -5,0 ], {
		extrapolateRight: 'clamp',
	});

	const wiggleEyesLeft = interpolate(frame, [0,30,   31,45,  60,75    ,76,80, 81,90,  91,95], [10,20,  20,0,  0,10,  10,0,  0,10,   10,10], {
		extrapolateRight: 'clamp',
	});

	const wiggleNoseLeft = interpolate(frame,   [0,30,31,45,60,75,76,80,81,90,91,95], [10,20,  20,0,  0,10,  10,0,  0,10,   10,10], {
		extrapolateRight: 'clamp',
	});

	const wiggleOrejasLeft = interpolate(frame, [0,30,31,45,60,75, 76,80,  81,90,  91,95], [0,10,10,0,0,10,10,0  ,0,5,  5,0], {
		extrapolateRight: 'clamp',
	});
	const wiggleEyesTop = interpolate(frame, [0,30,31,45,60  ,65,76,80,81,   90,   91,95], [0,20,  20,0,  0,-10,  -10,30,30,20,20,0], {
		extrapolateRight: 'clamp',
	});

	const wiggleNoseTop = interpolate(frame, [0,30,31,45,60,65,76,80,81,90,91,95], [0,20,  20,0,  0,-10,  -10,30,30,20,20,0], {
		extrapolateRight: 'clamp',
	});



	const wiggle = interpolate(frame, [0,5,10,15,20,30],[0,-2,2,-2,2,0], {extrapolateRight: 'clamp'} )


	return (
		<AbsoluteFill
			style={{
				left: `${wiggleLeft}px`,
				top: `${wiggleTop}px`,
				transform: `skew(${wiggle}deg)`,
			}}
		>
			<div className="orejas">
				<AbsoluteFill
					style={{
						left: `${wiggleOrejasLeft}px`,

					}}
				>
					<div className="orejaIzquierda">
						<AbsoluteFill
							style={{
								height: '80px',
								width: '80px',
								background: '#8b9294',
								top: '350px',
								left: '550px',
								borderRadius: '0% 100% 0% 50% ',
								borderLeft: '1px  solid grey ',
								borderTop: '1px  solid grey',
								transform: `rotate(${rotacionOrejaIzquierda}deg)`,
							}}
						>
							<AbsoluteFill
								style={{
									height: '80px',
									width: '50px',
									background: '#efd3f0',
									top: '0px',
									left: '0px',
									borderRadius: '0% 100% 0% 50% ',
								}}
							/>
						</AbsoluteFill>
					</div>

					<div className="orejaDerecha">
						<AbsoluteFill
							style={{
								height: '80px',
								width: '80px',
								background: '#8b9294',
								top: '350px',
								left: '650px',

								borderRadius: '100% 0% 50% 0% ',

								borderLeft: '1px  solid grey ',
								borderTop: '1px  solid grey',
								transform: `rotate(${rotacionOrejaDerecha}deg)`,
							}}
						>
							<AbsoluteFill
								style={{
									height: '80px',
									width: '50px',
									background: '#efd3f0',
									top: '0px',
									left: '28px',
									borderRadius: '100% 0% 50% 0% ',
								}}
							/>
						</AbsoluteFill>
					</div>
				</AbsoluteFill>
			</div>

			<div className="cara">
				<AbsoluteFill
					style={{
						height: `${wiggleHeight}px`,
						width: `${wiggleWidht}px`,
						background: '#8b9294',
						top: '360px',
						left: '540px',
						borderRadius: '100px 100px 90px 90px',
					}}
				>
					<div className="ojos">
						<AbsoluteFill
							style={{
								left: `${wiggleEyesLeft}px`,
								top: `${wiggleEyesTop}px`
							}}
						>
							<div className="ojoDerecho">
								<AbsoluteFill
									style={{
										height: `${parpadear}px`,
										width: '50px',
										background: 'black',
										top: `${parpadearTop}px`,
										left: '30px',
										border: 'solid grey 1px',
										borderRadius: '0 60% ',
										overflow: 'hidden',
									}}
								>
									<AbsoluteFill
										style={{
											height: '50px',
											width: '50px',
											background: 'white',
											top: `${mirada1}px`,
											left: `3px`,
											borderRadius: '100px 100px 100px 100px',
										}}
									>
										<AbsoluteFill
											style={{
												height: '45px',
												width: '45px',
												background: 'black',
												top: `${mirada1}px`,
												left: `3px`,
												borderRadius: '100px 100px 100px 100px',
											}}
										>
											<AbsoluteFill
												style={{
													height: '40px',
													width: '40px',
													background: 'radial-gradient(#8fad47, #899668)',
													top: '2px',
													left: '2px',
													borderRadius: '100px 100px 100px 100px',
												}}
											>
												<AbsoluteFill
													style={{
														height: '35px',
														width: '15px',
														background: 'black',
														top: `${mirada1pupila}px`,
														left: '12px',
														borderRadius: '50%',
													}}
												/>
											</AbsoluteFill>
										</AbsoluteFill>
									</AbsoluteFill>
								</AbsoluteFill>
							</div>

							<div className="ojoIzquierdo">
								<AbsoluteFill
									style={{
										height: `${parpadear}px`,
										width: '50px',
										background: 'black',
										top: `${parpadearTop}px`,
										left: '105px',
										border: 'solid grey 1px',
										borderRadius: '60% 0',
										overflow: 'hidden',
									}}
								>
									<AbsoluteFill
										style={{
											height: '50px',
											width: '50px',
											background: 'white',
											top: `0px`,
											left: '-2px',
											borderRadius: '100px 100px 100px 100px',
										}}
									>
										<AbsoluteFill
											style={{
												height: '45px',
												width: '45px',
												background: 'black',
												top: `${mirada2}px`,
												left: `2px`,
												borderRadius: '100px 100px 100px 100px',
											}}
										>
											<AbsoluteFill
												style={{
													height: '40px',
													width: '40px',
													background: 'radial-gradient(#8fad47, #899668)',
													top: '2px',
													left: '2px',
													borderRadius: '100px 100px 100px 100px',
												}}
											>
												<AbsoluteFill
													style={{
														height: '35px',
														width: '15px',
														background: 'black',
														top: `${mirada1pupila}px`,
														left: `12px`,
														borderRadius: '50%',
													}}
												/>
											</AbsoluteFill>
										</AbsoluteFill>
									</AbsoluteFill>
								</AbsoluteFill>
							</div>
						</AbsoluteFill>
					</div>

					<div className="hocico">
						<AbsoluteFill
							style={{
								left: `${wiggleNoseLeft}px`,
								top: `${wiggleNoseTop}px`,
							}}
						>
							<div className="boca">
								<AbsoluteFill
									style={{
										top: '122px',
										left: '100px',
										width: '40px',
										height: '20px',
										background: 'grey',
										borderRadius: '0 50% 50% 50%',
										borderLeft: '3px  solid #555',
										borderBottom: '3px  solid #555',
									}}
								/>
								<AbsoluteFill
									style={{
										top: '122px',
										left: '62px',
										width: '40px',
										height: '20px',
										background: 'grey',
										borderRadius: '50% 0 50% 50%',
										borderRight: '3px  solid #555',
										borderBottom: '3px  solid #555',
									}}
								/>
							</div>

							<div className="nariz">
								<AbsoluteFill
									style={{
										top: '120px',
										left: '86px',
										width: 5,
										height: 5,
										borderLeft: '15px solid transparent',
										borderRight: '  15px solid transparent',
										borderTop: ' 12px solid #e8bee7',
										borderRadius: '20px',
									}}
								/>
							</div>
						</AbsoluteFill>
					</div>
				</AbsoluteFill>
			</div>
		</AbsoluteFill>
	);
};

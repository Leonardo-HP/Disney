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

export const SegundoPrincipio: React.FC = () => {
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
	const mirada1 = interpolate(
		frame,
		[0, 10, 50, 60, 180, 200],
		[3, 3, 3, 10, 10, 3],
		{extrapolateRight: 'clamp'}
	);

	const mirada2 = interpolate(
		frame,
		[0, 10, 50, 60, 180, 200],
		[-2, -2, -2, 8, 8, -2],
		{extrapolateRight: 'clamp'}
	);

	const parpadear = interpolate(
		frame,
		[0, 5, 6, 10, 70, 80, 180, 200],
		[40, 0, 0, 40, 40, 20, 20, 40],
		{extrapolateRight: 'clamp'}
	);

	const parpadearTop = interpolate(frame, [0, 5, 6, 10], [60, 80, 80, 60], {
		extrapolateRight: 'clamp',
	});

	const ojosTop = interpolate(frame, [0, 5, 6, 10], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
	});

	const rotacionOrejaDerecha = interpolate(
		frame,
		[0, 5, 6, 10],
		[0, 15, 15, 0],
		{extrapolateRight: 'clamp'}
	);

	const rotacionOrejaIzquierda = interpolate(
		frame,
		[0, 5, 6, 10],
		[0, -15, -15, 0],
		{extrapolateRight: 'clamp'}
	);

	const danceLeft = interpolate(
		frame,
		[0, 90, 100, 120, 125, 140, 160],
		[-90, -90, -140, -140, -40, -40, -90],
		{extrapolateRight: 'clamp'}
	);

	const danceTop = interpolate(
		frame,
		[0, 5, 10, 70, 80, 180, 200],
		[0, 30, 0, 0, 30, 30, 0],
		{extrapolateRight: 'clamp'}
	);

	const danceHeight = interpolate(
		frame,
		[0, 5, 10, 70, 80, 180, 200],
		[210, 180, 210, 210, 180, 180, 210],
		{extrapolateRight: 'clamp'}
	);

	const dance = interpolate(
		frame,
		[0, 90, 100, 120, 125, 140, 160],
		[0, 0, 15, 15, -15, -15, 0],
		{extrapolateRight: 'clamp'}
	);

  const zarpazoX = interpolate(frame,[0,90,120, 125, 150],[420, 420, 400, 480,480],
		{extrapolateRight: 'clamp'}
	);

  const zarpazoY = interpolate(frame,[0,90,120, 125, 150],[750,800,800,890, 750],
    
		{extrapolateRight: 'clamp'}
	);


  const zarpazoRotacion = interpolate(frame,[0,90,120, 125, 150],[0, 0, -15, 15,-15],
    
		{extrapolateRight: 'clamp'}
	);

	
	return (
		<div className="gato">
			<AbsoluteFill
				style={{
					left: `${danceLeft}px`,
					transform: `skew(${dance}deg)`,
					top: `${danceTop}px`,
				}}
			>



				<div className="orejas">
					<div className="orejaIzquierda">
						<AbsoluteFill
							style={{
								height: '80px',
								width: '80px',
								background: '#8b9294',
								top: '350px',
								left: '650px',
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
								left: '750px',
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
				</div>

				<div className="Zarpa">
					<AbsoluteFill
						style={{
							top: `${zarpazoX}px`,
							left: `${zarpazoY}px`,
							width: '40px',
							height: '30px',
							background: 'grey',
							borderRadius: '0 50% 50% 50%',
              transform: `rotate(${zarpazoRotacion}deg)`
						}}>
         
						<AbsoluteFill
							style={{
								top: '3px',
								left: '31px',
								width: '20px',
								height: '15px',
								borderRadius: '0 50% 50% 50%',
								borderTop: '3px  solid white',
							}}
						/>

						<AbsoluteFill
							style={{
								top: '9px',
								left: '32px',
								width: '20px',
								height: '10px',
								borderRadius: '0 50% 50% 50%',
								borderTop: '3px  solid white',
							}}
						/>

						<AbsoluteFill
							style={{
								top: '15px',
								left: '33px',
								width: '20px',
								height: '10px',
								borderRadius: '0 50% 50% 50%',
								borderTop: '3px  solid white',
							}}
						/>


<AbsoluteFill
							style={{
								top: '21px',
								left: '33px',
								width: '20px',
								height: '10px',
								borderRadius: '0 50% 50% 50%',
								borderTop: '3px  solid white',
							}}
						/>

						<AbsoluteFill
							style={{
								top: '0px',
								left: '0px',
								width: '40px',
								height: '35px',
								background: '#8b9294',
								borderRadius: '0 50% 50% 50%',
							}}
						/>

						<AbsoluteFill
							style={{
								top: '0px',
								left: '-60px',
								width: '65px',
								height: '30px',
								background: '#8b9294',
							}}
						/>
					</AbsoluteFill>
				</div>




				<div className="cara">
					<AbsoluteFill
						style={{
							height: `${danceHeight}px`,
							width: '200px',
							background: '#8b9294',
							top: '50%',
							left: '50%',
							borderRadius: '100px 100px 90px 90px',
						}}
					>
						<div className="ojos">
							<AbsoluteFill style={{left: '10px', top: `${ojosTop}px`}}>
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
												top: '-5px',
												left: `${mirada1}px`,
												borderRadius: '100px 100px 100px 100px',
											}}
										>
											<AbsoluteFill
												style={{
													height: '45px',
													width: '45px',
													background: 'black',
													top: '2px',
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
															top: '5px',
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
												top: '-5px',
												left: `${mirada2}px`,
												borderRadius: '100px 100px 100px 100px',
											}}
										>
											<AbsoluteFill
												style={{
													height: '45px',
													width: '45px',
													background: 'black',
													top: '2px',
													left: '3px',
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
															top: '5px',
															left: '12px',
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
							<AbsoluteFill style={{top: `${ojosTop}%`}}>
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
								</div>
							</AbsoluteFill>
						</div>
					</AbsoluteFill>
				</div>




			</AbsoluteFill>
		</div>
	);
};

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

export const Baile: React.FC = () => {
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




	const parpadear = interpolate(frame, [0,5,6,10],[40,0,0,40], {extrapolateRight: 'clamp'} )

	const parpadearTop = interpolate(frame, [0,5,6,10],[60,80,80,60], {extrapolateRight: 'clamp'} )

	const ojosTop = interpolate(frame, [0,5,6,10],[0,1,1,0], {extrapolateRight: 'clamp'} )

	const rotacionOrejaDerecha = interpolate(frame, [0,5,6,10],[0,15,15,0], {extrapolateRight: 'clamp'} )

	const rotacionOrejaIzquierda = interpolate(frame, [0,5,6,10],[0,-15,-15,0], {extrapolateRight: 'clamp'} )



  const danceLeft = interpolate(frame, [0,10,20,50,60,70],[0,50,50,-50,-50,0], {extrapolateRight: 'clamp'} )

	const danceTop = interpolate(frame, [0,5,10,15,20,25,30,35],[210,180,210,180,210,210,210,210], {extrapolateRight: 'clamp'} )

  const danceHeight = interpolate(frame, [0,5,10,20  ,21,30,   31,60,   65,70      ],[210,180,  210,210,  210,180,  180,210,  180,210      ], {extrapolateRight: 'clamp'} )

  const dance = interpolate(frame, [0,10,20,50,60,70],[0,-15,-15,15,15,0], {extrapolateRight: 'clamp'} )





	return (
		<div className="gato">
			<AbsoluteFill 
			style={{
				left: `${danceLeft}px`,
				transform: `skew(${dance}deg)`,
			}}>




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
							transform: `rotate(${rotacionOrejaIzquierda}deg)`
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
							transform: `rotate(${rotacionOrejaDerecha}deg)`
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
	
						<AbsoluteFill 
						style={{left: '10px',
						top:`${ojosTop}px`,
					}}>

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
											left: `2px`,
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
											left: `-3px`,
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

						<AbsoluteFill
						style={{						top:`${ojosTop}%`}}
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
		</div>
	);
};

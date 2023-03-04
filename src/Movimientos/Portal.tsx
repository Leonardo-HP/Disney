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

export const Portal: React.FC = () => {
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

	const PortalEntrada = interpolate(frame, [0,5,90,95],[0,1,1,0], {extrapolateRight: 'clamp'} )
	const PortalEntradaRotacion = interpolate(frame, [0,95],[0,900], {extrapolateRight: 'clamp'} )

	return (
		<AbsoluteFill>
			<div
				style={{
					translate: '1250px 500px',
				}}
			>
				<div
					style={{
						translate: '0px 40px',
            transform: `scale(${PortalEntrada})` ,
						height: 80,
						width: 20,
						borderRadius: '  100% 100% 100% 100% ',
            overflow: 'hidden',
			
					}}
				>
<div
style={{
  translate: '-25px 0px',
  transform: `rotate(${PortalEntradaRotacion}deg)    ` ,
  height: 80,
  width: 80,
  
  borderRadius: '  100% 100% 100% 100% ',
  background: 'linear-gradient(50deg, #1c9000 0%, #fffb86 100%)',
}}
/>


</div>

			</div>
		</AbsoluteFill>
	);
};

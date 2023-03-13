import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import { Prueba } from './Prueba';


export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={2000}
				fps={30}
				width={1280}
				height={720}
			/>
						<Composition
				id="Prueba"
				component={Prueba}
				durationInFrames={2000}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};

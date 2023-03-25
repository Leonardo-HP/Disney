import {Composition} from 'remotion';
import { Anuncio } from './Anuncio';
import {MyComposition} from './Composition';
import { CompositionReddit } from './CompositionReddit';
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


<Composition
				id="Anuncio"
				component={Anuncio}
				durationInFrames={1360}
				fps={30}
				width={1280}
				height={720}
			/>
	

<Composition
				id="Reddit"
				component={CompositionReddit}
				durationInFrames={1200}
				fps={30}
				width={1280}
				height={720}
			/>
				</>

	);
};

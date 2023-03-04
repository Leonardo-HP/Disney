import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import { MyComposition2 } from './Composition2';

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
				id="MyComp2"
				component={MyComposition2}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};

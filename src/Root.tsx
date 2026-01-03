/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import {CalculateMetadataFunction, Composition, getInputProps} from 'remotion';
import './style.css';

import {getUserStats} from './functions/setup';
import {Config, MainProps, mainSchema} from './config';
import {defaultStats} from './defaultStats';
import {Card} from './components/Effects/Card';
import {cards} from './components/Cards';

const {FPS, DurationInFrames} = Config;

export const RemotionRoot = () => {
	const calculateMetadata: CalculateMetadataFunction<MainProps> = async (
		props
	) => {
		const {usernames} = getInputProps();
		const userStats = await getUserStats(usernames as string[]);

		return {
			props: {
				...props,
				userStats,
			},
		};
	};

	return (
		<>
			{cards.map(({id, component: Component, height, width = 500}) => (
				<Composition
					key={id}
					id={id}
					component={(props) => (
						<Card userStats={props.userStats}>
							<Component userStats={props.userStats} />
						</Card>
					)}
					durationInFrames={DurationInFrames}
					fps={FPS}
					width={width}
					height={height}
					schema={mainSchema}
					calculateMetadata={calculateMetadata}
					defaultProps={{
						userStats: defaultStats,
					}}
				/>
			))}
		</>
	);
};

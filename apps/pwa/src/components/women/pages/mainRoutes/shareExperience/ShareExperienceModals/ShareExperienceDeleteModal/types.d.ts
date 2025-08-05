import { ShareExperienceDeleteModuleProps } from '../../ShareExperienceModules/ShareExperienceDeleteModule/types';

export type QueriesDataTypes = ShareExperienceDeleteModuleProps;

export type DeleteModalScriptsTypes = { [string in QueriesDataTypes['type']]: { title: string; description: string } };

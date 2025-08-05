import { ShareExperienceResponseTypes } from '../useShareExperienceGetData/types';

export type TopicsListTypes = Pick<ShareExperienceResponseTypes, 'topics'>['topics'] | undefined;

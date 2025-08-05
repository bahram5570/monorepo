import { ExperiencesResponseTypes } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';

export type ProfileType = Pick<ShareExperenceProfileResponsePropsType, 'profile'>['profile'];
export type IdType = Pick<ProfileType, 'id'>;
export type SelfType = Pick<ShareExperenceProfileResponsePropsType, 'isSelf'>;

export interface UseActivitiesDataPropsType extends IdType {}

export type selfType = Pick<ShareExperenceProfileResponsePropsType, 'activities'>['activities'];

export type QueryExperiencesDataTypes = Pick<ExperiencesResponseTypes, 'expirences'>;

export type SelfExperienceDataType = {
  totalCount: number;
  list: selfType;
};

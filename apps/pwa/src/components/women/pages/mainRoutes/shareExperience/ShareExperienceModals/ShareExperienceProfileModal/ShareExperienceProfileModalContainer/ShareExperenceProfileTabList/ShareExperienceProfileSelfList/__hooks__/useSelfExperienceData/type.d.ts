import { ExperiencesResponseTypes } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';

import { ShareExperenceProfileResponsePropsType } from '../../../../__hooks__/useGetData/type';

export type ProfileType = Pick<ShareExperenceProfileResponsePropsType, 'profile'>['profile'];
export type IdType = Pick<ProfileType, 'id'>;
export type SelfType = Pick<ShareExperenceProfileResponsePropsType, 'isSelf'>;

export interface UseSelfExperienceDataPropsType extends IdType, SelfType {}

export type selfType = Pick<ShareExperenceProfileResponsePropsType, 'activities'>['activities'];

export type QuerySelfExperiencesDataTypes = Pick<ExperiencesResponseTypes, 'expirences'>;

export type SelfExperienceDataType = {
  totalCount: number;
  list: selfType;
};

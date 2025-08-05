import { ShareExperienceProfileTopPartPropsType } from '../type';

type ItemType = Pick<ShareExperienceProfileTopPartPropsType, 'followCount' | 'storyCount'>;

export interface ProfileInfoPropsType extends ItemType {}

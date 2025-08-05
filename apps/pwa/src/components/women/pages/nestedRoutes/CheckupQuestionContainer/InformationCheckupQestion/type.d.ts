import { externalLink } from '@utils/navigation';

import { ResponsePropsType } from '../__hooks__/useGetData/type';

type InfoType = Pick<Pick<ResponsePropsType, 'data'>['data'], 'information'>;

export interface InformationCheckupQestionPropsType extends InfoType {}

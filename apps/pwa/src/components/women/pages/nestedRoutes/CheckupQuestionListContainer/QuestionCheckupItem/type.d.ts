import { ResponsePropsType } from '../../PregnancyCheckup/PregnancyCheckupContainer/__hooks__/useGetData/type';

type SegmentTypes = Pick<ResponsePropsType, 'segments'>['segments'][0];

type WeekType = Pick<SegmentTypes, 'weeks'>['weeks'][0];

type ItemType = Pick<WeekType, 'items'>['items'][0];

export interface QuestionCheckupItemPropsType extends ItemType {}

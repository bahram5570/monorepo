import { ResponsePropsType, SegmentType } from '../__hooks__/useGetData/type';

type ItemsTypes = Pick<ResponsePropsType, 'segments'>['segments'][0];

export interface SegmentGeneratorPropsType extends ItemsTypes {}

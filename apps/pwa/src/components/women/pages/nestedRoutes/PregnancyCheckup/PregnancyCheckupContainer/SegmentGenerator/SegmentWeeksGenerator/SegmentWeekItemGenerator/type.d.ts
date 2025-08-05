import { WeekGeneratorPropsType } from '../../WeeksGenerator/type';
import { SegmentGeneratorPropsType } from '../../type';

type ItemTypes = Pick<SegmentGeneratorPropsType, 'weeks'>['weeks'][0];

export interface WeekItemGeneratorPropsType extends ItemTypes {}

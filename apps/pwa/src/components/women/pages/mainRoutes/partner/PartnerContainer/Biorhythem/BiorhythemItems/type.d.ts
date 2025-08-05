import { BiorhythmPropsType } from '../type';

type ItemType = Pick<BiorhythmPropsType, 'bioRhythemWidget'>['bioRhythemWidget'];
type DataType = Pick<ItemType, 'data'>['data'];

export interface BiorhythmItemsPropsType extends DataType {}

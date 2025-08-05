import { HistoryChatResponsiveType } from '../__hooks__/useGetHistoryChatData/type';

type ItemType = Pick<HistoryChatResponsiveType, 'emptyStateTitle' | 'emptyStateMessage'>;
export interface EmptyStatePropsType extends ItemType {}

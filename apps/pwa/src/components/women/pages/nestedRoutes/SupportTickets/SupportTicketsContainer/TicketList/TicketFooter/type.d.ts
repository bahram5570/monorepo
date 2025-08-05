import { TicketListPropsType } from '../type';

type ItemType = Pick<TicketListPropsType, 'id' | 'title'>;

export interface TicketFooterPropsType extends ItemType {}

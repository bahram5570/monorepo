import { TicketcategoryResponseType } from '../type';

type itemType = Pick<TicketcategoryResponseType, 'id' | 'items' | 'tickets' | 'title'>;

export interface TicketListPropsType extends itemType {}

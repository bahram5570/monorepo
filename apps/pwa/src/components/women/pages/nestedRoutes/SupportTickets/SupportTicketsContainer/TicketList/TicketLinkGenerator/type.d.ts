import { TicketListPropsType } from '../type';

type ItemType = Pick<TicketListPropsType, 'items'>['items'][0];

export interface TicketLinkGeneratorPropsType extends ItemType {}

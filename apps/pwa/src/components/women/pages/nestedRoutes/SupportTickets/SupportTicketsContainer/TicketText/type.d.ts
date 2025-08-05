import { TicketListPropsType } from '../TicketList/type';

type ItemType = Pick<TicketListPropsType, 'tickets'>['tickets'][0];

export interface TicketTextProps extends ItemType {}

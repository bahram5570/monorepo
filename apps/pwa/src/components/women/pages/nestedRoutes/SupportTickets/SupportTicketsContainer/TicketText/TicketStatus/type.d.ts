import { TicketTextProps } from '../type';

type StatusType = Pick<TicketTextProps, 'statusColor' | 'statusText' | 'status'>;

export interface TicketStatusPropsType extends StatusType {}

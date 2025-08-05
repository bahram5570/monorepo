import { TicketcategoryResponseType } from '../type';

type urlType = Pick<TicketcategoryResponseType, 'url'>;

export interface WebViewPropsType extends urlType {}

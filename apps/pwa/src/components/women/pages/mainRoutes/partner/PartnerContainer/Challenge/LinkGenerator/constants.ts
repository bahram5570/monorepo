import BookOpenTextIcon from '@assets/icons/BookOpenText.svg';
import ClockCounterClockwiseIcon from '@assets/icons/ClockCounterClockwise.svg';
import Message from '@assets/icons/message.svg';

import { PartnerLinklistType } from './type';

export const PARTNER_LINK_LIST: PartnerLinklistType[] = [
  { Icon: Message, link: '/protected/partner/message', name: 'پیام' },
  { Icon: BookOpenTextIcon, link: '/protected/partner/memory', name: 'خاطره بازی' },
  { Icon: ClockCounterClockwiseIcon, link: '/protected/partner/history', name: 'تاریخچه' },
];

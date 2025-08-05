import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { NameSelectorTabsEnum } from './enum';

export const NAME_SELECTOR_TABINDEX_QUERY_NAME = 'tabIndex';
export const NAME_SELECTOR_HEADING_WIDTH = 5 * MAX_SCREEN_WIDTH;
export const NAME_SELECTOR_HEADING_HEIGHT = '220px';

export const NAME_SELECTOR_TABS_LIST = [
  { title: 'علاقه‌مندی‌ها', tab: NameSelectorTabsEnum.Favorites },
  { title: 'همه نام‌ها', tab: NameSelectorTabsEnum.All },
  { title: 'پیشنهادها', tab: NameSelectorTabsEnum.Suggestion },
];

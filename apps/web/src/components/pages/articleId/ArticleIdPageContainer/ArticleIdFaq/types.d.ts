import { ArticleIdPageContainerTypes } from '../types';

type ItemsTypes = Pick<ArticleIdPageContainerTypes, 'faqs'>;
export interface ArticleIdFaqTypes extends ItemsTypes {}

type FaqTypes = Pick<ItemsTypes, 'faqs'>['faqs'][0];
export interface ArticleIdFaqGeneratorTypes extends FaqTypes {
  selectedItem: string;
  selectedItemHandler: (id: string) => void;
}

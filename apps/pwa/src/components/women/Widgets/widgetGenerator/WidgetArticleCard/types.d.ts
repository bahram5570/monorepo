import { ArticleCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetArticleCardProps extends Pick<ArticleCardTypes, 'data'> {}

type ItemsTypes = Pick<WidgetArticleCardProps, 'data'>['data']['items'][0];

export interface ArticleGeneratorProps extends ItemsTypes {}

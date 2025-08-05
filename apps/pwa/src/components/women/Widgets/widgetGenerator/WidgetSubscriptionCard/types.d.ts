import { WidgetSubscriptionCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

export interface WidgetSubscriptionCardProps extends Pick<WidgetSubscriptionCardTypes, 'data'> {}

type HeadlineButtonTypes = Pick<WidgetSubscriptionCardProps, 'data'>['data']['headlineButton'];

export interface WidgetSubscriptionHeadlineBtnProps extends HeadlineButtonTypes {}

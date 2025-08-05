import { WidgetOvulationHistoryCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

type DetailTypes = Pick<WidgetOvulationHistoryCardTypes, 'data'>['data']['items'][0]['details'][0];
export interface TestGeneratorProps extends DetailTypes {}

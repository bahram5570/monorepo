import { useEffect } from 'react';

import Button from '@components/ui/Button';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { PERIOD_CYCLE_HISTORY_VIEW_ALL } from './constants';
import { WidgetPeriodCycleHistoryViewAllProps } from './types';

const WidgetPeriodCycleHistoryViewAll = ({ data }: WidgetPeriodCycleHistoryViewAllProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQuery, removeQuery } = useCustomReactQuery([PERIOD_CYCLE_HISTORY_VIEW_ALL], { gcTime: 60 * 5 * 1000 });

  useEffect(() => {
    removeQuery({ queryKey: [PERIOD_CYCLE_HISTORY_VIEW_ALL] });
  }, []);

  const linkToHandler = () => {
    newQuery({ queryKey: [PERIOD_CYCLE_HISTORY_VIEW_ALL], payload: data });

    pageNavigationHandler({
      showProgressBar: true,
      id: 'WidgetPeriodCycleHistoryViewAll',
      linkTo: '/protected/periodCycleHistoryViewAll',
    });
  };

  return (
    <Button size="medium" color="surface" variant="fill" className="mt-2" onClick={linkToHandler}>
      مشاهده همه دوره‌های گذشته
    </Button>
  );
};

export default WidgetPeriodCycleHistoryViewAll;

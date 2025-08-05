import { useEffect } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { BABY_CHECK_HISTORY_CARD_VIEW_ALL } from './constants';
import { WidgetBabyCheckHistoryCardViewAllProps } from './types';

const WidgetBabyCheckHistoryCardViewAll = ({ data }: WidgetBabyCheckHistoryCardViewAllProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQuery, removeQuery } = useCustomReactQuery([BABY_CHECK_HISTORY_CARD_VIEW_ALL], { gcTime: 60 * 5 * 1000 });

  useEffect(() => {
    removeQuery({ queryKey: [BABY_CHECK_HISTORY_CARD_VIEW_ALL] });
  }, []);

  const linkToHandler = () => {
    newQuery({ queryKey: [BABY_CHECK_HISTORY_CARD_VIEW_ALL], payload: data });

    pageNavigationHandler({
      showProgressBar: true,
      id: BABY_CHECK_HISTORY_CARD_VIEW_ALL,
      linkTo: '/protected/babyCheckHistoryCardViewAll',
    });
  };

  return (
    <Button
      size="medium"
      variant="fill"
      className="mt-2"
      color="FREE-STYLES"
      onClick={linkToHandler}
      buttonColor={colorFormatConverter(data.button.backgroundColor)}
      contentsColor={colorFormatConverter(data.button.foregroundColor)}
    >
      {data.button.text}
    </Button>
  );
};

export default WidgetBabyCheckHistoryCardViewAll;

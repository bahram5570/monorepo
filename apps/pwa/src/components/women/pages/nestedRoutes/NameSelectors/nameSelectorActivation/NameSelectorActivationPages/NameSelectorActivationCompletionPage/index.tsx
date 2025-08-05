'use client';

import ProgressCycleLoading from '@components/ProgressCycleLoading';
import useRouteSequence from '@hooks/useRouteSequence';
import useTheme from '@hooks/useTheme';

import { NAME_SELECTOR_TABINDEX_QUERY_NAME } from '../../../nameSelector/NameSelectorLayout/constants';
import { NameSelectorTabsEnum } from '../../../nameSelector/NameSelectorLayout/enum';
import useNameSelectorActivationSubmit from '../../__hooks__/useNameSelectorActivationSubmit';

const NameSelectorActivationCompletionPage = () => {
  const { colors } = useTheme();
  const { sequenceHandler } = useRouteSequence();
  const { isSuccess } = useNameSelectorActivationSubmit();

  const completeHandler = () => {
    sequenceHandler([
      `/protected/cycle?dummyData=${Math.random()}`,
      `/protected/cycle?dummyData=${Math.random()}`,
      `/protected/cycle?dummyData=${Math.random()}`,
      `/protected/nameSelector?${NAME_SELECTOR_TABINDEX_QUERY_NAME}=${NameSelectorTabsEnum.Suggestion}`,
    ]);
  };

  return (
    <ProgressCycleLoading
      isSuccess={isSuccess}
      circleColor={colors.White}
      onComplete={completeHandler}
      backgroundColor={colors.Transparent}
      image={'/assets/images/selectName.webp'}
      titles={{
        main: 'در حال ساخت و پردازش یک لیست از اسامی خاص، متناسب با فیلترهای انتخابی‌ات هستیم',
        subTitle1: 'فقط چند ثانیه بهمون زمان بده ',
        subTitle2: 'تا لیست پیشنهادی رو بسازیم',
      }}
    />
  );
};

export default NameSelectorActivationCompletionPage;

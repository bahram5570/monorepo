'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import Icon1 from '@assets/icons/careers/value-1.svg';
import Icon2 from '@assets/icons/careers/value-2.svg';
import Icon3 from '@assets/icons/careers/value-3.svg';
import Icon4 from '@assets/icons/careers/value-4.svg';
import Icon5 from '@assets/icons/careers/value-5.svg';
import Icon6 from '@assets/icons/careers/value-6.svg';
import CustomTypography from '@components/ui/CustomTypography';

import ValuesBigScreen from './ValuesBigScreen';
import ValuesSmallScreen from './ValuesSmallScreen';
import { CareersValuesItemTypes } from './types';

const list: CareersValuesItemTypes[] = [
  { title: 'احترام', description: 'احترام شرط اول برای اینه که بتونیم کنار هم کار کنیم', Icon: Icon1 },
  {
    title: 'از خودگذشتگی و مهربانی',
    description: 'مهربانی ایمپو برای کاربرانش از مهربانی در محیط کار شروع میشه',
    Icon: Icon2,
  },
  { title: 'صمیمیت', description: 'بهترین ساعات عمرمون کنار همیم، پس صمیمیت بینمون مهمه', Icon: Icon3 },
  { title: 'همدلی', description: 'ما تو غم و شادی‌ هم شریکیم بدون ترس از قضاوت کنار همیم ', Icon: Icon4 },
  { title: 'شفافیت و پاسخگویی', description: 'چون شفافیت کلید جلوگیری از همه سوء تفاهم‌هاست', Icon: Icon5 },
  { title: 'انعطاف پذیری', description: 'چون قوانین  و روابط خشک دشمن استارتاپ‌هاست', Icon: Icon6 },
];

const CareersValues = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="w-full flex flex-col items-center pt-4 md:pt-8 pb-9 md:pb-12">
      <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'} className="pb-4 md:pb-6">
        ارزش‌های ایمپو
      </CustomTypography>

      {breakPoint.tablet ? <ValuesSmallScreen list={list} /> : <ValuesBigScreen list={list} />}
    </div>
  );
};

export default CareersValues;

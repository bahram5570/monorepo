import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import useGetPartnerName from './__hooks__/useGetPartnerName';

const NotData = () => {
  const { colors } = useTheme();
  const { partnerName } = useGetPartnerName();
  const { pageNavigationHandler } = usePageNavigationLoading();
  return (
    <div className="p-3 flex flex-col gap-4 min-h-screen" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
      <CustomImage src="/assets/images/memory.webp" />
      <div className="flex flex-col p-3 items-center gap-1">
        <Typography size="Small" scale="Headline" textAlign="center">
          خاطره بازی روزهای زیبا
        </Typography>
        <Typography size="Small" scale="Body" textAlign="center" className="p-2">
          {`روزهای خوب، فقط خاطره‌های قشنگشه که میمونه😍 میتونی اینجا خاطرات قشنگت رو با ${partnerName?.name} به اشتراک بذاری و هر دو از دیدنش لذت ببرین💕`}
        </Typography>
      </div>
      <Link
        href={'/protected/memory/createMemory'}
        onClick={() => pageNavigationHandler({ id: 'memory', showProgressBar: true })}
        className="mt-auto mb-4"
      >
        <div className="flex flex-row items-center gap-1 justify-center ">
          <div
            className="px-6 py-3 flex justify-end items-center rounded-full"
            style={{ background: colors.PrimaryWoman_Primary }}
          >
            <Typography scale="Title" size="Small" color="PrimaryMan_OnPrimaryMan">
              خاطره بازی رو شروع کن
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotData;

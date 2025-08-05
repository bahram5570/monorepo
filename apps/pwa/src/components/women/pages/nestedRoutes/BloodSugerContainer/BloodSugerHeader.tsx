import BloodSugerIcon from '@assets/icons/blood_suger.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

const BloodSugerHeader = () => {
  const { colors } = useTheme();

  return (
    <div
      className="flex fixed z-40 flex-row-reverse items-center justify-between px-4 gap-4 pb-3"
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: '80px', background: colors.White }}
    >
      <div className="flex flex-col gap-1 items-end">
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          تست دیابت بارداری
        </Typography>
        <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
          میزان قندخون و زمانی که اندازه گرفتی رو وارد کن تا بهت توصیه مورد نظر رو بدیم
        </Typography>
      </div>

      <div
        className="w-[72px] h-[72px] flex justify-center items-center rounded-full"
        style={{
          backgroundColor: colors.Orange_50,
        }}
      >
        <BloodSugerIcon className="w-9 h-12" />
      </div>
    </div>
  );
};

export default BloodSugerHeader;

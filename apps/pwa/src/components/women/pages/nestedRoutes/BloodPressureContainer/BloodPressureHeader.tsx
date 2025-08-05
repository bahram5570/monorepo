import BloodPressureIcon from '@assets/icons/Blood_Pressure.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

const BloodPressureHeader = () => {
  const { colors } = useTheme();
  return (
    <div
      className="flex fixed z-40 flex-row-reverse items-center justify-between px-4 gap-4 pb-3"
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: '80px', background: colors.White }}
    >
      <div className="flex flex-col gap-1 items-end">
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          تست فشارخون بارداری
        </Typography>
        <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
          عدد فشارخون که اندازه گرفتی رو وارد کن تا بهت توصیه مورد نظر رو بدیم
        </Typography>
      </div>

      <div
        className="w-[72px] h-[72px] flex justify-center items-center rounded-full"
        style={{
          backgroundColor: colors.Blue_50,
        }}
      >
        <BloodPressureIcon className="w-9 h-12" />
      </div>
    </div>
  );
};

export default BloodPressureHeader;

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

const NotData = () => {
  return (
    <div className="flex relative z-0 flex-col items-center gap-6  min-h-[100dvh] justify-center">
      <CustomImage src="/assets/images/ticketsHistoryEmptyList.webp" width={106} height={140} />
      <Typography scale="Body" size="Medium">
        هنوز چالشی رو با پارتنرت انجام ندادی
      </Typography>
    </div>
  );
};

export default NotData;

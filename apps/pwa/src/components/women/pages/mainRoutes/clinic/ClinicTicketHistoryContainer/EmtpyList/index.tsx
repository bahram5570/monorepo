import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

const EmptyList = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-[20dvh]">
      <CustomImage src="/assets/images/ticketsHistoryEmptyList.webp" width={105} />

      <Typography scale="Body" size="Medium">
        شما تا به حال مشاوره فعالی نداشته‌اید
      </Typography>
    </div>
  );
};

export default EmptyList;

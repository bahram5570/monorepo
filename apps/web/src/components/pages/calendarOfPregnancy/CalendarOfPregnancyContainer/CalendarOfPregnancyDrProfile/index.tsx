import BlueTickIcon from '@assets/icons/blueTick.svg';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const CalendarOfPregnancyDrProfile = () => {
  return (
    <div className="flex gap-3 my-4">
      <div className="relative w-16 h-16">
        <CustomImage
          className="rounded-full object-cover"
          alt="doctorMahban"
          src="/assets/images/doctorMahban.webp"
          sizes="64px"
          fill={true}
        />
      </div>

      <div className="flex flex-col justify-center gap-2">
        <div className="flex items-center gap-1">
          <CustomTypography fontSize="Lable_Medium"> بازبینی توسط دکترمهبان پروانه‌حسینی</CustomTypography>
          <BlueTickIcon className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default CalendarOfPregnancyDrProfile;

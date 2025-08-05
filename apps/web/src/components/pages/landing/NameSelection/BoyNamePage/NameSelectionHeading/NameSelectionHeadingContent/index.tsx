import CustomTypography from '@components/ui/CustomTypography';

const NameSelectionHeadingContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
      <CustomTypography
        tagType="h1"
        fontSize="Headline_Medium"
        color={'Neutral_OnBackground'}
        className="py-2 lg:pt-2 lg:pb-1 text-center md:text-left"
      >
        انتخاب اسم پسر؛ قصه شروع یک مسیر جدید
      </CustomTypography>

      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        color={'Surface_InverseSurface'}
        className="text-center lg:text-right"
      >
        اسم پسر فقط یک واژه نیست، بلکه نشانه‌ای از هویت، ریشه‌ها و رویاهای والدینه. انتخاب اسم پسرانه باید خوش‌آوا،
        معنادار و هماهنگ با فرهنگ و ارزش‌های خانواده باشه. در این راهنما، با مجموعه‌ای از اسم پسر کمیاب، شنیدنی و
        ماندگار آشنا می‌شی تا این انتخاب مهم، برات ساده‌تر، مطمئن‌تر و لذت‌بخش‌تر بشه.
      </CustomTypography>
    </div>
  );
};

export default NameSelectionHeadingContent;

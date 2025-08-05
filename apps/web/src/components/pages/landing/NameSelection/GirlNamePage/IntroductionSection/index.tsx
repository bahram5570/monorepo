import CustomTypography from '@components/ui/CustomTypography';

const IntroductionSection = () => {
  return (
    <div className="flex justify-start flex-col">
      <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'} className="pb-5">
        ابزار آنلاین انتخاب اسم دختر اپلیکیشن ایمپو
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'}>
        با ابزار انتخاب اسم دختر در اپلیکیشن ایمپو، روند انتخاب اسم برای فرزند شما خیلی ساده‌تر و لذت‌بخش‌تر شده. وقتی
        وارد بخش بارداری ایمپو می‌شی، یه بنر جذاب و کاربردی با عنوان «انتخاب اسم» برات نمایش داده می‌شه. با یک کلیک روی
        این بنر، وارد صفحه اختصاصی انتخاب اسم می‌شی.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'}>
        در ادامه، چندتا سوال ساده و مهم داری که بهت کمک می‌کنه انتخاب اسم رو کاملا شخصی‌سازی کنی. بعد از پاسخ دادن به
        این سوال‌ها، ایمپو به‌صورت هوشمند و دقیق، فهرستی از اسامی دخترانه زیبا، خاص و متناسب با معیارهای تو پیشنهاد
        می‌ده. اگر دلت خواست می‌تونی فیلترها رو تغییر بدی یا اضافه کنی و به هزاران اسم جدید دسترسی داشته باشی و بینشون
        گشت بزنی.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'}>
        اسمی که دوست داشتی رو می‌تونی لایک و ذخیره کنی تا هر وقت خواستی به راحتی برگردی و دوباره ببینی. با اپلیکیشن
        ایمپو می‌تونی بدون سردرگمی و پیچیدگی، با چند کلیک بهترین اسم رو پیدا کنی.
      </CustomTypography>
    </div>
  );
};

export default IntroductionSection;

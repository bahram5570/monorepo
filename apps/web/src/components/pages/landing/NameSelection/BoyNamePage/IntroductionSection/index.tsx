import CustomTypography from '@components/ui/CustomTypography';

const IntroductionSection = () => {
  return (
    <div className="flex justify-start flex-col">
      <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'} className="pb-5">
        ابزار آنلاین انتخاب اسم پسر در اپلیکیشن ایمپو
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'}>
        ابزار انتخاب اسم پسر در اپلیکیشن ایمپو، مسیر انتخاب اسم رو برات آسون‌تر، سریع‌تر و خیلی لذت‌بخش‌تر کرده. وقتی
        وارد بخش بارداری می‌شی، با یه بنر جذاب با عنوان «انتخاب اسم پسر» روبه‌رو میشی. با یه کلیک، وارد صفحه‌ای می‌شی که
        چند تا سوال ساده ازت می‌پرسه تا بدون پیچیدگی، بفهمه دنبال چه نوع اسمی هستی. ایمپو یه لیست از اسم‌های پسرانه خاص،
        خوش‌آوا و با معنی، متناسب با سلیقه و معیارهای خودت بهت پیشنهاد می‌ده.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'}>
        اگه خواستی، می‌تونی فیلترها رو تغییر بدی یا کلی اسم دیگه ببینی و بینشون بچرخی. یه قابلیت خوب دیگه هم اینه که
        اسامی بر اساس حروف الفبا دسته‌بندی شدن. کافیه روی یه حرف بزنی تا کلی اسم متنوع ببینی. هر اسمی رو هم که دوست
        داشتی، می‌تونی لایک یا ذخیره کنی تا هر وقت خواستی راحت برگردی سراغش. با ایمپو، پیدا کردن اسم پسر دل‌خواهت، یه
        تصمیم ساده و شیرین می‌شه.
      </CustomTypography>
    </div>
  );
};

export default IntroductionSection;

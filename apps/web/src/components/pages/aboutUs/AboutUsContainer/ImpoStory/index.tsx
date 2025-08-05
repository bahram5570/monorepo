import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const ImpoStory = () => {
  return (
    <div className=" px-4 md:px-0 mt-auto   md:w-8/12 lg:w-6/12 w-full  my-5">
      <CustomTypography
        className="mx-auto w-full flex justify-center items-center sm:mt-[30px] sm:mb-[30px] mt-[20px] mb-[30px]"
        fontSize="Headline_Medium"
      >
        داستان ایمپو
      </CustomTypography>
      <div className="flex flex-col justify-center items-center ">
        <CustomImage
          src="/assets/images/aboutUs/2.jpg"
          alt="aboutUs"
          fill
          className="object-contain  w-full h-auto !relative rounded-lg"
        />

        <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground" className="p-4 !leading-9 text-justify">
          ایده اولیه اپلیکیشن ایمپو در تابستان 1398 شکل گرفت. وقتی که مساله پریود کاملا یک تابو محسوب میشد و کمتر خانمی
          بود که مراقبت های لازم از خودش رو در این دوره مهم و حیاتی انجام بده. ایمپو با شعار Iam important (من مهم هستم)
          و با هدف ایجاد یک تقویم فارسی قاعدگی برای پیش بینی زمان پریود، دوره پیش از قاعدگی و دوره باروری شروع به کار
          کرد تا از پیچیدگی و خطاهای احتمالی در محاسبه زمان پریود کم کنه، اما از همون ابتدا تمام تلاشمون این بود که
          ایمپو فراتر از یک تقویم قاعدگی باشه و همه نکات مربوط مراقبت جسمانی و روانی رو به کاربرانمون یادآوری کنیم. بعد
          از انتشار اولین نسخه ایمپو در پاییز 1398، تیم ایمپو با اضافه کردن ویژگی هایی مثل کلینیک و مشاوره آنلاین و
          همچنین انتشار ایمپو آقایان با هدف بهبود رابطه بین زوجین و همچنین خودمراقبتی آقایان گستره فعالیت های خودش رو
          توسعه و بهبود داد. در حال حاضر ایمپو با بیش از یک میلیون کاربر، بزرگترین پلتفرم حوزه سلامت بانوان به حساب میره
          و یک تیم جوان، خلاق و متخصص هر روز در جهت خدمت رسانی به زنان و مردان این سرزمین برای رسیدن به صلح با خودشون و
          جهان پیرامونشون تلاش میکنن.
        </CustomTypography>
      </div>
    </div>
  );
};

export default ImpoStory;

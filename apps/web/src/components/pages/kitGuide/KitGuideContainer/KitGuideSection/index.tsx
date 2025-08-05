import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const KitGuideSection = () => {
  return (
    <div style={{ background: COLORS_LIST.Surface_SurfaceVariant }} className="min-w-full px-4 py-5">
      <div className="rounded-xl mb-3 px-4 py-5" style={{ background: COLORS_LIST.White }}>
        <CustomTypography fontSize="Body_Medium" className="mb-3">
          برای انجام تست، باید موارد زیر رو در نظر داشته باشید :
        </CustomTypography>

        <div className="my-[18px] pr-[10px]">
          <CustomTypography fontSize="Lable_Large" className="mb-2">
            ۱. زمان مناسب کیت:
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium">
            ابتدا باید زمان مناسب انجام کیت رو پیدا کنید به عبارتی این تست باید در زمان مناسب ماه و روز انجام بشه. این
            روز رو باید بر اساس طول دوره قاعدگی پیدا کنید.
          </CustomTypography>
        </div>
        <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>
        <div className="my-[18px] pr-[10px]">
          <CustomTypography fontSize="Lable_Large" className="mb-2">
            ۲. نکات ضروری قبل از استفاده:
          </CustomTypography>
          <ol className="list-disc pr-4">
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">تست رو در محیط و با دمای طبیعی نگهداری کنید.</CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">قبل از انجام به تاریخ انقضای کیت توجه کنید.</CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                اگر بسته‌بندی کیت، آسیب‌دیده یا پاره بود، ازش استفاده نکنید.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                بعد از باز کردن بسته‌بندی، کیت حداکثر تا ۱۰ دقیقه قابل استفاده‌ست.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                از تماس و لمس بخش reaction pad (محلی که نتیجه نمونه رو می‌بینید) خودداری کنید.
              </CustomTypography>
            </li>
          </ol>

          <CustomImage
            src="/assets/images/kitGuide/img1.webp"
            alt="babyCheckGuideImg1"
            width={1496}
            height={416}
            className="-mt-9"
          />
        </div>

        <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>

        <div className="my-[18px] pr-[10px]">
          <CustomTypography fontSize="Lable_Large" className="mb-2">
            ۳. جمع‌آوری نمونه ادرار:
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" className="mb-2">
            برای انجام تست بهتره از نمونه ادرار در بازه زمانی ۱۰ صبح تا ۸ شب، استفاده کنید. استفاده از ادرار اول صبح
            اصلا توصیه نمیشه. بهتره در هر دوره در زمان معینی از روز تست رو انجام دهید (مثلا هر روز بین ساعت ۱۰ تا ۱۲
            صبح)
          </CustomTypography>
          <ol className="list-disc pr-[10px]">
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                ادرار رو در ظرفی تمیز و به ارتفاع ۱ تا ۱.۵ سانتی‌متر بریزید.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                نوار تست رو از سمت فلش در نمونه ادرار قرار دهید.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                سطح ادرار حداکثر باید تا خط مشخص شده باشه و از اون بیشتر نشه.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                نوار رو حدود ۱۰ ثانیه در نمونه ادرار قرار دهید.
              </CustomTypography>
            </li>
            <li className="mb-2">
              <CustomTypography fontSize="Body_Medium">
                نوار رو از نمونه خارج کرده و به‌صورت افقی در سطح صاف، خشک و تمیز قرار دهید.
              </CustomTypography>
            </li>
          </ol>
        </div>

        <CustomImage
          src={'/assets/images/kitGuide/banner.webp'}
          className="object-contain"
          alt="kitBanner"
          hasPreviewImage
          width={1496}
          height={416}
        />
      </div>
    </div>
  );
};

export default KitGuideSection;

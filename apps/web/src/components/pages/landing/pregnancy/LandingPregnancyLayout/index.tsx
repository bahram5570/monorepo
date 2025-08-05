import CtaBanner from '@components/CtaBanner';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { ctaBannerService } from '@services/ctaBannerServices';

import { LANDING_PREGNANCY_BANNER_NAME } from '../constants';

const LandingPregnancyLayout = async () => {
  const { ctaData } = await ctaBannerService(LANDING_PREGNANCY_BANNER_NAME);

  return (
    <div className="w-full flex flex-col gap-5 pt-10 px-4 sm:px-0">
      <CustomTypography tagType="h2" fontSize="Title_Medium">
        تست حاملگی آنلاین چیه؟
      </CustomTypography>

      <CustomTypography className="text-justify">
        تست حاملگی آنلاین ایمپو، شامل 12 تا سواله که به کمک جواب‌های شما، احتمال بارداری رو در سه حالت زیاد، کم و متوسط
        براتون محاسبه می‌کنه. این سوال‌ها در مورد علائم اولیه بارداری مثل
        <CustomLink href="/bleeding-nesting" color="Primary_Primary">
          خونریزی لانه‌گزینی،
        </CustomLink>
        حالت تهوع، خستگی،
        <CustomLink href="/late-period" color="Primary_Primary">
          عقب افتادن پریود
        </CustomLink>
        همچنین، داشتن رابطه جنسی محافظت نشده، احتمال بارداری رو خیلی زیاد می‌کنه. در این تست، تمامی عوامل مهمی که احتمال
        بارداری رو بالا می‌بره بررسی می‌شه؛ اما مهمه که بدونین همه خانم‌ها علائم مشابهی رو در اوایل بارداری تجربه
        نمی‌کنن. تست حاملگی آنلاین کاملا دقیق نیست و بیشتر جنبه آگاهی داره و به شما کمک می‌کنه تصمیم بگیرین چه زمانی از
        بی‌بی چک استفاده کنین.
      </CustomTypography>

      <div>
        <CustomTypography tagType="h3" fontSize="Title_Small">
          چه کسی باید تست آنلاین بارداری انجام بده؟
        </CustomTypography>

        <CustomTypography className="pt-4 pb-2">
          اگر یکی از شرایط زیر شامل حال شماست، بهتره تست حاملگی آنلاین رو انجام بدین:
        </CustomTypography>

        <ul>
          <CustomTypography className="list-disc mr-4" tagType="li">
            رابطه جنسی محافظت نشده داشتین و فکر می‌کنین باردار هستین.
          </CustomTypography>

          <CustomTypography className="list-disc mr-4" tagType="li">
            احساس می‌کنین علائم اولیه بارداری رو تجربه می‌کنین.
          </CustomTypography>

          <CustomTypography className="list-disc mr-4" tagType="li">
            احساس می‌کنین در هفته‌های اولیه بارداری هستین.
          </CustomTypography>

          <CustomTypography className="list-disc mr-4" tagType="li">
            پریودتون عقب افتاده.
          </CustomTypography>
        </ul>
      </div>

      <div>
        <CustomTypography tagType="h3" fontSize="Title_Small">
          تست حاملگی آنلاین چقدر دقیق و معتبره؟
        </CustomTypography>

        <CustomTypography className="text-justify pt-2">
          هیچ تست بارداری آنلاین رایگانی، صد در صد دقیق نیست و احتمال خطای بالایی داره؛ برای تشخیص قطعی بارداری باید
          حتما از بی بی چک استفاده کنین یا
          <CustomLink href="/hcg-blood-test" color="Primary_Primary">
            آزمایش خون بارداری
          </CustomLink>
          بدین. بنابراین تست آنلاین بارداری جایگزین
          <CustomLink href="/baby-check" color="Primary_Primary">
            بی بی چک
          </CustomLink>
          یست؛ با این حال، تست حاملگی آنلاین ایمپو، فاکتورهای مهمی مثل
          <CustomLink href="/pregnancy-symptoms" color="Primary_Primary">
            ریزترین علائم بارداری در هفته اول،
          </CustomLink>
          قب افتادن پریود و روش
          <CustomLink href="/contraception" color="Primary_Primary">
            پیشگیری از بارداری
          </CustomLink>
          رو بررسی می‌کنه تا بتونین برای زمان استفاده از بی بی چک تصمیم بگیرین. در مقاله بی بی چک روش استفاده و تفسیر
          نتیجه این تست رو کامل توضیح دادیم.
        </CustomTypography>
      </div>

      <div>
        <CustomTypography tagType="h3" fontSize="Title_Small">
          اپلیکیشن ایمپو چه کمکی بهت می‌کنه؟
        </CustomTypography>

        <CustomTypography className="text-justify pt-2">
          اگر هدفتون اقدام به بارداری یا پیشگیری از بارداری باشه، ایمپو بهتون کمک می‌کنه. مهم‌ترین نکته در پیشگیری یا
          اقدام، آگاهی از روز دقیق تخمک گذاریه. ایمپو برای شما تاریخ پریود، PMS و دوره باروری یا همون روز تخمک گذاری رو
          پیش‌بینی می‌کنه. اگر قصد اقدام به بارداری داشته باشین، ایمپو با ابزارهای مثل محاسبه شانس بارداری، کیت تخمک
          گذاری و توصیه‌های تخصصی، احتمال بارداری رو بالا میبره. اگر قصد پیشگیری از بارداری هم داشته باشین، ایمپو با
          توصیه‌های تخصصی، ابزار تفسیر بی‌بی چک و محاسبه دوره باروری، شانس بارداری ناخواسته رو کاهش میده.
        </CustomTypography>
      </div>

      {ctaData && <CtaBanner {...ctaData} />}
    </div>
  );
};

export default LandingPregnancyLayout;

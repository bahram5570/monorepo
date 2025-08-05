'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import { FONTS_ANDROID } from '@theme/fonts';

import CustomTypography from '@components/ui/CustomTypography';

import GuideContainer from '../GuideContainer';
import { StepsContentType } from '../GuideContainer/type';

const BabycheckTestContainer = () => {
  const { breakPoint } = useBreakPoint();

  const stepsContent: StepsContentType[] = [
    {
      imageUrl: '/assets/images/guide/babycheck-test/1.webp',
      title: ' به فرآیند انجام تست بیبی چک  خوش اومدی😍',
      description: (
        <CustomTypography fontSize="Body_Large" className={`${breakPoint.tablet && '!text-[14px]'}`}>
          اینجا قراره از انجام تست تا تفسیرش مرحله به مرحله کنارت باشیم
        </CustomTypography>
      ),
      btnText: 'شروع کنیم',
    },
    {
      imageUrl: '/assets/images/guide/babycheck-test/2.webp',
      title: ' مرحله 1: بعد از باز کردن کیت، فقط 10 دقیقه وقت داری!',
      description: (
        <CustomTypography fontSize="Body_Large" className={`${breakPoint.tablet && '!text-[14px]'}`}>
          کیت رو باید حداکثر تا 10 دقیقه بعد از باز کردن بسته‌بندی، استفاده کنی.
        </CustomTypography>
      ),
      btnText: 'بریم بعدی',
    },
    {
      imageUrl: '/assets/images/guide/babycheck-test/3.webp',
      title: ' مرحله 2:برای انجام تست چه مقدار ادرار باید داخل ظرف نمونه باشه؟',
      description: (
        <p style={{ ...FONTS_ANDROID.Body_Large }}>
          برای انجام آزمایش، یک ظرف یا لیوان یک‌بار مصرف تمیز رو فقط به اندازه
          <span style={{ ...FONTS_ANDROID.Lable_Large }}> ۱ تا ۱.۵ سانتی‌متر(یک بند انگشت)</span>از ادرار پر کن.
        </p>
      ),
      btnText: 'بریم بعدی',
    },
    {
      imageUrl: '/assets/images/guide/babycheck-test/4.webp',
      title: ' مرحله 3: چطور تست رو داخل نمونه قرار بدم و چقدر صبر کنم؟',
      description: (
        <p style={{ ...FONTS_ANDROID.Body_Large }}>
          نوار تست رو از سمت فلش در ظرف نمونه ادرار قرار بده، حواست باشه سطح ادرار نباید بالاتر از خط MAX بیاد. نوار تست
          باید به اندازه <span style={{ ...FONTS_ANDROID.Lable_Large }}>5 ثانیه</span> در نمونه باشه.
          <p>
            <span style={{ ...FONTS_ANDROID.Lable_Large }}>
              (برای اندازه‌گیری زمان، می‌تونی از زمان‌سنج موجود در این صفحه استفاده کنی)
            </span>
          </p>
        </p>
      ),
      btnText: 'حالا که تست رو انجام دادی، بریم برای تفسیرش',
      showTimer: true,
      timer: 5,
    },
    {
      imageUrl: '/assets/images/guide/babycheck-test/5.webp',
      title: 'مرحله 4: جواب کی مشخص میشه؟ توی این مدت چکار کنم؟',
      description: (
        <CustomTypography fontSize="Body_Large" className={`${breakPoint.tablet && '!text-[14px]'}`}>
          برای مشخص شدن جواب باید بین 3 تا 5 دقیقه صبر کنی. تو این مدت اپلیکیشن ایمپو رو دانلود کن تا بتونی تفسیر تخصصی
          کیت رو اونجا ببینی
        </CustomTypography>
      ),

      btnText: 'دانلود اپلیکیشن ایمپو',
    },
  ];

  return <GuideContainer stepsContent={stepsContent} />;
};

export default BabycheckTestContainer;

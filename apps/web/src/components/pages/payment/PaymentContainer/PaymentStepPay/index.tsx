'use client';

import { COLORS_LIST } from '@theme/colors';

import WhatsAppIcon from '@assets/icons/WhatsApp.svg';
import TelegramIcon from '@assets/icons/telegram2.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import useCopy from '../__hooks__/useCopy';
import { TELEGRAM_LINK, WHATSAPP_NUMBER } from '../constants';

const PaymentStepPay = () => {
  const { copylink } = useCopy();
  return (
    <div className="  flex flex-col gap-6 sm:justify-start justify-center sm:items-start items-center pt-20 md:pt-0  ">
      <CustomTypography fontSize="Title_Small">مراحل پرداخت:</CustomTypography>
      <div className="flex flex-col sm:justify-start justify-center sm:items-start items-center gap-3">
        <ol className="list-disc pr-4">
          <li className="mb-2">
            <CustomTypography fontSize="Body_Large">ورود به سایت Paypal</CustomTypography>
          </li>
          <li className="mb-2">
            <CustomTypography fontSize="Body_Large">حالا روی گزینه Send Money کلیک کن.</CustomTypography>
          </li>
          <li className="mb-2">
            <CustomTypography fontSize="Body_Large">
              آدرس ایمیل
              <u className="cursor-pointer" onClick={copylink}>
                sajjadiamirhossein30@gmail.com
              </u>
              رو وارد کن.
            </CustomTypography>
          </li>
          <li className="mb-2">
            <CustomTypography fontSize="Body_Large"> مبلغ مورد نظر رو وارد کن. </CustomTypography>
          </li>
          <li className="mb-2">
            <CustomTypography fontSize="Body_Large">اگه دوست داری میتونی توضیحات پرداخت رو اضافه کنی.</CustomTypography>
          </li>
          <li className="mb-2">
            <CustomTypography fontSize="Body_Large">روی گزینه Continue کلیک کن.</CustomTypography>
          </li>
          <li className="mb-2">
            <CustomTypography fontSize="Body_Large">اطلاعات کارت اعتباریت رو وارد کن.</CustomTypography>
          </li>
          <li className="mb-2">
            <CustomTypography fontSize="Body_Large"> و در نهایت روی گزینه Pay Now کلیک کن.</CustomTypography>
          </li>
        </ol>
      </div>

      <div className="  flex flex-col gap-6 sm:justify-start justify-center sm:items-start items-center pt-20 md:pt-0  ">
        <CustomTypography fontSize="Title_Small">قدم سوم:</CustomTypography>
        <CustomTypography fontSize="Body_Large">
          بعد از پرداخت، تصویر و مستندات پرداخت و همچنین شماره‌ای که با اون توی ایمپو ثبت‌نام کردید رو از طریق یکی از
          راه‌های زیر برامون ارسال کن:
        </CustomTypography>
        <div className="flex flex-col sm:flex-row gap-3">
          <CustomLink
            href={TELEGRAM_LINK}
            target="_blank"
            style={{ border: `1px solid ${COLORS_LIST.Neutral_Surface}`, color: COLORS_LIST.Primary_Primary }}
            className="flex items-center justify-center px-4 py-2 rounded-full my-4 gap-1"
          >
            <TelegramIcon className="w-[30px] h-auto" />
            <CustomTypography color="Neutral_OnSurface" fontSize="Body_Medium">
              ارتباط از طریق تلگرام
            </CustomTypography>
          </CustomLink>
          <CustomLink
            href={WHATSAPP_NUMBER}
            target="_blank"
            style={{ border: `1px solid ${COLORS_LIST.Neutral_Surface}`, color: COLORS_LIST.Primary_Primary }}
            className="flex items-center justify-center px-4 py-2 rounded-full my-4 gap-1"
          >
            <WhatsAppIcon style={{ fill: COLORS_LIST.Success_Success }} />
            <CustomTypography color="Neutral_OnSurface" fontSize="Body_Medium">
              ارتباط از طریق واتساپ
            </CustomTypography>
          </CustomLink>
        </div>
      </div>
      <div className="  flex flex-col gap-6 sm:justify-start justify-center sm:items-start items-center pt-20 md:pt-0  ">
        <CustomTypography fontSize="Title_Small">قدم چهارم:</CustomTypography>
        <CustomTypography fontSize="Body_Large">
          در کوتاه‌ترین زمان ممکن پشتیبانی ما پاسخ پیامت رو می‌ده و اکانتت فعال می‌شه.
        </CustomTypography>
      </div>
    </div>
  );
};

export default PaymentStepPay;

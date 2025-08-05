'use client';

import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import useCopy from '../__hooks__/useCopy';
import { PAYPAL_LINK } from '../constants';

const PaymentHeaderSection = () => {
  const { copylink } = useCopy();

  return (
    <div className="w-full  px-4 md:px-0  text-center " style={{ background: COLORS_LIST.Neutral_Surface }}>
      <div className=" lg:w-10/12 grid md:grid-cols-[65%_1fr]  grid-cols-1   mx-auto px-6  max-[1024]:px-0  md:pt-40  pt-[25px]">
        <div className="  flex flex-col gap-6 sm:justify-start justify-center sm:items-start items-center pt-20 md:pt-0  ">
          <CustomTypography fontSize="Title_Large">پرداخت یورویی و دلاری اشتراک ایمپو</CustomTypography>
          <div className="flex flex-col sm:justify-start justify-center sm:items-start items-center gap-3">
            <CustomTypography fontSize="Title_Small">
              برای خرید اشتراک ایمپو از خارج کشور می‌تونی طبق مراحل زیر پیش بری:
            </CustomTypography>
            <CustomTypography fontSize="Title_Small" className="mt-6">
              قدم اول :‌
            </CustomTypography>

            <CustomTypography fontSize="Body_Large">یکی از تعرفه‌های زیر رو انتخاب کنی: </CustomTypography>
            <CustomTypography fontSize="Body_Large" numbersMode="english" className="flex gap-1">
              اشتراک <CustomTypography fontSize="Body_Large">۶</CustomTypography> ماهه: €16 | $12
            </CustomTypography>
            <CustomTypography fontSize="Body_Large" numbersMode="english">
              اشتراک یک ساله: €25 | $20
            </CustomTypography>

            <CustomTypography fontSize="Title_Small" className="mt-6">
              قدم دوم:
            </CustomTypography>

            <CustomTypography fontSize="Body_Large">
              مبلغ طرح اشتراک رو با استفاده از
              <CustomLink
                href={PAYPAL_LINK}
                target="_blank"
                // className="flex items-center justify-center px-4 py-2 rounded-full my-4"
                className="underline"
              >
                لینک paypal
              </CustomLink>
              به ایمیل{' '}
              <u className="cursor-pointer" onClick={copylink}>
                sajjadiamirhossein30@gmail.com
              </u>{' '}
              پرداخت کن.
            </CustomTypography>

            <CustomLink
              href={PAYPAL_LINK}
              target="_blank"
              style={{ background: COLORS_LIST.Primary_Primary }}
              className="flex items-center justify-center px-4 py-2 rounded-full my-4"
            >
              <CustomTypography color="White" fontSize="Body_Large">
                از اینجا پرداخت کن
              </CustomTypography>
            </CustomLink>
          </div>
        </div>
        <CustomImage src="/assets/images/paypal.webp" width={1680} height={1692} alt="payment" />
      </div>
    </div>
  );
};

export default PaymentHeaderSection;

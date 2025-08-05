import { COLORS_LIST } from '@theme/colors';

import CloseIcon from '@assets/icons/Close Circle.svg';
import TickIcon from '@assets/icons/Unread.svg';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const PhotoGuide = () => {
  return (
    <div style={{ background: COLORS_LIST.Surface_SurfaceVariant }} className="min-w-full px-4 py-5">
      <div className="rounded-xl mb-3 px-4 py-5" style={{ background: COLORS_LIST.White }}>
        <CustomTypography fontSize="Lable_Medium">نکات مهم:</CustomTypography>
        <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>
        <div className="my-[18px] pr-[10px]">
          <CustomTypography fontSize="Body_Medium" className="mb-2">
            1. برای دریافت نتیجه دقیق، کیت را روی زمینه سفید و روشن قرار داده و سپس از آن عکس بگیرید.
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium">
            ۲. عکس رو در بازه زمانی مؤثر نوار تست بگیرید (معمولاً ۳-۵ دقیقه؛ برای جزئیات به دستورالعمل‌های نوار تست
            مراجعه کنید).
          </CustomTypography>
        </div>
      </div>

      <div className="rounded-xl mb-3 px-4 py-5" style={{ background: COLORS_LIST.White }}>
        <div className="flex items-center gap-1">
          <CustomTypography fontSize="Lable_Medium">محیط عکاسی</CustomTypography>
          <CustomTypography fontSize="Body_Small" tagType="span">
            (بهتر است که عکس‌ها را در یک محیط ثابت بگیرید)
          </CustomTypography>
        </div>

        <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>
        <div>
          <CustomImage
            src="/assets/images/babyCheckGuide/sampleKit.webp"
            alt="sampleKit"
            width={1368}
            height={524}
            priority={true}
          />
          <div className="flex items-center gap-1 my-2">
            <TickIcon />
            <CustomTypography fontSize="Body_Medium">نور سفید و روشن</CustomTypography>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <CustomImage src="/assets/images/babyCheckGuide/falseImg1.webp" alt="falseImg1" width={1368} height={524} />
            <div className="flex items-center gap-1 my-2">
              <CloseIcon />
              <CustomTypography fontSize="Body_Medium">نور خیلی کم</CustomTypography>
            </div>
          </div>
          <div>
            <CustomImage src="/assets/images/babyCheckGuide/falseImg2.webp" alt="falseImg2" width={1368} height={524} />
            <div className="flex items-center gap-1 my-2">
              <CloseIcon />
              <CustomTypography fontSize="Body_Medium">نور غیر سفید</CustomTypography>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl mb-5 px-4 py-5" style={{ background: COLORS_LIST.White }}>
        <CustomTypography fontSize="Lable_Medium"> بهترین موقعیت برای عکاسی</CustomTypography>
        <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>
        <div className="my-[18px] pr-[10px]">
          <div className="flex gap-1 flex-col items-start">
            <CustomTypography fontSize="Body_Medium">۱. گوشی رو هم‌‌راستا و موازی با میز نگه دارید.</CustomTypography>
            <CustomTypography fontSize="Body_Medium">
              ۲. کادر راهنمای بیبی چک رو با خط C نوار تست تراز کنید.
            </CustomTypography>
            <CustomTypography fontSize="Body_Medium">۳. گوشی رو بالا و پایین کنید تا فوکوس درست بشه.</CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGuide;

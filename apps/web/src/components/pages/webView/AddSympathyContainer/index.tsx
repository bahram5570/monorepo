import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const AddSympathyContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          برای اینکه بتونی همدلت رو اضافه کنی و رابطه قشنگ‌تری با پارتنرت بسازی تب همدل رو انتخاب کن
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/addSympathy/1.webp"
          alt="addSympathy1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>و دکمه‌ شروع همدلی رو در این صفحه انتخاب کن</CustomTypography>
        <CustomImage
          src="/assets/images/webView/addSympathy/2.webp"
          alt="addSympathy2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>در این قسمت شماره موبایل یا ایمیل پارتنر رو وارد کن</CustomTypography>

        <CustomImage
          src="/assets/images/webView/addSympathy/3.webp"
          alt="addSympathy3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>و یا کد اختصاصیت رو از این قسمت برای همدلت بفرست</CustomTypography>

        <CustomImage
          src="/assets/images/webView/addSympathy/4.webp"
          alt="addSympathy4"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          بعد از اینکه پارتنرت ایمپو آقایان رو نصب کرد، باید منتظر بمونی تا درخواست همدلیت رو قبول کنه
        </CustomTypography>

        <CustomImage
          src="/assets/images/webView/addSympathy/5.webp"
          alt="addSympathy5"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>بعد از تایید درخواست همدلی توسط پارتنرت می‌تونید وضعیت همدیگه رو ببینید</CustomTypography>

        <CustomImage
          src="/assets/images/webView/addSympathy/6.webp"
          alt="addSympathy6"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default AddSympathyContainer;

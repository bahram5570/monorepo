import { COLORS_LIST } from '@theme/colors';

import ImpoIcon from '@assets/icons/impo.svg';
import ImpoNameIcon from '@assets/icons/impoName.svg';
import CustomTypography from '@components/ui/CustomTypography';

const FooterInfo = () => {
  return (
    <div className="md:col-span-8 md:row-span-1">
      <div className="flex items-center gap-4 pb-4">
        <ImpoIcon className="w-[60px] hidden md:block" />
        <ImpoNameIcon className="w-[86px]" style={{ fill: COLORS_LIST.Primary_Primary }} />
      </div>

      <CustomTypography fontSize="Body_Medium">
        ایمپو بزرگترین پلتفرم حوزه سلامت زنان، متشکل از تیم‌های تخصصی پزشکان متخصص زنان، روان‌شناسی و سکس‌تراپی و همچنین
        کارشناسان و مهندسین حوزه فناوری اطلاعات است که در سال ۱۳۹۸ با هدف ارتقاء سلامت جسمانی و روانی زنان در دوران
        قاعدگی و بارداری و همچنین بهبود رابطه عاطفی و سلامت مردان ایجاد و در اختیار ایمپویی ها قرار گرفت.
      </CustomTypography>
    </div>
  );
};

export default FooterInfo;

import { COLORS_LIST } from '@theme/colors';

import WhatsAppIcon from '@assets/icons/WhatsApp.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { WHATSAPP_NUMBER } from '../constants';

const PaymentWhatsAppNumberContainer = () => {
  return (
    <div className="w-full md:w-11/12 lg:w-10/12 px-4 md:px-0 my-4 mx-auto">
      <div
        className="mt-4 px-9 md:px-[50px] py-4 md:py-[22px] rounded-3xl  md:block flex flex-col items-center justify-center"
        style={{ background: COLORS_LIST.Surface_SurfaceVariant }}
      >
        <div className="md:block flex flex-col items-center justify-center">
          <CustomTypography fontSize="Title_Large">ارتباط با ما</CustomTypography>
          <CustomTypography fontSize="Body_Large">
            در صورتی که مشکل یا سوالی برات پیش اومد، از طریق واتساپ باهامون در ارتباط باش:
          </CustomTypography>
        </div>
        <div className="flex items-end justify-end ">
          <CustomLink
            href={WHATSAPP_NUMBER}
            target="_blank"
            style={{ border: `1px solid ${COLORS_LIST.Primary_Primary}`, color: COLORS_LIST.Primary_Primary }}
            className="flex items-center justify-center px-4 py-2 rounded-full my-4 gap-1"
          >
            <WhatsAppIcon style={{ fill: COLORS_LIST.Primary_Primary }} />
            <CustomTypography color="Primary_Primary" fontSize="Lable_Medium">
              ارتباط از طریق واتساپ
            </CustomTypography>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default PaymentWhatsAppNumberContainer;

import { COLORS_LIST } from '@theme/colors';

import CallIcon from '@assets/icons/call-calling.svg';
// import LocationIcon from '@assets/icons/location.svg';
import EmailIcon from '@assets/icons/sms.svg';
import CustomTypography from '@components/ui/CustomTypography';

const ContactUsInfo = () => {
  return (
    <div className="flex flex-col gap-4  p-4 sm:p-0">
      <CustomTypography fontSize="Headline_Medium">راه های ارتباطی</CustomTypography>
      <div className="flex flex-col md:gap-8 gap-4">
        <div className="flex flex-row items-start gap-3">
          <CallIcon className="w-7 h-7" style={{ stroke: COLORS_LIST.Neutral_OnBackground }} />
          <div className="flex gap-2 w-full">
            <CustomTypography fontSize="Body_Large">شماره پشتیبانی:</CustomTypography>

            <div className="flex flex-col lg:flex-row gap-2 mr-auto">
              <CustomTypography fontSize="Body_Large" className="!select-auto text-end">
                02191011255
              </CustomTypography>

              <div className="hidden lg:block"> - </div>

              <CustomTypography fontSize="Body_Large" className="!select-auto text-end">
                09157097500
              </CustomTypography>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start gap-3">
          <EmailIcon className="w-7 h-7" style={{ stroke: COLORS_LIST.Neutral_OnBackground }} />
          <div className="flex gap-2 w-full">
            <CustomTypography fontSize="Body_Large">ایمیل:</CustomTypography>
            <CustomTypography fontSize="Body_Large" numbersMode="english" className="!select-auto text-end mr-auto">
              impo.app5@gmail.com
            </CustomTypography>
          </div>
        </div>
        {/* <div className="flex flex-row items-start gap-3">
          <LocationIcon className="w-7 h-7" style={{ stroke: COLORS_LIST.Neutral_OnBackground }} />
          <div className="flex sm:flex-col flex-row gap-2">
            <CustomTypography fontSize="Body_Large">آدرس:</CustomTypography>
            <CustomTypography fontSize="Body_Large">مشهد بلوار وکیل آباد. دانش آموز 9. پلاک 358</CustomTypography>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUsInfo;

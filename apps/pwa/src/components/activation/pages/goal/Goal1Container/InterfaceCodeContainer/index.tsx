import Button from '@components/ui/Button';
import CustomModal from '@components/ui/CustomModal';
import Typography from '@components/ui/Typography';
import CustomLink from '@components/women/pages/mainRoutes/partner/PartnerContainer/CustomLink';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import useInterfaceCode from './__hooks__/useInterfaceCode';
import { INTERFACE_CODE_MODAL } from './constants';
import { InterfaceCodeContainerProps } from './types';

const InterfaceCodeContainer = ({ onComplete }: InterfaceCodeContainerProps) => {
  const { colors, typography } = useTheme();
  const { getQueryParams } = useQueryParamsHandler();
  const { code, codeHandler, submitHandler, isLoading } = useInterfaceCode({ onComplete });

  const isOpen = getQueryParams(INTERFACE_CODE_MODAL) !== null;

  return (
    <>
      <div className="fixed left-0 right-0 bottom-24 flex justify-center">
        <CustomLink
          labelSize="SmallProminet"
          backgroundColor="transparent"
          link={`?${INTERFACE_CODE_MODAL}=true`}
          lable="کد معرف داری؟ اینجا اضافه کن"
          id="interface-code-link"
        />
      </div>

      <CustomModal isOpen={isOpen} isFullScreen={false} isSlidingMode={true}>
        <div className="flex flex-col items-center pb-4">
          <Typography scale="Title" size="Medium">
            کد معرف
          </Typography>

          <Typography scale="Body" size="Medium" color="Neutral_OnSurface" className="text-center pt-2 pb-4">
            اینجا کدمعرفتو وارد کن تا هم خودت هم دوستت ده روز اشتراک رایگان بگیرین
          </Typography>

          <input
            value={code}
            placeholder="اینجا تایپ کن"
            onChange={(e) => codeHandler(e.target.value)}
            className="w-full h-[40px] border-[1px] rounded-full px-5 mb-6 flex items-center"
            style={{ ...typography.Body.Large, outline: 'none', borderColor: colors.Neutral_Surface }}
          />

          <Button
            size="medium"
            variant="fill"
            color="primary"
            isLoading={isLoading}
            onClick={submitHandler}
            isDisable={code.trim() === ''}
          >
            ارسال
          </Button>
        </div>
      </CustomModal>
    </>
  );
};

export default InterfaceCodeContainer;

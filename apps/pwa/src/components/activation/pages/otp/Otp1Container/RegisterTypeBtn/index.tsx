import { ACTIVATION_HEADING_SCRIPTS_ID } from '@components/activation/ActivationHeading/constants';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import { RegisterTypeBtnProps } from './types';

const RegisterTypeBtn = ({ isPhone, isPhoneToggleHandler }: RegisterTypeBtnProps) => {
  const { colors } = useTheme();

  const script = isPhone ? 'ورود/ثبت نام با ایمیل' : 'ورود/ثبت نام با شماره همراه';

  return (
    <div
      className="fixed top-0 left-0 right-0 mx-auto cursor-pointer  w-[100dvw] z-20"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      id={ACTIVATION_HEADING_SCRIPTS_ID}
    >
      <div
        className="mt-6 ml-4 w-fit px-4 py-2 rounded-full"
        style={{ backgroundColor: colors.White + '55' }}
        onClick={isPhoneToggleHandler}
      >
        <Typography scale="Lable" size="Medium">
          {script}
        </Typography>
      </div>
    </div>
  );
};

export default RegisterTypeBtn;

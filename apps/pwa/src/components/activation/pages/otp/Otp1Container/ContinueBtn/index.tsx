import { ACTIVATION_HEADING_SCRIPTS_ID } from '@components/activation/ActivationHeading/constants';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useCustomToast from '@hooks/useCustomToast';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import { ContinueBtnProps } from './types';

const ContinueBtn = ({ nextHandler, showContinueBtn, invalidMessage, isLoading }: ContinueBtnProps) => {
  const { colors, typography } = useTheme();
  const { onToast } = useCustomToast();

  const linkFont = typography.Body.Medium;
  const linkColor = colors.PrimaryWoman_Primary;

  const translate = `0 ${showContinueBtn ? '0' : '140px'}`;

  const submitHandler = () => {
    if (invalidMessage) {
      onToast({ message: invalidMessage, type: 'error' });
    } else {
      nextHandler();
    }
  };

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-4 duration-200 z-30 overflow-hidden"
      style={{ backgroundColor: colors.Neutral_Background }}
      id={ACTIVATION_HEADING_SCRIPTS_ID}
    >
      <div className="flex mx-auto w-[204px] min-w-fit">
        <Button
          size="medium"
          variant="fill"
          color="primary"
          isLoading={isLoading}
          onClick={submitHandler}
          style={{ translate, transition: '0.2s' }}
        >
          دریافت کد ورود
        </Button>
      </div>

      <div className="flex flex-row-reverse flex-wrap justify-center gap-1 pt-6 pb-5">
        <Typography scale="Body" size="Medium" className="whitespace-nowrap">
          با ورود به ایمپو،
        </Typography>

        <Link
          target="_blank"
          href="https://impo.app/terms"
          className="whitespace-nowrap border-b-[1px]"
          style={{ ...linkFont, color: linkColor, borderColor: linkColor }}
        >
          قوانین و شرایط
        </Link>

        <Typography scale="Body" size="Medium" className="whitespace-nowrap">
          استفاده از اپلیکیشن رو می‌پذیرم
        </Typography>
      </div>
    </div>
  );
};

export default ContinueBtn;

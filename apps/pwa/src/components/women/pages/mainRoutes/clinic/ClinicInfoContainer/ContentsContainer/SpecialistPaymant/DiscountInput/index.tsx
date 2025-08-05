import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useDiscountCode from './__hooks__/useDiscountCode';
import { DiscountInputProps } from './types';

const DiscountInput = ({ id, approvedCodeHandler }: DiscountInputProps) => {
  const { code, codeHandler, submitHandler, isLoading } = useDiscountCode({ id, approvedCodeHandler });
  const { colors, typography } = useTheme();

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <Typography scale="Title" size="Small">
        کد تخفیف
      </Typography>

      <div className="w-full flex items-center gap-2">
        <Button
          size="small"
          variant="fill"
          color="primary"
          className="px-6"
          fullWidth={false}
          isLoading={isLoading}
          onClick={submitHandler}
          isDisable={code.trim() === ''}
        >
          اعمال
        </Button>

        <input
          type="text"
          value={code}
          placeholder="اینجا بنویس"
          onChange={(e) => codeHandler(e.target.value)}
          className="w-full h-8 rounded-full px-4 py-[6px] border-[1px]"
          style={{ borderColor: colors.Neutral_Surface, ...typography.Body.Medium }}
        />
      </div>
    </div>
  );
};

export default DiscountInput;

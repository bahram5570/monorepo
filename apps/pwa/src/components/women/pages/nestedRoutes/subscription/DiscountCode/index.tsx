import DiscountCodeIcon from '@assets/icons/discountCode.svg';
import PlusIcon from '@assets/icons/plus.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import CodeInput from './CodeInput';
import useDiscountCode from './__hooks__/useDiscountCode';
import { DiscountCodeProps } from './types';

const DiscountCode = ({
  isValidDiscountCode,
  approvedCodeHandler,
  discountCodeHelper,
  loadingResponse,
  onApply,
}: DiscountCodeProps) => {
  const { colors } = useTheme();
  const { showDiscountInput, toggleShowHandler, code, codeHandler } = useDiscountCode();

  return (
    <div className="w-full rounded-xl p-3" style={{ backgroundColor: colors.Surface_SurfaceVariant }}>
      <div className="flex items-center justify-between">
        <PlusIcon
          className="w-7 h-auto"
          style={{ stroke: colors.Surface_Outline, rotate: showDiscountInput ? '45deg' : '0deg' }}
          onClick={toggleShowHandler}
        />

        <div className="flex items-center gap-2 ">
          <Typography scale="Body" size="Medium">
            کد تخفیف خود را اینجا وارد کنید
          </Typography>

          <DiscountCodeIcon className="w-6 h-auto" style={{ stroke: colors.Surface_Outline }} />
        </div>
      </div>

      {showDiscountInput && (
        <CodeInput
          code={code}
          codeHandler={codeHandler}
          loadingResponse={loadingResponse}
          onClick={() => onApply({ code })}
          discountCodeHelper={discountCodeHelper}
          isValidDiscountCode={isValidDiscountCode}
          approvedCodeHandler={approvedCodeHandler}
        />
      )}
    </div>
  );
};

export default DiscountCode;

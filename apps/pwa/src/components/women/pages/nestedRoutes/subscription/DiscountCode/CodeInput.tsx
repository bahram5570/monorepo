import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';

import useCodeStatus from './__hooks__/useCodeStatus';
import { CodeInputProps } from './types';

const CodeInput = ({
  isValidDiscountCode,
  approvedCodeHandler,
  discountCodeHelper,
  loadingResponse,
  codeHandler,
  onClick,
  code,
}: CodeInputProps) => {
  const { hasSubmitCodeHandler, scriptInfo } = useCodeStatus({
    approveCodeHandler: () => approvedCodeHandler(code),
    isValidDiscountCode,
    discountCodeHelper,
  });

  const clickHandler = () => {
    hasSubmitCodeHandler(true);
    onClick();
  };

  return (
    <>
      <div className="flex items-center gap-2 pt-4">
        <Button
          size="medium"
          variant="fill"
          color="primary"
          onClick={clickHandler}
          isLoading={loadingResponse}
          isDisable={code.trim() === ''}
        >
          اعمال
        </Button>

        <input
          className="w-[220px] h-full border-[1px] rounded-full py-1.5 px-4"
          onChange={(e) => codeHandler(e.target.value)}
        />
      </div>

      {scriptInfo && (
        <Typography scale="Body" size="Small" className="ml-auto pt-2" color="FREE-STYLE" freeColor={scriptInfo.color}>
          {scriptInfo.script}
        </Typography>
      )}
    </>
  );
};

export default CodeInput;

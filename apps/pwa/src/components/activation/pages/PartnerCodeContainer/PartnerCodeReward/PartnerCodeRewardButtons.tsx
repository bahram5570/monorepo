import Button from '@components/ui/Button';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { PARTNER_CODE_SHOW_INPUT_QUERY_NAME } from '../constants';
import { PartnerCodeRewardButtonsProps } from './types';

const PartnerCodeRewardButtons = (props: PartnerCodeRewardButtonsProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const completeHandler = () => {
    if (props.onComplete) {
      props.onComplete();
    }
  };

  const showInputHandler = () => {
    newQueryParamsHandler({ [PARTNER_CODE_SHOW_INPUT_QUERY_NAME]: 'true' });
  };

  return (
    <div className="w-full flex flex-col mt-auto px-4 pb-9 pt-1">
      <div className="w-full flex flex-col gap-1">
        {props.btnLabel2 && (
          <Button
            size="large"
            variant="text"
            color="onBackground"
            onClick={completeHandler}
            navigationLoadingId="PartnerCodeCompleteBtn"
          >
            {props.btnLabel2}
          </Button>
        )}

        <Button
          size="large"
          variant="fill"
          color="primary"
          onClick={showInputHandler}
          navigationLoadingId="PartnerCodeShowInputBtn"
        >
          {props.btnLabel}
        </Button>
      </div>
    </div>
  );
};

export default PartnerCodeRewardButtons;

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import PartnerCodeInput from './PartnerCodeInput';
import PartnerCodeReward from './PartnerCodeReward';
import { PARTNER_CODE_SHOW_INPUT_QUERY_NAME } from './constants';
import { PartnerCodeContainerProps } from './types';

const PartnerCodeContainer = ({
  reward,
  question,
  onSubmit,
  firstName,
  isLoading,
  onComplete,
}: PartnerCodeContainerProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const isShowInputOpen = getQueryParams(PARTNER_CODE_SHOW_INPUT_QUERY_NAME) !== null;

  return (
    <>
      {isShowInputOpen && <PartnerCodeInput question={question} onSubmit={onSubmit} isLoading={isLoading} />}
      {!isShowInputOpen && <PartnerCodeReward reward={reward} firstName={firstName} onComplete={onComplete} />}
    </>
  );
};

export default PartnerCodeContainer;

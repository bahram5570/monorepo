import CyclesModule from '@components/activation/CyclesModule';

import DatesContainer from '../DatesContainer';
import { TotalCycleLengthDatePageProps } from './types';

const TotalCycleLengthDatePage = ({ callCreateSampleApi, payloadHandler }: TotalCycleLengthDatePageProps) => {
  const selectHandler = (v: number) => {
    payloadHandler({ totalCycleLength: v });
  };

  const continueHandler = () => {
    if (callCreateSampleApi) {
      callCreateSampleApi();
    }
  };

  return (
    <DatesContainer
      description="برای مشخص کردن روزهای باروریت نیاز داریم بدونیم:"
      subtitle="(فاصله بین شروع دو تا پریودت چقدره)"
      title="معمولا هر چند روز یک بار پریود می‌شی؟ "
      continueHandler={continueHandler}
    >
      <CyclesModule name="totalCycleLength" valueHandler={selectHandler} />
    </DatesContainer>
  );
};

export default TotalCycleLengthDatePage;

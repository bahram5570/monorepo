import ProgressCycleLoading from '@components/ProgressCycleLoading';
import useRouteSequence from '@hooks/useRouteSequence';

import { CompleteRegisterCycleLoadingProps } from './types';

const CompleteRegisterCycleLoading = ({ createCycleImage }: CompleteRegisterCycleLoadingProps) => {
  const { sequenceHandler } = useRouteSequence();

  const completeHandler = () => {
    sequenceHandler([
      `/protected/cycle?dummyData=${Math.random()}`,
      `/protected/cycle?dummyData=${Math.random()}`,
      `/protected/cycle?dummyData=${Math.random()}`,
    ]);
  };

  return (
    <ProgressCycleLoading
      isSuccess={true}
      image={createCycleImage}
      onComplete={completeHandler}
      titles={{
        main: 'تا ساخته شدن چرخه متناسب با اطلاعاتی که وارد کردی، چند لحظه صبر کن',
        subTitle1: 'در حال آماده سازی برنامه',
        subTitle2: 'متناسب با اطلاعات شما',
      }}
    />
  );
};

export default CompleteRegisterCycleLoading;

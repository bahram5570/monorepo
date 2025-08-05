import { Suspense } from 'react';

import ProgressCycleLoading from '@components/ProgressCycleLoading';
import useGoalFinder from '@hooks/__activation__/useGoalFinder';
import useActivationGoBackHandler from '@providers/__activation__/ActivationProvider/__hooks__/useActivationGoBackHandler';
import { useRouter } from 'next/navigation';

import PageContainer from './PageContainer';
import useCreateSample from './__hooks__/useCreateSample';
import useFakeCycleBackHandler from './__hooks__/useFakeCycleBackHandler';
import { FakeCyclePageContainerProps } from './types';

const FakeCyclePageContainer = ({ payload, payloadHandler }: FakeCyclePageContainerProps) => {
  useFakeCycleBackHandler();
  const router = useRouter();
  useActivationGoBackHandler();
  const { goalInfo } = useGoalFinder({ status: payload.status, periodStatus: payload.periodStatus });
  const { createCycleLoading, callCreateSampleApi, createCycleSuccess } = useCreateSample({
    payload,
  });

  const successHandler = () => {
    router.push('sampleCycle');
  };

  return (
    <>
      <Suspense>
        <PageContainer goalInfo={goalInfo} callCreateSampleApi={callCreateSampleApi} payloadHandler={payloadHandler} />
      </Suspense>

      {(createCycleLoading || createCycleSuccess) && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30">
          <ProgressCycleLoading
            onComplete={successHandler}
            isSuccess={createCycleSuccess}
            image={goalInfo.createCycleImage}
            titles={{
              main: 'تا ساخته شدن چرخه متناسب با اطلاعاتی که وارد کردی، چند لحظه صبر کن',
              subTitle1: 'در حال آماده سازی برنامه',
              subTitle2: 'متناسب با اطلاعات شما',
            }}
          />
        </div>
      )}
    </>
  );
};

export default FakeCyclePageContainer;

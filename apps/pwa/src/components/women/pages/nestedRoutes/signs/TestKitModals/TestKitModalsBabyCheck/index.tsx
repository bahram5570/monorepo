import Loading from '@components/ui/Loading';
import { BabyCheckTypeEnums } from '@components/women/KitTests/KitTestBabyCheck/enum';
import KitTestDigitalBabyCheck from '@components/women/KitTests/KitTestDigitalBabyCheck';
import KitTestRange from '@components/women/KitTests/KitTestRange';
import useNewTestKit from '@components/women/KitTests/KitTestsContainer/__hooks__/useNewTestKit';
import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import TestKitModalsContainer from '../TestKitModalsContainer';
import { TestKitModalsBabyCheckProps } from './types';

const TestKitModalsBabyCheck = ({
  gregorianDate,
  babyCheckType,
  moduleType,
  onComplete,
}: TestKitModalsBabyCheckProps) => {
  const router = useRouter();
  const { newQuery } = useCustomReactQuery();

  const successHandler = () => {
    router.back();
    newQuery({ queryKey: ['resetBabyCheck'], payload: {} });
    onComplete && onComplete();
  };

  const { submitHandler, isLoading } = useNewTestKit({ moduleType, gregorianDate, onSuccess: successHandler });

  return (
    <TestKitModalsContainer title="انجام تست بارداری">
      <>
        {babyCheckType === BabyCheckTypeEnums.Analog && (
          <KitTestRange
            moduleType={KitTestModuleTypeEnums.BabyCheck}
            subimtHandler={(result) => submitHandler({ babyCheckResult: result, babyCheckType })}
          />
        )}

        {babyCheckType === BabyCheckTypeEnums.Digital && (
          <KitTestDigitalBabyCheck
            submitHandler={(babyCheckResult) => submitHandler({ babyCheckResult, babyCheckType })}
          />
        )}

        {isLoading && <Loading />}
      </>
    </TestKitModalsContainer>
  );
};

export default TestKitModalsBabyCheck;

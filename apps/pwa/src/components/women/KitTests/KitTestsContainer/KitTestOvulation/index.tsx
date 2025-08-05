import Loading from '@components/ui/Loading';

import KitTestRange from '../../KitTestRange';
import useNewTestKit from '../__hooks__/useNewTestKit';
import { KitTestOvulationProps } from './types';

const KitTestOvulation = ({ moduleType, gregorianDate, onComplete }: KitTestOvulationProps) => {
  const { submitHandler, isLoading, resetKey } = useNewTestKit({ moduleType, gregorianDate, onSuccess: onComplete });

  return (
    <>
      <KitTestRange moduleType={moduleType} subimtHandler={(v) => submitHandler({ result: v })} key={resetKey} />
      {isLoading && <Loading />}
    </>
  );
};

export default KitTestOvulation;

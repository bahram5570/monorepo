'use client';

import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';

import CycleContainer from '../CycleContainer';
import ErrorCycleAppBar from '../ErrorCycleAppBar';
import useGetData from '../__hooks__/useGetData';

const CyclePageContainer = () => {
  const { data, cycleResetKey, hasError } = useGetData();

  return (
    <div style={{ paddingBottom: FOOTER_HEIGTH + 16 }} key={cycleResetKey}>
      {hasError && <ErrorCycleAppBar />}
      {!hasError && <CycleContainer data={data} />}
    </div>
  );
};

export default CyclePageContainer;

import { useState } from 'react';

import Spinner from '@components/ui/Spinner';
import WomenPageLayout from '@components/women/WomenPageLayout';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import PopUpEditCycleFinishPeriod from './PopUpEditCycleFinishPeriod';
import PopUpEditCycleLastPeriod from './PopUpEditCycleLastPeriod';
import { EditPageTypes, PopUpEditCycleProps } from './types';

const PopUpEditCycle = ({ popUp }: PopUpEditCycleProps) => {
  const [startTime, setStartTime] = useState('');
  const { isLoading, data: profileData } = useGetProfileData();
  const [editPage, setEditPage] = useState<EditPageTypes>('lastPeriod');

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0} paddingBottom={0}>
      {isLoading && <Spinner color="primary" />}

      {!isLoading && profileData && popUp && (
        <div className="flex flex-col items-center px-4 py-8 min-h-[100dvh]">
          {editPage === 'lastPeriod' && (
            <PopUpEditCycleLastPeriod
              data={popUp.data}
              startTime={startTime}
              editPageHandler={setEditPage}
              startTimeHandler={setStartTime}
            />
          )}

          {editPage === 'finishPeriod' && (
            <PopUpEditCycleFinishPeriod
              startTime={startTime}
              periodLength={profileData.periodLength}
              data={popUp.data.button.action.nextStep.data}
            />
          )}
        </div>
      )}
    </WomenPageLayout>
  );
};

export default PopUpEditCycle;

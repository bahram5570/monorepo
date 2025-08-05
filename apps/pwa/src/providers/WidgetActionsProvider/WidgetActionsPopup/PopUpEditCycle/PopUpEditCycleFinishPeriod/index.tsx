import { useState } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import DateModule from '@components/activation/DateModule';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import useEditCycleDateIntervals from './__hooks__/useEditCycleDateIntervals';
import useSubmitFinishPeriod from './__hooks__/useSubmitFinishPeriod';
import { PopUpEditCycleFinishPeriodProps } from './types';

const PopUpEditCycleFinishPeriod = ({ data, startTime, periodLength }: PopUpEditCycleFinishPeriodProps) => {
  const [endTime, setEndTime] = useState('');
  const datesInterval = useEditCycleDateIntervals({ startTime, periodLength });

  const { callApi, isLoading } = useSubmitFinishPeriod(endTime);

  return (
    <>
      <Typography scale="Body" size="Medium" style={{ paddingTop: HEADER_HEIGHT }}>
        {data.title}
      </Typography>

      <Typography scale="Title" size="Small" className="mt-1 mb-[80px]">
        {data.description}
      </Typography>

      {datesInterval && (
        <DateModule
          valueHandler={setEndTime}
          endDate={datesInterval.endDate}
          startDate={datesInterval.startDate}
          defaultDate={datesInterval.defaultDate}
        />
      )}

      <Button
        size="medium"
        variant="fill"
        onClick={callApi}
        color="FREE-STYLES"
        className="mt-auto"
        isLoading={isLoading}
        buttonColor={colorFormatConverter(data.button.backgroundColor)}
        contentsColor={colorFormatConverter(data.button.foregroundColor)}
      >
        {data.button.text}
      </Button>
    </>
  );
};

export default PopUpEditCycleFinishPeriod;

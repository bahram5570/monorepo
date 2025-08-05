import { useState } from 'react';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';

import KitTestRangeResult from './KitTestRangeResult';
import KitTestRangeSlider from './KitTestRangeSlider';
import { KIT_TEST_RANGE_DEFAULT_RANGE_VALUE, kitTestScripts } from './constants';
import { KitTestRangeProps, RangeValueHandlerTypes } from './types';

const KitTestRange = ({ moduleType, subimtHandler }: KitTestRangeProps) => {
  const [isValueSelected, setIsValueSelected] = useState(false);
  const [rangeValue, setRangeValue] = useState(KIT_TEST_RANGE_DEFAULT_RANGE_VALUE);

  const rangeValueHandler: RangeValueHandlerTypes = (v) => {
    setRangeValue(v);
    setIsValueSelected(true);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <KitTestRangeResult moduleType={moduleType} rangeValue={rangeValue} isValueSelected={isValueSelected} />

      <KitTestRangeSlider rangeValue={rangeValue} rangeValueHandler={rangeValueHandler} />

      <Typography scale="Body" size="Medium" className="mb-4 mt-2">
        {kitTestScripts[moduleType].guideScript}
      </Typography>

      <Button
        size="medium"
        variant="fill"
        color="primary"
        isDisable={!isValueSelected}
        onClick={() => subimtHandler(rangeValue / 100)}
      >
        ادامه
      </Button>
    </div>
  );
};

export default KitTestRange;

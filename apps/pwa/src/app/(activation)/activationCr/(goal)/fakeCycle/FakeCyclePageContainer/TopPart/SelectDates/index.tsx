import Button from '@components/ui/Button';

import SelectDatesTable from './SelectDatesTable';
import { SelectDatesProps } from './types';

const SelectDates = ({
  selectDatesBottomIcon,
  selectDatesBottomText,
  selectDatesTopText,
  selectDatesTopIcon,
  selectDatesBtnText,
  openDatesHandler,
  isPregnancy,
}: SelectDatesProps) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-3 pb-32 z-10" onClick={openDatesHandler}>
      <SelectDatesTable
        selectDatesBottomIcon={selectDatesBottomIcon}
        selectDatesBottomText={selectDatesBottomText}
        selectDatesTopText={selectDatesTopText}
        selectDatesTopIcon={selectDatesTopIcon}
        isPregnancy={isPregnancy}
      />

      <Button
        size="medium"
        variant="fill"
        color="primary"
        className="py-3 "
        onClick={() => {}}
        navigationLoadingId="SelectDates"
      >
        {selectDatesBtnText}
      </Button>
    </div>
  );
};

export default SelectDates;

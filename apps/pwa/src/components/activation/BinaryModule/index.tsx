import { useEffect, useRef, useState } from 'react';

import { binaryMaker, indexToBinary, toBinary } from './__utils__';
import { isDevelopeMode } from '@utils/system';

import ItemGenerator from './ItemGenerator';
import useSingleSelectFinder from './__hooks__/useSingleSelectFinder';
import { BinaryModuleProps, SelectedItemHandlerTypes } from './types';

const BinaryModule = ({ binaryOptions, valueHandler }: BinaryModuleProps) => {
  const [value, setValue] = useState(0);
  const isFirstTime = useRef(isDevelopeMode());
  const { binaryArray, selectedIndexList } = binaryMaker(value);
  const { isSingleSelectIndexList } = useSingleSelectFinder({ binaryOptions });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      valueHandler(value);
    }
  }, [value]);

  const selectedItemHandler: SelectedItemHandlerTypes = ({ selectedIndex, isSingleSelect }) => {
    if (isSingleSelect) {
      setValue(toBinary(selectedIndex));
    } else {
      if (isSingleSelectIndexList.includes(value)) {
        setValue(toBinary(selectedIndex));
      } else {
        const result = indexToBinary({ binaryArray, selectedIndex });
        setValue(result);
      }
    }
  };

  return (
    <div className="w-full px-4 pb-10 pt-2 flex flex-col gap-3">
      {binaryOptions.map((option) => (
        <ItemGenerator
          option={option}
          key={option.index}
          selectedItemHandler={selectedItemHandler}
          isSelected={selectedIndexList.includes(option.index)}
        />
      ))}
    </div>
  );
};

export default BinaryModule;

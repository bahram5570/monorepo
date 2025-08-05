import { useState } from 'react';

import RadioGenerator from './RadioGenerator';
import { RadioModuleProps, SelectedItemTypes } from './types';

const RadioModule = ({ options, onSelect }: RadioModuleProps) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItemTypes>(null);

  const selectedItemHandler = (id: number) => {
    setSelectedItem(id);

    const result = options.find((i) => i.id === id)?.id || -1;
    onSelect(result);
  };

  const hasIcon = options[0].icon;

  return (
    <div className={`w-full px-4 flex flex-col gap-3 ${hasIcon ? 'py-0' : 'pb-10 pt-2'}`}>
      {options.map((item, index) => (
        <RadioGenerator
          key={index}
          option={item}
          selectedItem={selectedItem}
          selectedItemHandler={selectedItemHandler}
        />
      ))}
    </div>
  );
};

export default RadioModule;

import { useState } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import OptionButton from '@components/ui/OptionButton';
import Typography from '@components/ui/Typography';
import useWidgetActions from '@hooks/useWidgetActions';

import { PopupMultiOptionProps, SelectHandlerTypes } from './types';

const PopupMultiOption = ({ data }: PopupMultiOptionProps) => {
  const { actionHandler } = useWidgetActions();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const selectHandler: SelectHandlerTypes = (i) => {
    setSelectedOptionIndex(i);
  };

  const submitHandler = () => {
    const action = data.items?.[selectedOptionIndex]?.action;

    if (action) {
      actionHandler(action);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Typography scale="Lable" size="Large">
        {data.title}
      </Typography>

      <div className="w-full flex flex-col gap-3 py-6">
        {data.items.map((option, index) => (
          <OptionButton
            key={index}
            text={option.title}
            onClick={() => selectHandler(index)}
            isSelected={selectedOptionIndex === index}
          />
        ))}
      </div>

      <Button
        size="large"
        variant="fill"
        color="FREE-STYLES"
        onClick={submitHandler}
        buttonColor={colorFormatConverter(data.submit.backgroundColor)}
        contentsColor={colorFormatConverter(data.submit.foregroundColor)}
      >
        {data.submit.text}
      </Button>
    </div>
  );
};

export default PopupMultiOption;

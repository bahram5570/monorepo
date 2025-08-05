import { binarySeparator } from '@utils/numbers';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { EditActivationInitStrategyEnum } from '../__hooks__/useGetData/enum';
import EditActivationOptionGenerator from './EditActivationOptionGenerator';
import { EditActivationCardGeneratorProps } from './types';

const EditActivationCardGenerator = (props: EditActivationCardGeneratorProps) => {
  const { colors } = useTheme();

  let selectedValuesList: number[] = [];

  switch (props.initStrategy) {
    case EditActivationInitStrategyEnum.Binary:
      selectedValuesList = binarySeparator(props.value);
      break;

    case EditActivationInitStrategyEnum.NoneBinary:
      selectedValuesList = [props.value];
      break;
  }

  return (
    <div className="w-full flex flex-col items-end px-4 pt-3 rounded-xl" style={{ backgroundColor: colors.White }}>
      <Typography scale="Lable" size="Medium" color="Neutral_OnBackground" className="pb-2">
        {props.title}
      </Typography>

      {props.options.map((item, index) => {
        const isSelected = selectedValuesList.includes(item.value);

        return (
          <EditActivationOptionGenerator
            onClick={() => props.selectOptionHandler({ item, isSelected })}
            isFirstIndex={index === 0}
            isSelected={isSelected}
            title={item.title}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default EditActivationCardGenerator;

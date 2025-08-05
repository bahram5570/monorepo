import { currentDate } from '@utils/dates';

import Typography from '@components/ui/Typography';
import KitTestOvulation from '@components/women/KitTests/KitTestsContainer/KitTestOvulation';
import KitTestsList from '@components/women/KitTests/KitTestsContainer/KitTestsList';
import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import OvulationKitModal from './OvulationKitModal';
import useUpdateOvulationData from './__hooks__/useUpdateOvulationData';
import { WidgetOvulationKitCardProps } from './types';

const { gDate } = currentDate();

const WidgetOvulationKitCard = ({ data }: WidgetOvulationKitCardProps) => {
  const { onAdd, onDelete, updatedData } = useUpdateOvulationData({ data });

  return (
    <WidgetCardContainer title={updatedData.title}>
      <>
        <Typography scale="Body" size="Medium" color="Neutral_OnBackground" className="w-full pb-5">
          {updatedData.description}
        </Typography>

        <KitTestOvulation moduleType={KitTestModuleTypeEnums.Ovulation} gregorianDate={gDate} onComplete={onAdd} />

        <KitTestsList
          gregorianDate={gDate}
          moduleType={KitTestModuleTypeEnums.Ovulation}
          data={{ babyChecks: [], ovulationResult: updatedData }}
        />

        <OvulationKitModal data={updatedData} onDelete={onDelete} />
      </>
    </WidgetCardContainer>
  );
};

export default WidgetOvulationKitCard;

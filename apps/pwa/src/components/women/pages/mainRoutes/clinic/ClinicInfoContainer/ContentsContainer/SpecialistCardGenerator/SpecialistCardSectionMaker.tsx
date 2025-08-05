import Typography from '@components/ui/Typography';

import { SpecialistCardSectionMakerProps } from './types';

const SpecialistCardSectionMaker = ({
  notSelectedColor,
  isSelectedColor,
  isSelected,
  value,
  title,
  Icon,
}: SpecialistCardSectionMakerProps) => (
  <div className="flex flex-col items-center py-1 gap-1">
    <Icon className="w-5 h-auto" style={{ stroke: isSelected ? isSelectedColor : notSelectedColor }} />

    <Typography
      scale="Lable"
      size="Small"
      color="FREE-STYLE"
      className="pt-2 pb-1"
      freeColor={isSelected ? isSelectedColor : notSelectedColor}
    >
      {title}
    </Typography>

    <Typography scale="Lable" size="Medium">
      {value}
    </Typography>
  </div>
);

export default SpecialistCardSectionMaker;

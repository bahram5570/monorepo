import { SpecialistCardGeneratorProps } from '../../SpecialistCardGenerator/types';
import { DrTypes } from '../../__hooks__/useSelectSpecialist/types';

export interface SpecialistsListProps
  extends Pick<SpecialistCardGeneratorProps, 'selectedDoctorHandler' | 'selectedId'> {
  dr: DrTypes;
}

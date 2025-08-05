import { DrTypes } from '../../__hooks__/useGetDataClinicInfo/types';
import { SelectedDoctorHandlerTypes } from '../__hooks__/useSelectSpecialist/types';

type DoctorTypes = Pick<
  DrTypes,
  'image' | 'isOnline' | 'firstName' | 'lastName' | 'speciliaty' | 'nezamNumber' | 'minTime' | 'rate' | 'rrCount' | 'id'
>;

export type SpecialistCardGeneratorProps = DoctorTypes & {
  selectedDoctorHandler: SelectedDoctorHandlerTypes;
  hasCommentsButton?: boolean;
  selectedId: string;
};

export interface SpecialistCardSectionMakerProps {
  notSelectedColor: string;
  isSelectedColor: string;
  isSelected: boolean;
  value: string;
  title: string;
  Icon: JSX;
}

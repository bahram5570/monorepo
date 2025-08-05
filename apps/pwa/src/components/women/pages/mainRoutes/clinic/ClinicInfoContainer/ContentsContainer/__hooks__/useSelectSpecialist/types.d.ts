import { ContentsContainerProps } from '../../types';

export type DrTypes = Pick<ContentsContainerProps, 'data'>['data']['info']['dr'];

export interface UseSelectSpecialistProps {
  dr: DrTypes;
}

export type SelectedDoctorHandlerTypes = (id: string) => void;

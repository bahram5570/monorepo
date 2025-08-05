import { ClinicResponseTypes } from '../__hooks__/useGetData/types';

export interface ActiveTicketsHeadingProps
  extends Pick<ClinicResponseTypes, 'tickets' | 'activeTicketsMore' | 'activeTicketsOneTitle'> {}

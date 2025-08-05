import { RoutinResponseTypes } from '../__hooks__/useGetData/types';

export interface RoutinWriterProps
  extends Pick<RoutinResponseTypes, 'writerName' | 'writerSpeciality' | 'writerIcon'> {}

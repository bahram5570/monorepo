import { PageContainerProps } from '../../PageContainer/types';

export interface TotalCycleLengthDatePageProps extends Pick<PageContainerProps, 'payloadHandler'> {
  callCreateSampleApi?: () => void;
}

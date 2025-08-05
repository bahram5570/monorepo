import { PageContainerProps } from '../../PageContainer/types';

export interface PregnancyDatePageProps extends Pick<PageContainerProps, 'payloadHandler'> {
  callCreateSampleApi?: () => void;
}

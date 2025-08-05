import { WidgetHintCardGeneratorProps } from '../types';

type InfoTypes = Pick<WidgetHintCardGeneratorProps, 'writerName' | 'writerSpeciality' | 'writerIcon'>;
export interface WidgetHintCardWriterInfoProps extends InfoTypes {}

import { ApprovedCodeHandlerTypes } from '../__hooks__/useBuy/types';
import { SpecialistPaymantProps } from '../types';

export interface DiscountInputProps extends Pick<SpecialistPaymantProps, 'id'> {
  approvedCodeHandler: ApprovedCodeHandlerTypes;
}

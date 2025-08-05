import { PartnerCodeResponseType } from '../__hooks__/useGetdata/type';

export interface PartnerCodePropsType {
  partnerCode: string | undefined;
  isLoading: boolean;
  refreshLoading: boolean;
  onRefreshCodeHandler: () => void;
}

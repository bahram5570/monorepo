import { ClinicTicketsTyes } from '../../../ClinicContainer/__hooks__/useGetData/types';

type TicketsTypes = Omit<ClinicTicketsTyes, 'fileName' | 'ticketType' | 'clinicName'>;

export type TicketsHistoryResponseTypes = {
  tickets: TicketsTypes[];
  totalCount: number;
};

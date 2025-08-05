import { ClinicResponseTypes } from '../__hooks__/useGetData/types';

type TicketsTypes = { tickets: Pick<ClinicResponseTypes, 'tickets'>['tickets'] | undefined };

export interface ActiveTicketsListProps extends TicketsTypes {}

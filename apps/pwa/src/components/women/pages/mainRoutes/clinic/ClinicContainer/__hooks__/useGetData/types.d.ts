import { ClinicStateEnums } from '../../../enumbs';

type ClinicTicketsTyes = {
  drAcadimicCertificate: string;
  state: ClinicStateEnums;
  drSpeciality: string;
  createTime: string;
  clinicName: string;
  ticketType: number;
  fileName: string;
  ticketId: string;
  drValid: boolean;
  clinicId: number;
  isRate: boolean;
  drImage: string;
  drName: string;
  rate: number;
  text: string;
};

export type ClinicTypesTypes = {
  description: string;
  priceUnit: string;
  price: number;
  image: string;
  name: string;
  id: number;
};

export type ClinicResponseTypes = {
  activeTicketsOneTitle: string;
  tickets: ClinicTicketsTyes[];
  activeTicketsTitle: string;
  activeTicketsMore: string;
  types: ClinicTypesTypes[];
  currentValue: number;
  listOfValues: string;
  description: string;
  title: string;
};

import { ClinicTicketsTyes } from '../ClinicContainer/__hooks__/useGetData/types';

export interface ClinicTicketGeneratorProps
  extends Pick<
    ClinicTicketsTyes,
    | 'drName'
    | 'drSpeciality'
    | 'drImage'
    | 'createTime'
    | 'state'
    | 'ticketId'
    | 'ticketType'
    | 'text'
    | 'fileName'
    | 'rate'
  > {
  stylingTypes: 'heading' | 'lists';
}

export interface TicketDoctorProps
  extends Pick<ClinicTicketGeneratorProps, 'drImage' | 'drName' | 'drSpeciality' | 'stylingTypes'> {}

export interface TicketTimeProps extends Pick<ClinicTicketGeneratorProps, 'createTime' | 'stylingTypes'> {}

export interface TicketSmallLabelProps extends Pick<ClinicTicketGeneratorProps, 'state' | 'stylingTypes' | 'rate'> {}

export interface TicketBigLabelProps extends Pick<ClinicTicketGeneratorProps, 'state' | 'stylingTypes'> {}

export interface TicketArrowProps extends Pick<ClinicTicketGeneratorProps, 'stylingTypes'> {}

export interface TicketRateProps extends Pick<ClinicTicketGeneratorProps, 'rate'> {}

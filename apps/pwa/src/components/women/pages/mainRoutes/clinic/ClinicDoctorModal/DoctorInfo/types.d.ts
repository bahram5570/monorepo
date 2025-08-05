import { ClinicInfoResponseTypes } from '../../ClinicInfoContainer/__hooks__/useGetDataClinicInfo/types';

type DrTypes = Pick<ClinicInfoResponseTypes, 'info'>['info']['dr'][0];
type InfoTypes = Pick<DrTypes, 'firstName' | 'lastName' | 'image' | 'nezamNumber' | 'speciliaty'>;

export interface DoctorInfoProps extends InfoTypes {}

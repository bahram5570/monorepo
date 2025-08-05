import { ClinicInfoResponseTypes, DrTypes } from '../../__hooks__/useGetDataClinicInfo/types';

type TypeTypes = Pick<ClinicInfoResponseTypes, 'type'>;
type SelectedDoctorTypes = Pick<
  DrTypes,
  'firstName' | 'image' | 'isOnline' | 'lastName' | 'nezamNumber' | 'speciliaty' | 'id'
>;
type InfoTypes = Pick<
  Pick<ClinicInfoResponseTypes, 'info'>['info'],
  'discountPrice' | 'currentValue' | 'payPrice' | 'price' | 'priceUnit' | 'submit' | 'support'
>;
type PaymentTypes = TypeTypes & SelectedDoctorTypes & InfoTypes;

export interface SpecialistPaymantProps extends PaymentTypes {
  questionValues: QuestionValuesTypes;
}

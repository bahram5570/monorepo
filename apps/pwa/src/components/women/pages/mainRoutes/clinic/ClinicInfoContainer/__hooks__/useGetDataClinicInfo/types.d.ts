export type ClinicInfoIdTypes = string;

export type DrTypes = {
  academicCertificate: string;
  hasPrescription: boolean;
  prescriptionText: string;
  ticketCount: string;
  nezamNumber: string;
  speciliaty: string;
  isOnline: boolean;
  firstName: string;
  lastName: string;
  rrCount: number;
  minTime: string;
  resume: string;
  image: string;
  rate: string;
  id: string;
};

export type ClinicInfoResponseTypes = {
  type: number;
  info: {
    discountPercent: number;
    discountMessage: string;
    discountString: string;
    pdpDescription: string;
    discountPrice: number;
    currentValue: number;
    currentValue: number;
    discountCode: string;
    description: string;
    infoHelper: string;
    priceUnit: string;
    visible: boolean;
    isValid: boolean;
    payPrice: number;
    submit: string;
    name: string;
    dr: DrTypes[];
    price: number;
    info: string;
    cta: string;
    type: number;
    text: string;
    id: number;
    support: {
      helper: string;
      title: string;
      phone: string;
    };
  };
};

export type PregnancyDatePayloadTypes = { isDelivery: false; pregnancyDate: string };

export type PregnancyDate1ResponseTypes = { week: number; dayOfWeek: number };

export type PregnancyDate2ResponseTypes = {
  items: {
    to: string;
    week: number;
    from: string;
  }[];
};

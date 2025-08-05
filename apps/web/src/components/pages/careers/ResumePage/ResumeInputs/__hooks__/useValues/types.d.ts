export type ResumeValuesTypes = {
  name: string;
  file: string;
  email: string;
  phone: string;
  jobId: string;
};

export type ResumeValuesHandlerTypes = (name: keyof ResumeValuesTypes, value: string) => void;

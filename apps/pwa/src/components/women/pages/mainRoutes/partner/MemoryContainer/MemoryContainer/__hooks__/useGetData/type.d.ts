export type MemoryType = {
  title: string;
  text: string;
  fileName: string;
  time: string;
  fromMan: boolean;
  id: string;
  validPartner: boolean;
  textPartner: string;
  timePartner: string;
};

export type ResponsePropsType = {
  valid: boolean;
  count: number;
  memories: MemoryType[];
};

export type MemoriesDataType = Pick<ResponsePropsType, 'memories'>;

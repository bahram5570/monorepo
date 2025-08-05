export type QueryDataHandlerTypes = (v: string) =>
  | null
  | {
      [x in string]: number;
    };

export type ShareExperienceOrdersListTypes = {
  [x in string]: number;
};

export type ListTypes = { queryName: string; orderNumber: number }[];

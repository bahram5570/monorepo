export type HiringItemTypes = {
  title: string;
  isOn: boolean;
  OnIcon: any;
  OffIcon: any;
};

export type HiringItemsListTypes = Omit<HiringItemTypes, 'isOn'>[];

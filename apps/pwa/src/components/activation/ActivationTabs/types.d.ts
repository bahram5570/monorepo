export type ActivationTabsListTypes = { text: string; value: number }[];

export interface ActivationTabsTypes {
  tab: number;
  tabHandler: (t: number) => void;
  tabsList: ActivationTabsListTypes;
}

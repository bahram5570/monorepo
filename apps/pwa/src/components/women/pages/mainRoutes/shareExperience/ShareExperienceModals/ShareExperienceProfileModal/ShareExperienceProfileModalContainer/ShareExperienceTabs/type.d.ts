export type OptionsTypes = {
  id: number;
  text: string;
}[];

export type ShareExperenceTabsPropsType = { tab: number; options: OptionsTypes; tabHandler: (t: number) => void };

export interface FakeCycleContainerProps {
  children: React.ReactNode;
}

export interface PageIconsProps {
  selectedHandler: () => void;
  isSelected: boolean;
  title: string;
  Icon: any;
}

export type SelectedPageTypes = 'cycle' | 'articles';

export type FakeCycleFooterListTypes = { name: SelectedPageTypes; Icon: any; title: string }[];

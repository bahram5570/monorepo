import { HeaderIconEnums } from './enums';

export type HeaderProps = {
  leftElement1?: keyof typeof HeaderIconEnums;
  leftElement2?: keyof typeof HeaderIconEnums;
  rightElement?: keyof typeof HeaderIconEnums;
  headerBackgroundColor?: string;
  hasScalingAnimation?: boolean;
  rightElementScript?: string;
  middleScript?: string;
};

export type WomenPageLayoutProps = HeaderProps & {
  paddingBottom?: number | string;
  paddingTop?: number | string;
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
};

export type IconsListTypes = {
  [key in HeaderIconEnums]: React.JSX;
};

export type IconComponentMakerProps = (propd: { iconElement: React.JSX; path: string; loadingId: string }) => React.JSX;

export type OperatingSystemTypes = 'windows' | 'ios' | 'android';

export interface OperatingSystemProviderContainerTypes {
  children: React.ReactNode;
  os: OperatingSystemTypes;
}

export type OperatingSystemContextTypes = {
  operatingSystem: OperatingSystemTypes;
};

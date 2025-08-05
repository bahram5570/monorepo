export type IsAddToHomeTypes = boolean | null;
export type OperatingSystemTypes = 'windows' | 'android' | 'ios';

export type OperatingSystemContextTypes = {
  isAddToHome: IsAddToHomeTypes;
  operatingSystem: OperatingSystemTypes;
};

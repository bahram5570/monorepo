export type CareersValuesItemTypes = { title: string; description: string; Icon: any };

export interface ValuesBigScreenTypes {
  list: CareersValuesItemTypes[];
}

export interface ValuesSmallScreenTypes {
  list: CareersValuesItemTypes[];
}

export interface ArrowGeneratorTypes {
  isNextSlide: boolean;
  slidesHandler: (isNextSlide: boolean) => void;
}

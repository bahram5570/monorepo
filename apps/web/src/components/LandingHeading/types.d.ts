export interface LandingHeadingTypes {
  image: string;
  imageClassName?: string;
  contentElement: JSX.Elemen;
  imagePosition: 'center' | 'bottom';
  backgroundImage: string | [string, string];
}

export interface LandingHeadingImageTypes
  extends Pick<LandingHeadingTypes, 'image' | 'imageClassName' | 'imagePosition'> {}

export interface LandingHeadingContentsTypes extends Pick<LandingHeadingTypes, 'contentElement'> {}

export type AppFeaturesContentsTypes = {
  title: string;
  lintTo: string;
  description: string;
  mobile: {
    image: string;
    row: `${string}/${string}`;
    column: `${string}/${string}`;
  };
  desktop: {
    image: string;
    row: `${string}/${string}`;
    column: `${string}/${string}`;
  };
}[];

export type AppFeaturesContentsListTypes = {
  [key in string]: AppFeaturesContentsTypes;
};

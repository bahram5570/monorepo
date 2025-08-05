export type PageNavigationHandlerTypes = (v: {
  id: string | number;
  linkTo?: string | -1;
  showProgressBar: boolean;
}) => void;

export type LoadingStatesTypes = false | string | number;

export type PageNavigationLoadingContextTypes = {
  pageNavigationLoading: LoadingStatesTypes;
  pageNavigationHandler: PageNavigationHandlerTypes;
};

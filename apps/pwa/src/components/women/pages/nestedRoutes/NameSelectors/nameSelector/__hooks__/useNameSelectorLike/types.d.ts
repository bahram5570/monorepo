import { FetchSelectNameCardTypes, FetchSelectNameTypes } from '@services/selectNameServices/types';

export type IsLikedHandlerTypes = (v: FetchSelectNameCardTypes) => void;

export type IsLikedMakerTypes = (v: {
  card: FetchSelectNameCardTypes;
  data: FetchSelectNameTypes;
}) => FetchSelectNameTypes;

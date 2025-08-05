import { PreviewImageTypes } from '@providers/PreviewImageProvider/types';

export type PreviewImageHandlerTypes = (v: { hasPreviewImage?: boolean } & PreviewImageTypes) => void;

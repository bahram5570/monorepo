export type PreviewImageShapeTypes = undefined | 'full' | 'circle';

export type PreviewImageTypes = { src: string; shape: PreviewImageShapeTypes };

export interface PreviewImageContainerProps extends PreviewImageTypes {}

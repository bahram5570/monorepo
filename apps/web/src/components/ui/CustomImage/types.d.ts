import { ImageProps } from 'next/image';

export interface CustomImageTypes extends ImageProps {
  hasPreviewImage?: boolean;
  previewBackground?: string;
}

export interface CustomImagePreviewTypes extends Pick<CustomImageTypes, 'previewBackground'> {
  previewImage: boolean;
  closeHandler: () => void;
  src: string | StaticImport;
}

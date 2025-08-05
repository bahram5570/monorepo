import { FileUploadImageFileTypes } from '@hooks/useFileUpload/types';
import { PreviewImageShapeTypes } from '@providers/PreviewImageProvider/types';

type ImageApiTypes = '/file' | '/support/article/panel/image' | '/woman';

export type CustomImageProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  width?: number | string;
  height?: number | string;
  imageApi?: ImageApiTypes;
  hasPreviewImage?: boolean;
  style?: React.CSSProperties;
  objectFit?: 'cover' | 'contain';
  src: string | FileUploadImageFileTypes;
  previewImageShape?: PreviewImageShapeTypes;
};

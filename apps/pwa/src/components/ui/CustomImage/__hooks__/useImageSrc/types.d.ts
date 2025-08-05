import { CustomImageProps } from '@components/ui/CustomImage/types';

type ItemsTypes = Pick<CustomImageProps, 'src' | 'imageApi'>;
export interface UseImageSrcProps {
  onError: () => void;
  src: ItemsTypes['src'];
  imageApi: ItemsTypes['imageApi'];
}

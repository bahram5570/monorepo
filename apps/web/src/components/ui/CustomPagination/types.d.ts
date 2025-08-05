import { CustomTypographyTypes } from '../CustomTypography/types';

export interface CustomPaginationTypes {
  page: number;
  totalPage: number;
  className?: string;
  style?: React.CSSProperties;
  pageHandler: (p: number) => void;
  size?: 'small' | 'medium' | 'large';
  fontSize?: Pick<CustomTypographyTypes, 'fontSize'>['fontSize'];
}

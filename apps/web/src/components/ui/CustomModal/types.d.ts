import { TransitionProps } from '@mui/material/transitions';

export interface CustomModalTypes {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'center' | 'bottom';
  slideDirection?: 'down' | 'left' | 'right' | 'up';
}

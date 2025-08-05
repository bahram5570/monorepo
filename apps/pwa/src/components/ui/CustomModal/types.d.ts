export interface CustomModalProps {
  isOpen?: boolean;
  className?: string;
  isFullScreen?: boolean;
  isSlidingMode?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
  zIndex?: number;
}

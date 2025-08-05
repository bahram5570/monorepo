import { WidgetBabyCheckKitCardProps } from '../types';

export interface TestBabyKitModalsPropsType extends WidgetBabyCheckKitCardProps {
  onAdd?: () => void;
  onDelete: (index: number) => void;
}

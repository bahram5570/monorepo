import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';

export interface InputsProps {
  payloadHandler: PayloadHandlerTypes;
  value: string;
}

export type ValueHandlerTypes = (e: React.ChangeEvent<HTMLInputElement>) => void;

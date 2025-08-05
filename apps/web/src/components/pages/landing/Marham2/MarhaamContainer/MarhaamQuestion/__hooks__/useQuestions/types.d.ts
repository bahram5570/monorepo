import { MarhaamResultTypes } from '@components/pages/landing/Marhaam/types';

export type ValuesHandlerTypes = (name: keyof MarhaamResultTypes, value: number) => void;

export type StepHandlerTypes = (isNext: boolean) => void;

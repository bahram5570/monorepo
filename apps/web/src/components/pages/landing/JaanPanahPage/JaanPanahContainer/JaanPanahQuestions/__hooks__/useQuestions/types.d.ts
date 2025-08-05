import { JaanPanahResultTypes } from '@components/pages/landing/JaanPanahPage/types';

export type ValuesHandlerTypes = (name: keyof JaanPanahResultTypes, value: number) => void;

export type StepHandlerTypes = (isNext: boolean) => void;

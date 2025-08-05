import { ContinueBtnProps } from '../../types';

type ItemsTypes = Pick<ContinueBtnProps, 'invalidMessage' | 'nextActivation' | 'onRegister'>;
export type NextActivationHandlerTypes = (v: ItemsTypes) => void;

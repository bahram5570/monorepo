import { UsePageInfoProps } from '../types';

type KeysTypes = Pick<Pick<UsePageInfoProps, 'info'>['info'], 'payloadKeys'>;
type PayloadhandlerTypes = Pick<UsePageInfoProps, 'payloadHandler'>;
type ItemsTypes = KeysTypes & PayloadhandlerTypes;
export interface UseClearCurrentPagePayloadProps extends ItemsTypes {}

import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';

export type DeleteModalDataTypes = { moduleType: KitTestModuleTypeEnums; index: number; createTime: string };

export type OpenDeleteModalHandlerTypes = (v: DeleteModalDataTypes) => void;

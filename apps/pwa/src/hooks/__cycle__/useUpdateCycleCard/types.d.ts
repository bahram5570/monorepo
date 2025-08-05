type StatusTypes = 'refetch' | 'normal';
export type CycleCardStatusTypes = { status: StatusTypes };

export type CycleCardStatusHandlerTypes = (v: StatusTypes) => void;

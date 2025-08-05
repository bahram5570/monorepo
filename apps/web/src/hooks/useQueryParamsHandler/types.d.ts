export type newQueryParamsHandlerTypes = (q: { [key in string]: number | string }) => void;

export type removeQueryParamsHandlerTypes = (q: string) => void;

export type GetQueryTypes = (queryName: string) => string | null;

export type QueryKeyTypes = { queryKey: [string] };

export type UpdateQueryTypes = QueryKeyTypes & { payload: object };

export type RefetchQueryTypes = QueryKeyTypes & { gcTime?: number };

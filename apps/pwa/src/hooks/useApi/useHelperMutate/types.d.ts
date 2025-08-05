import { HttpContentTypeTyps } from '@services/http/types';

import { DeleteTypes, PostTypes, PutTypes, UseApiCommonObjectsTypes } from '../types';

type MethodsTypes = PutTypes | PostTypes | DeleteTypes;

export type UseHelperMutateProps<T> = MethodsTypes & UseApiCommonObjectsTypes<T>;

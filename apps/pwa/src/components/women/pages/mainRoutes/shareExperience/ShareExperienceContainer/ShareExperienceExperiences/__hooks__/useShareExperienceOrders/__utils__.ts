import { QueryDataHandlerTypes } from './types';

export const queryDataHandler: QueryDataHandlerTypes = (v) => {
  try {
    return JSON.parse(v);
  } catch (err) {
    return null;
  }
};

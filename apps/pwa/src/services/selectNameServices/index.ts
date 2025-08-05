import http from '@services/http';

import { FetchSelectNameActivationTypes, FetchSelectNameTypes } from './types';

export const fetchSelectNameActivation = async () => {
  return await http<FetchSelectNameActivationTypes>({ url: 'feature/babyname/activation' });
};

export const fetchSelectName = async () => {
  return await http<FetchSelectNameTypes>({ url: 'feature/babyname/data' });
};

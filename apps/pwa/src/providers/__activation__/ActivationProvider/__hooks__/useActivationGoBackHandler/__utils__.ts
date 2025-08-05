import {
  ACTIVATION_SECTION_1_NAME,
  ACTIVATION_SECTION_1_PATHS,
  ACTIVATION_SECTION_2_NAME,
  ACTIVATION_SECTION_2_PATHS,
} from '@providers/__activation__/ActivationProvider/__constants__/activationContants';

export const sectionStorageChecker = () => {
  const url = (location.pathname + location.search).replace('/activation', '');
  const queryIndex = url.indexOf('?');
  const pathName = url.slice(0, queryIndex).replace('/', '');

  if (ACTIVATION_SECTION_2_PATHS.includes(pathName)) {
    sessionStorage.removeItem(ACTIVATION_SECTION_2_NAME);
  }
  if (ACTIVATION_SECTION_1_PATHS.includes(pathName)) {
    sessionStorage.removeItem(ACTIVATION_SECTION_1_NAME);
  }
};

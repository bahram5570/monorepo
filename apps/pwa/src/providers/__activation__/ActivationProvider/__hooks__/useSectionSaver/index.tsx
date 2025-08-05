import {
  ACTIVATION_FIRST_PATH_OF_SECTION_2,
  ACTIVATION_FIRST_PATH_OF_SECTION_3,
  ACTIVATION_SECTION_1_NAME,
  ACTIVATION_SECTION_1_PAYLOADS,
  ACTIVATION_SECTION_2_NAME,
  ACTIVATION_SECTION_2_PAYLOADS,
} from '@providers/__activation__/ActivationProvider/__constants__/activationContants';
import { ActivationPayloadKeysTypes } from '@providers/__activation__/types';

import useActivationPayload from '../useActivationPayload';

const useSectionSaver = () => {
  const { payload } = useActivationPayload();

  const sectionSaverHandler = (r: string) => {
    if (r === ACTIVATION_FIRST_PATH_OF_SECTION_3) {
      let result = {};

      for (let k in payload) {
        const key = k as ActivationPayloadKeysTypes;

        if (ACTIVATION_SECTION_2_PAYLOADS.includes(key)) {
          result = { ...result, [key]: payload[key] };
        }
      }

      sessionStorage.setItem(ACTIVATION_SECTION_2_NAME, JSON.stringify(result));
    }

    if (r === ACTIVATION_FIRST_PATH_OF_SECTION_2) {
      let result = {};

      for (let k in payload) {
        const key = k as ActivationPayloadKeysTypes;

        if (ACTIVATION_SECTION_1_PAYLOADS.includes(key)) {
          result = { ...result, [key]: payload[key] };
        }
      }

      sessionStorage.setItem(ACTIVATION_SECTION_1_NAME, JSON.stringify(result));
    }
  };

  return { sectionSaverHandler };
};

export default useSectionSaver;

import { useEffect, useState } from 'react';

import { EditActivationInitStrategyEnum, EditActivationOptionsEnum } from '../useGetData/enum';
import { EditActivationQuestionsTypes } from '../useGetData/types';
import { EditActivationPayloadTypes, SelectHandlerValueTypes } from './types';

const useEditActivationPayload = (questions: EditActivationQuestionsTypes[]) => {
  const [multiQuestionsKeynameList, setMultiQuestionsKeynameList] = useState<string[]>([]);
  const [editActivationPayload, setEditActivationPayload] = useState<EditActivationPayloadTypes>({});

  useEffect(() => {
    let result: EditActivationPayloadTypes = {};
    const multiQuestionsList: string[] = [];

    questions.forEach((question) => {
      let latestOptionStrategy = EditActivationOptionsEnum.Single;

      switch (question.initStrategy) {
        case EditActivationInitStrategyEnum.NoneBinary:
          latestOptionStrategy = EditActivationOptionsEnum.Single;
          break;

        case EditActivationInitStrategyEnum.Binary:
          multiQuestionsList.push(question.keyName);
          const selectedOption = question.options.find((item) => item.value === question.defaultValue);

          if (selectedOption) {
            latestOptionStrategy = selectedOption.optionStrategy;
          } else {
            latestOptionStrategy = EditActivationOptionsEnum.Multi;
          }
          break;
      }

      result = { ...result, [question.keyName]: { value: question.defaultValue, latestOptionStrategy } };
    });

    setEditActivationPayload(result);
    setMultiQuestionsKeynameList(multiQuestionsList);
  }, [questions]);

  const selectHandler = (v: SelectHandlerValueTypes) => {
    const copyValues = { ...editActivationPayload };

    if (typeof copyValues?.[v.keyName] !== 'undefined') {
      let result = copyValues[v.keyName];

      if (result.value === -1) {
        result.value = v.item.value;
      } else {
        switch (v.item.optionStrategy) {
          case EditActivationOptionsEnum.Multi:
            if (result.latestOptionStrategy === EditActivationOptionsEnum.Single) {
              result.value = v.item.value;
            } else {
              if (v.isSelected) {
                result.value = result.value - v.item.value;
              } else {
                result.value = result.value + v.item.value;
              }
            }

            break;

          case EditActivationOptionsEnum.Single:
            result.value = v.item.value;
            break;
        }
      }

      result.latestOptionStrategy = v.item.optionStrategy;
      copyValues[v.keyName] = result;
      setEditActivationPayload(copyValues);
    }
  };

  return { selectHandler, editActivationPayload, multiQuestionsKeynameList };
};

export default useEditActivationPayload;

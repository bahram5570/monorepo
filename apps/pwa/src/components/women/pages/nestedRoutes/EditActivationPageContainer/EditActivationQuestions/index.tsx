import { Fragment } from 'react';

import Button from '@components/ui/Button';

import EditActivationCardGenerator from '../EditActivationCardGenerator';
import useEditActivationPayload from '../__hooks__/useEditActivationPayload';
import useEditActivationSubmit from '../__hooks__/useEditActivationSubmit';
import { EditActivationQuestionsProps } from './types';

const EditActivationQuestions = ({ questions }: EditActivationQuestionsProps) => {
  const { submitHandler, isLoading } = useEditActivationSubmit();
  const { selectHandler, editActivationPayload, multiQuestionsKeynameList } = useEditActivationPayload(questions);

  const isDisable = multiQuestionsKeynameList.some((k) => editActivationPayload[k].value <= 0);

  return (
    <>
      {questions.map((item, index) => {
        const cardValue = editActivationPayload?.[item.keyName]?.value;

        if (typeof cardValue === 'undefined') {
          return <Fragment key={index} />;
        }

        return (
          <EditActivationCardGenerator
            selectOptionHandler={(v) => selectHandler({ ...v, keyName: item.keyName })}
            initStrategy={item.initStrategy}
            options={item.options}
            title={item.title}
            value={cardValue}
            key={index}
          />
        );
      })}

      <div className="w-full pt-2 mt-auto">
        <Button
          onClick={() => submitHandler(editActivationPayload)}
          isLoading={isLoading}
          isDisable={isDisable}
          color="primary"
          variant="fill"
          size="medium"
        >
          ثبت اطلاعات
        </Button>
      </div>
    </>
  );
};

export default EditActivationQuestions;

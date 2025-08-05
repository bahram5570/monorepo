import { useState } from 'react';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import QuestionGenerator from './QuestionGenerator';
import useSubmit from './__hooks__/useSubmit';
import { QuestionCheckupPropsType } from './type';

const QuestionCheckup = ({ question }: QuestionCheckupPropsType) => {
  const { colors } = useTheme();
  const { isLoading, submitHandler } = useSubmit();
  const [selectedValueList, setSelectedValueList] = useState<{ [key: string]: number }>({});

  const handleSelectionChange = (key: string, selectedValue: number) => {
    setSelectedValueList((prevState) => ({
      ...prevState,
      [key]: selectedValue,
    }));
  };

  if (!question) {
    return <></>;
  }

  const checkEmptySelectedValueList = Object.keys(selectedValueList).length === 0;
  return (
    <>
      <div style={{ background: colors.White }} className="rounded-xl w-full flex flex-row relative ">
        <div className="w-full p-3">
          <div className="flex flex-col justify-end items-end  divide-y-[1px]">
            <Typography scale="Lable" size="Large" className="py-2">
              {question.title}
            </Typography>
            <div className="w-full">
              {question.questions.map((question, index) => {
                return (
                  <div key={index}>
                    <QuestionGenerator
                      options={question.options}
                      text={question.text}
                      handleSelectionChange={handleSelectionChange}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Button
        size="medium"
        variant="fill"
        color="primary"
        onClick={() => {
          submitHandler({ selectedValues: selectedValueList, type: question?.type });
        }}
        className="mt-auto"
        isLoading={isLoading}
        isDisable={checkEmptySelectedValueList}
      >
        ثبت اطلاعات
      </Button>
    </>
  );
};

export default QuestionCheckup;

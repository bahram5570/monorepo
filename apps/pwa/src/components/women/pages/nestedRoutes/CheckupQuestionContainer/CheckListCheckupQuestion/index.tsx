import Typography from '@components/ui/Typography';

import CheckupQuestionContainer from '../CheckupQuestionContainer';
import { CheckListCheckupQuestionPropsType } from './type';

const CheckListCheckupQuestion = ({ checkList }: CheckListCheckupQuestionPropsType) => {
  if (!checkList) {
    return <></>;
  }

  return (
    <CheckupQuestionContainer>
      <div className=" px-4 py-2 w-full">
        <div className="flex flex-col justify-end items-end w-full">
          <Typography scale="Lable" size="Large" className="py-2 border-b-[1px] w-full">
            {checkList.title}
          </Typography>
          <div>
            <ul className="list-disc px-5 py-2" style={{ direction: 'rtl' }}>
              {checkList.items.map((item, index) => {
                return (
                  <li key={index} className="t">
                    <Typography scale="Body" size="Medium">
                      {item}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </CheckupQuestionContainer>
  );
};

export default CheckListCheckupQuestion;

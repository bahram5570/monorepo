import Typography from '@components/ui/Typography';

import CheckupQuestionContainer from '../CheckupQuestionContainer';
import ReadMoreText from './ReadMoreText';
import { InformationCheckupQestionPropsType } from './type';

const InformationCheckupQestion = ({ information }: InformationCheckupQestionPropsType) => {
  if (!information) {
    return <></>;
  }

  return (
    <CheckupQuestionContainer>
      <div className=" px-4 py-2">
        <div className="flex flex-col justify-end items-end  divide-y-[1px]">
          <Typography scale="Lable" size="Large" className="py-2">
            {information.title}
          </Typography>

          <ReadMoreText maxLines={4} text={information.text || ''} />
        </div>
      </div>
    </CheckupQuestionContainer>
  );
};

export default InformationCheckupQestion;

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import NewReplyBtn from './NewReplyBtn';
import NewReplyText from './NewReplyText';
import NewReplyTopPart from './NewReplyTopPart';
import useSubmit from './__hooks__/useSubmit';
import useText from './__hooks__/useText';
import { ShareExperienceNewReplyModalContainerProps } from './types';

const ShareExperienceNewReplyModalContainer = ({ data }: ShareExperienceNewReplyModalContainerProps) => {
  const { text, textHandler } = useText();
  const { submitHandler, isLoading } = useSubmit({ data, text });

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="نظر جدید" paddingTop={0}>
      <div className="flex flex-col min-h-[100dvh]" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
        <NewReplyTopPart text={text} name={data.name} avatar={data.avatar} />
        <NewReplyText text={text} textHandler={textHandler} />
        <NewReplyBtn text={text} submitHandler={submitHandler} isLoading={isLoading} />
      </div>
    </WomenPageLayout>
  );
};

export default ShareExperienceNewReplyModalContainer;

import useBreakPoint from '@hooks/useBreakPoint';
import useCustomToast from '@hooks/useCustomToast';
import { COLORS_LIST } from '@theme/colors';

import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';

import ArticleIdNewRate from './ArticleIdNewRate';
import ArticleIdNewTextarea from './ArticleIdNewTextarea';
import ArticleIdNewTitleGenerator from './ArticleIdNewTitleGenerator';
import useNewComment from './__hooks__/useNewComment';
import { handleNewCommentDisable, handleNewCommentValidation } from './__utils__';
import { ArticleIdCommentsNewCommentTypes } from './types';

const ArticleIdCommentsNewComment = ({ articleId }: ArticleIdCommentsNewCommentTypes) => {
  const { onToast } = useCustomToast();
  const { breakPoint } = useBreakPoint();
  const { submitNewCommentHandler, isLoading, commentPayload, commentPayloadHandler, ratePayload, ratePayloadHandler } =
    useNewComment(articleId);

  const submitHandler = () => {
    const invalidMessage = handleNewCommentValidation({ commentPayload, ratePayload });

    if (typeof invalidMessage === 'undefined') {
      submitNewCommentHandler();
    } else {
      onToast({ type: 'error', message: invalidMessage });
    }
  };

  const isDisable = handleNewCommentDisable({ commentPayload, ratePayload });

  return (
    <div className="w-full">
      <CustomTypography
        fontSize={breakPoint.mobile ? 'Headline_Small' : 'Headline_Medium'}
        color={'Surface_InverseSurface'}
        className="pb-6"
      >
        ثبت نظر
      </CustomTypography>

      <div className="w-full flex flex-col gap-5">
        <div className="w-full">
          <ArticleIdNewTitleGenerator title="به مقاله امتیاز بدید و دیدگاه خود را بنویسید" hasStar={true} />

          <ArticleIdNewTextarea
            message={commentPayload.message}
            messageHandler={(v) => commentPayloadHandler(v, 'message')}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-8">
          <div className="w-full">
            <ArticleIdNewTitleGenerator title="نام کامل" hasStar={true} />

            <CustomInput
              hasOutline={true}
              fontSize="Body_Medium"
              value={commentPayload.name}
              className="w-full p-4 rounded-xl"
              onValue={(v) => commentPayloadHandler(v, 'name')}
              style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
            />
          </div>

          <div className="w-full">
            <ArticleIdNewTitleGenerator title="شماره" hasStar={true} />

            <CustomInput
              hasOutline={true}
              fontSize="Body_Medium"
              value={commentPayload.phone}
              className="w-full p-4 rounded-xl"
              onValue={(v) => commentPayloadHandler(v, 'phone')}
              style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
            />
          </div>
        </div>

        <div className="w-full">
          <ArticleIdNewTitleGenerator title="به مقاله امتیاز بدید" hasStar={true} />

          <ArticleIdNewRate rate={ratePayload.rate} rateHandler={ratePayloadHandler} />
        </div>
      </div>

      <div className="w-full flex justify-center pt-10">
        <CustomButton
          varient="outline"
          isLoading={isLoading}
          isDisable={isDisable}
          fontSize="Body_Large"
          onClick={submitHandler}
        >
          ثبت دیدگاه
        </CustomButton>
      </div>
    </div>
  );
};

export default ArticleIdCommentsNewComment;

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { NEW_COMMENT_FOOTER_SIZE } from './constants';
import { ShareExperienceNewCommentFooterModuleProps } from './types';

const ShareExperienceNewCommentFooterModule = ({
  placeholder,
  queries,
  avatar,
}: ShareExperienceNewCommentFooterModuleProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler(queries);
    pageNavigationHandler({ id: 'ShareExperienceNewCommentFooterModule', showProgressBar: true });
  };

  return (
    <div
      onClick={selectHandler}
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: NEW_COMMENT_FOOTER_SIZE, backgroundColor: colors.White }}
      className="sticky left-0 right-0 bottom-0 w-full mx-auto px-5 flex items-center justify-between shadow-[0px_-2px_5px_#00000022] z-30"
    >
      <div
        style={{ backgroundColor: colors.PrimaryWoman_Primary }}
        className="w-fit px-3 py-1 rounded-full select-none pointer-events-none"
      >
        <Typography scale="Body" size="Small" color="White">
          ارسال
        </Typography>
      </div>

      <div className="flex items-center gap-4 select-none pointer-events-none">
        <Typography scale="Body" size="Small" color="Surface_OutlineVariant">
          {placeholder}
        </Typography>

        <CustomImage src={avatar} width={36} className="rounded-full" />
      </div>
    </div>
  );
};

export default ShareExperienceNewCommentFooterModule;

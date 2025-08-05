import { shareExperienceCommentQueryMaker } from '@utils/shareExperience';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ShareExperienceContentsModuleProps } from './types';

const ShareExperienceContentsModule = ({ text, image, hasLinkTo, isSelf, id }: ShareExperienceContentsModuleProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    if (hasLinkTo) {
      if (!isSelf) {
        pageNavigationHandler({ id, showProgressBar: true });

        const { queryKey, queryValue } = shareExperienceCommentQueryMaker(id);
        newQueryParamsHandler({ [queryKey]: queryValue });
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 pt-1 pb-4 px-2" dir="rtl">
      <div onClick={selectHandler}>
        <Typography scale="Body" size="Small" color="Neutral_OnBackground">
          {text}
        </Typography>
      </div>

      {image.trim().length > 0 && (
        <CustomImage
          src={image}
          hasPreviewImage={true}
          previewImageShape="full"
          className="aspect-[16_/_9] rounded-xl object-cover"
        />
      )}
    </div>
  );
};

export default ShareExperienceContentsModule;
